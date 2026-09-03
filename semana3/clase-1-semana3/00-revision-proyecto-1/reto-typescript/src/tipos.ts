/**
 * tipos.ts — INCOMPLETO respecto al mínimo del Proyecto 1
 * -----------------------------------------------------------
 * Este archivo solo define 1 tipo personalizado (Personaje) y no usa
 * ninguna unión literal. El Proyecto 1 exige mínimo 3 tipos y 1 unión.
 *
 * TODO 1: convierte `elemento` en una unión literal con los 9 valores
 *         reales del dataset (revisa data/mortal_kombat_personajes.json).
 * TODO 2: crea una interface `EstadisticaCombate` con `nivelPoder` y
 *         `combatesGanados`, y úsala dentro de `Personaje`.
 */

export interface Personaje {
  id: number | string; // string se usa al fusionar dos personajes (ver combate.ts)
  nombre: string;
  faccion: string;
  elemento: string; // TODO 1: debería ser el tipo `Elemento`
  nivelPoder: number; // TODO 2: debería vivir dentro de `EstadisticaCombate`
  arma: string;
}
