/**
 * tipos.ts
 * --------
 * Formas de datos de la API, heredadas de la Semana 3 (mismo dataset).
 */

// Unión literal: los 9 valores reales de "elemento" en el dataset.
export type Elemento =
  | "Fuego" | "Hielo" | "Rayo" | "Acero" | "Sai"
  | "Almas" | "Metal" | "Nigromancia" | "Humo";

// Interface anidada: agrupa las estadísticas de combate.
export interface EstadisticaCombate {
  nivelPoder: number;
  combatesGanados: number;
}

// Interface principal.
export interface Personaje {
  id: number;
  nombre: string;
  faccion: string;
  elemento: Elemento;
  estadisticas: EstadisticaCombate;
  arma: string;
}

// Tipo utilitario (Omit): forma de los datos para CREAR un personaje,
// sin id (el id lo asigna el servicio).
export type NuevoPersonaje = Omit<Personaje, "id">;

// Tipo utilitario (Partial): forma de los datos para ACTUALIZAR un
// personaje, con todos los campos opcionales.
export type ActualizacionPersonaje = Partial<NuevoPersonaje>;
