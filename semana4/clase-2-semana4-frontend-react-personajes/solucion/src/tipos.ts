/**
 * tipos.ts
 * --------
 * Misma forma de datos que el backend de la Clase 1 (Express + TS).
 * Mantener los tipos idénticos entre frontend y backend evita bugs de
 * "forma de datos distinta" al integrar ambos lados del stack MERN.
 */

// Unión literal: los 9 valores reales de "elemento" en el dataset.
export type Elemento =
  | "Fuego" | "Hielo" | "Rayo" | "Acero" | "Sai"
  | "Almas" | "Metal" | "Nigromancia" | "Humo";

export const ELEMENTOS: Elemento[] = [
  "Fuego", "Hielo", "Rayo", "Acero", "Sai", "Almas", "Metal", "Nigromancia", "Humo",
];

export interface EstadisticaCombate {
  nivelPoder: number;
  combatesGanados: number;
}

export interface Personaje {
  id: number;
  nombre: string;
  faccion: string;
  elemento: Elemento;
  estadisticas: EstadisticaCombate;
  arma: string;
}

// Forma de los datos para CREAR un personaje (sin id: lo asigna el backend).
export type NuevoPersonaje = Omit<Personaje, "id">;

// Forma de los datos para ACTUALIZAR: todos los campos opcionales.
export type ActualizacionPersonaje = Partial<NuevoPersonaje>;
