/**
 * utilidades.ts — SOLUCIÓN
 * ---------------------------
 * Genéricos + tipos utilitarios (Partial, Pick, Omit), cada uno comentado
 * explicando la decisión de tipado.
 */

import { Personaje } from "./tipos";

// --- Genéricos -------------------------------------------------------------
// `T extends { id: number | string }` le dice a TypeScript: "T puede ser
// cualquier tipo, siempre que tenga un campo `id`". Así esta función sirve
// para Personaje[], pero también para cualquier otra lista con esa forma.
export function buscarPorId<T extends { id: number | string }>(
  lista: T[],
  id: number | string
): T | undefined {
  return lista.find((item) => item.id === id);
}

// --- Partial<Personaje> ------------------------------------------------------
// Partial<T> vuelve TODOS los campos de T opcionales. Útil para representar
// "solo los campos que se quieren cambiar" en una actualización.
export type ActualizacionPersonaje = Partial<Personaje>;

export function actualizarPersonaje(personaje: Personaje, cambios: ActualizacionPersonaje): Personaje {
  return { ...personaje, ...cambios };
}

// --- Pick<Personaje, ...> -----------------------------------------------------
// Pick<T, K> construye un tipo con SOLO los campos indicados en K (una unión
// de nombres de campo separados por `|`, no por comas).
export type ResumenPersonaje = Pick<Personaje, "nombre" | "elemento" | "arma">;

export function resumirPersonaje(personaje: Personaje): ResumenPersonaje {
  const { nombre, elemento, arma } = personaje;
  return { nombre, elemento, arma };
}

// --- Omit<Personaje, "id"> -----------------------------------------------------
// Omit<T, K> construye un tipo con TODOS los campos de T menos los indicados.
export type NuevoPersonaje = Omit<Personaje, "id">;

export function crearPersonaje(datos: NuevoPersonaje, id: number | string): Personaje {
  return { ...datos, id };
}

// --- Objetos anidados --------------------------------------------------------
export function personajeMasFuerte(lista: Personaje[]): Personaje {
  return lista.reduce((masFuerte, actual) =>
    actual.estadisticas.nivelPoder > masFuerte.estadisticas.nivelPoder ? actual : masFuerte
  );
}
