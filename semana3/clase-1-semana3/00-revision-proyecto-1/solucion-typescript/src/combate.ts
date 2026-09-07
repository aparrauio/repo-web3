/**
 * combate.ts — SOLUCIÓN
 * ------------------------
 * Ajustado para leer `personaje.estadisticas.nivelPoder` en vez de
 * `personaje.nivelPoder`, ahora que las estadísticas viven anidadas.
 */

import { Personaje, Elemento } from "./tipos";

export function crearContadorCombates() {
  let total = 0;
  return {
    registrar() { total += 1; return total; },
    obtenerTotal() { return total; },
  };
}

// El parámetro `elemento` ahora es del tipo `Elemento` (unión literal),
// no un `string` cualquiera: solo se aceptan los 9 valores válidos.
export function filtrarPorElemento(lista: Personaje[], elemento: Elemento): Personaje[] {
  return lista.filter((personaje) => personaje.elemento === elemento);
}

export function calcularPoderPromedio(lista: Personaje[]): number {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acumulado, personaje) => acumulado + personaje.estadisticas.nivelPoder, 0);
  return Math.round(suma / lista.length);
}

export function fusionarPersonajes(personajeA: Personaje, personajeB: Personaje): Personaje {
  const { estadisticas: statsA, ...restoA } = personajeA;
  const { estadisticas: statsB } = personajeB;
  return {
    ...restoA,
    ...personajeB,
    id: `${personajeA.id}-${personajeB.id}`,
    nombre: `${personajeA.nombre} / ${personajeB.nombre}`,
    elemento: personajeA.elemento,
    estadisticas: {
      nivelPoder: Math.round((statsA.nivelPoder + statsB.nivelPoder) / 2),
      combatesGanados: statsA.combatesGanados + statsB.combatesGanados,
    },
  };
}

function simularInvocacion(personaje: Personaje): Promise<Personaje> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!personaje || !personaje.elemento) {
        reject(new Error(`Personaje inválido (id: ${personaje?.id})`));
        return;
      }
      resolve(personaje);
    }, 150);
  });
}

export async function invocarPersonajes(lista: Personaje[]): Promise<Personaje[]> {
  try {
    const invocados = await Promise.all(lista.map((personaje) => simularInvocacion(personaje)));
    return invocados;
  } catch (error) {
    console.error("No se pudieron invocar los personajes:", (error as Error).message);
    return [];
  }
}
