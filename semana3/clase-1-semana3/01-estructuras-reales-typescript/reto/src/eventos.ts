/**
 * eventos.ts — reto
 * --------------------
 * Implementa la unión discriminada `EventoCombate` (definida como TODO en
 * tipos.ts) y la función que la resuelve usando angostamiento de tipos.
 */

// Importa aquí `EventoCombate` una vez que la definas en tipos.ts:
// import { EventoCombate } from "./tipos";

// TODO: implementa resolverEvento usando un switch o if sobre `evento.tipo`.
// export function resolverEvento(evento: EventoCombate): string {
//   switch (evento.tipo) {
//     case "ataque":
//       return `Ataque con ${evento.danio} de daño`;
//     case "defensa":
//       return `Defensa que bloquea ${evento.bloqueo} de daño`;
//     case "especial":
//       return `Movimiento especial: ${evento.nombreMovimiento}`;
//   }
// }

export function resolverEvento(evento: any): string {
  throw new Error("TODO: define EventoCombate en tipos.ts e implementa esta función");
}
