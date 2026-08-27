/**
 * oraculo.ts — INCOMPLETO (parte del reto)
 * ------------------------------------------
 * La lógica es la misma que en la versión JavaScript, pero aquí faltan
 * anotaciones de tipo. `tsc` marcará errores en los lugares indicados.
 */

import { Criatura, Mood, Rareza } from "./tipos";

// --- Closures ---------------------------------------------------------------
export function crearContadorConsultas() {
  let total = 0;

  return {
    registrar() {
      total += 1;
      return total;
    },
    obtenerTotal() {
      return total;
    },
  };
}

// --- Funciones de orden superior --------------------------------------------
// TODO: a esta función le faltan los tipos de sus parámetros.
// tsc marcará: "Parameter 'lista' implicitly has an 'any' type" (TS7006)
// y lo mismo para 'mood'. Agrega los tipos correctos.
export function filtrarPorMood(lista: Criatura[], mood: Mood) {
  return lista.filter((criatura) => criatura.mood === mood);
}

export function calcularEnergiaPromedio(lista: Criatura[]): number {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acumulado, criatura) => acumulado + criatura.energia, 0);
  return Math.round(suma / lista.length);
}

// --- Destructuring + spread/rest ---------------------------------------------
// TODO: esta función intenta leer `.rareza` de las criaturas, pero la
// interface `Criatura` en tipos.ts todavía no declara ese campo.
// tsc marcará: "Property 'rareza' does not exist on type 'Criatura'" (TS2339).
export function combinarCriaturas(criaturaA: Criatura, criaturaB: Criatura): Criatura {
  const { energia: energiaA, ...restoA } = criaturaA;
  const { energia: energiaB } = criaturaB;

  return {
    ...restoA,
    ...criaturaB,
    id: `${criaturaA.id}-${criaturaB.id}`,
    nombre: `${criaturaA.nombre} + ${criaturaB.nombre}`,
    energia: Math.round((energiaA + energiaB) / 2),
    mood: criaturaA.mood,
    rareza: criaturaA.rareza, // <- aquí aparece el error TS2339
  };
}

// --- Promesas, async/await y manejo de errores --------------------------------
function simularCargaCriatura(criatura: Criatura): Promise<Criatura> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!criatura || !criatura.mood) {
        reject(new Error(`Criatura inválida (id: ${criatura?.id})`));
        return;
      }
      resolve(criatura);
    }, 200);
  });
}

export async function cargarCriaturas(lista: Criatura[]): Promise<Criatura[]> {
  try {
    const criaturasCargadas = await Promise.all(
      lista.map((criatura) => simularCargaCriatura(criatura))
    );
    return criaturasCargadas;
  } catch (error) {
    console.error("No se pudieron cargar las criaturas:", (error as Error).message);
    return [];
  }
}
