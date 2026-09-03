/**
 * tipos.ts — reto
 * ------------------
 * `Elemento`, `EstadisticaCombate` y `Personaje` ya están completos
 * (vienen de la Parte 0). Te faltan dos tipos por diseñar:
 *
 * TODO 1: `enum Faccion` con al menos 4 facciones reales del dataset.
 * TODO 2: `type EventoCombate` como unión discriminada con 3 variantes
 *         ("ataque", "defensa", "especial"), cada una con su propio campo.
 */

export type Elemento =
  | "Fuego" | "Hielo" | "Rayo" | "Acero" | "Sai"
  | "Almas" | "Metal" | "Nigromancia" | "Humo";

export interface EstadisticaCombate {
  nivelPoder: number;
  combatesGanados: number;
}

export interface Personaje {
  id: number | string;
  nombre: string;
  faccion: string;
  elemento: Elemento;
  estadisticas: EstadisticaCombate;
  arma: string;
}

// TODO 1: define aquí `enum Faccion { ... }`
export enum Faccion {
  ShiraiRyu = "Shirai Ryu",
  LinKuei = "Link Kuei",
  Outworld = "Outworld",
  Edenia = "Edia"
}

// TODO 2: define aquí `type EventoCombate = ... | ... | ...;`
export type EventoCombate = 
  | { tipo: "ataque", danio: number }
  | { tipo: "defensa", bloqueo: number }
  | { tipo: "especial", nombreMovimiento: string }

