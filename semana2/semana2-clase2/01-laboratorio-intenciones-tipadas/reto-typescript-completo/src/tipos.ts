/**
 * tipos.ts — INCOMPLETO (parte del reto)
 * ---------------------------------------
 * Este archivo define las formas de datos del oráculo, pero le faltan piezas
 * a propósito. Tu trabajo es completarlo para que el resto del proyecto
 * compile sin errores.
 *
 * PISTA 1: revisa `criaturas.ts` — ahí verás qué valor de "mood" se usa
 *          que todavía no está permitido en la unión de abajo.
 * PISTA 2: revisa `oraculo.ts` — ahí verás qué campo se intenta leer de una
 *          criatura que la interface `Criatura` todavía no declara.
 */

// TODO: a esta unión le falta un valor que sí se usa en los datos reales.
export type Mood = "curiosa" | "melancolica" | "euforica" | "serena";

// Esta unión sí está completa — puedes usarla de referencia.
export type Rareza = "comun" | "rara" | "mitica";

// TODO: a esta interface le falta un campo (compara contra los objetos
// reales en criaturas.ts y contra cómo se usan en oraculo.ts).
export interface Criatura {
  id: number | string;
  nombre: string;
  mood: Mood;
  rareza: Rareza,
  energia: number;
}
