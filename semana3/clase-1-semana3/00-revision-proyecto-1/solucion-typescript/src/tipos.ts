/**
 * tipos.ts — SOLUCIÓN
 * ---------------------
 * Cumple el mínimo exacto del Proyecto 1: 3 tipos personalizados
 * (Elemento, EstadisticaCombate, Personaje) y 1 unión literal (Elemento).
 */

// Unión literal: los 9 valores reales de "elemento" en el dataset.
export type Elemento =
  | "Fuego" | "Hielo" | "Rayo" | "Acero" | "Sai"
  | "Almas" | "Metal" | "Nigromancia" | "Humo";

// Interface anidada: agrupa las estadísticas de combate en un solo objeto.
export interface EstadisticaCombate {
  nivelPoder: number;
  combatesGanados: number;
}

// Interface principal: usa los dos tipos anteriores.
export interface Personaje {
  id: number | string;
  nombre: string;
  faccion: string;
  elemento: Elemento;
  estadisticas: EstadisticaCombate;
  arma: string;
}
