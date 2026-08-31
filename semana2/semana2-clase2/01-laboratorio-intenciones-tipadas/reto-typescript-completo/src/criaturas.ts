/**
 * criaturas.ts — datos tipados con `Criatura[]`
 * -----------------------------------------------
 * Si `tipos.ts` todavía está incompleto, este archivo NO compilará.
 * Eso es intencional: aquí es donde verás los primeros errores de `tsc`.
 */

import { Criatura } from "./tipos";

export const criaturas: Criatura[] = [
  { id: 1, nombre: "Luma",   mood: "curiosa",     rareza: "comun",  energia: 62 },
  { id: 2, nombre: "Nébula", mood: "melancolica", rareza: "rara",   energia: 48 },
  { id: 3, nombre: "Ignix",  mood: "euforica",    rareza: "mitica", energia: 91 },
  { id: 4, nombre: "Bruma",  mood: "serena",      rareza: "rara",   energia: 55 },
  { id: 5, nombre: "Pixel",  mood: "curiosa",     rareza: "comun",  energia: 70 },
];
