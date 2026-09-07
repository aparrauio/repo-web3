/**
 * combate.ts
 * ----------
 * Misma lógica que la versión JavaScript, ya tipada. Si completas los
 * TODOs de tipos.ts, tendrás que ajustar aquí las referencias a
 * `personaje.nivelPoder` → `personaje.estadisticas.nivelPoder`.
 */

import { Personaje } from "./tipos";

export function crearContadorCombates() {
  let total = 0;
  return {
    registrar() { total += 1; return total; },
    obtenerTotal() { return total; },
  };
}

export function filtrarPorElemento(lista: Personaje[], elemento: string): Personaje[] {
  return lista.filter((personaje) => personaje.elemento === elemento);
}

export function filtrarPorNivel(lista: Personaje[], nivel: number): Personaje[] {
  return lista.filter((personaje) => personaje.nivelPoder === nivel);
}

export function calcularPoderPromedio(lista: Personaje[]): number {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acumulado, personaje) => acumulado + personaje.nivelPoder, 0);
  return Math.round(suma / lista.length);
}

export function fusionarPersonajes(personajeA: Personaje, personajeB: Personaje): Personaje {
  const { nivelPoder: poderA, ...restoA } = personajeA;
  const { nivelPoder: poderB } = personajeB;
  return {
    ...restoA,
    ...personajeB,
    id: `${personajeA.id}-${personajeB.id}`,
    nombre: `${personajeA.nombre} / ${personajeB.nombre}`,
    elemento: personajeA.elemento,
    nivelPoder: Math.round((poderA + poderB) / 2),
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
