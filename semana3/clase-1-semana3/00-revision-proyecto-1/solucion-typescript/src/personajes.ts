/**
 * personajes.ts — SOLUCIÓN
 * -------------------------
 * `estadisticas` agrupa nivelPoder y combatesGanados (dato inventado
 * para poblar la interface EstadisticaCombate).
 */

import { Personaje } from "./tipos";

export const personajes: Personaje[] = [
  { id: 1,  nombre: "Scorpion",    faccion: "Shirai Ryu",          elemento: "Fuego",       estadisticas: { nivelPoder: 8,  combatesGanados: 42 }, arma: "Kunai con cadena" },
  { id: 2,  nombre: "Sub-Zero",    faccion: "Lin Kuei",            elemento: "Hielo",       estadisticas: { nivelPoder: 8,  combatesGanados: 39 }, arma: "Kori Blade" },
  { id: 3,  nombre: "Raiden",      faccion: "Dioses Antiguos",     elemento: "Rayo",        estadisticas: { nivelPoder: 10, combatesGanados: 55 }, arma: "Bastón" },
  { id: 4,  nombre: "Liu Kang",    faccion: "Templo Blanco Loto",  elemento: "Fuego",       estadisticas: { nivelPoder: 9,  combatesGanados: 48 }, arma: "Nunchaku" },
  { id: 5,  nombre: "Mileena",     faccion: "Outworld",            elemento: "Sai",         estadisticas: { nivelPoder: 7,  combatesGanados: 30 }, arma: "Sai gemelos" },
  { id: 6,  nombre: "Kitana",      faccion: "Edenia",              elemento: "Acero",       estadisticas: { nivelPoder: 8,  combatesGanados: 36 }, arma: "Abanicos filosos" },
  { id: 7,  nombre: "Shang Tsung", faccion: "Outworld",            elemento: "Almas",       estadisticas: { nivelPoder: 9,  combatesGanados: 44 }, arma: "Absorción de almas" },
  { id: 8,  nombre: "Jax",         faccion: "Fuerzas Especiales",  elemento: "Metal",       estadisticas: { nivelPoder: 7,  combatesGanados: 28 }, arma: "Brazos biónicos" },
  { id: 9,  nombre: "Quan Chi",    faccion: "Netherrealm",         elemento: "Nigromancia", estadisticas: { nivelPoder: 8,  combatesGanados: 33 }, arma: "Magia oscura" },
  { id: 10, nombre: "Smoke",       faccion: "Lin Kuei",            elemento: "Humo",        estadisticas: { nivelPoder: 6,  combatesGanados: 25 }, arma: "Espada corta" },
];
