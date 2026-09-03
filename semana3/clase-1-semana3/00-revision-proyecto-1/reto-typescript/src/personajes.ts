/**
 * personajes.ts
 * -------------
 * Arreglo tipado con `Personaje[]`. Compila tal como está, pero una vez
 * que completes `tipos.ts` (TODO 1 y TODO 2), deberás actualizar estos
 * objetos para que coincidan con la nueva forma.
 */

import { Personaje } from "./tipos";

export const personajes: Personaje[] = [
  { id: 1, nombre: "Scorpion",    faccion: "Shirai Ryu",          elemento: "Fuego",       nivelPoder: 8,  arma: "Kunai con cadena" },
  { id: 2, nombre: "Sub-Zero",    faccion: "Lin Kuei",             elemento: "Hielo",       nivelPoder: 8,  arma: "Kori Blade" },
  { id: 3, nombre: "Raiden",      faccion: "Dioses Antiguos",      elemento: "Rayo",        nivelPoder: 10, arma: "Bastón" },
  { id: 4, nombre: "Liu Kang",    faccion: "Templo Blanco Loto",   elemento: "Fuego",       nivelPoder: 9,  arma: "Nunchaku" },
  { id: 5, nombre: "Mileena",     faccion: "Outworld",             elemento: "Sai",         nivelPoder: 7,  arma: "Sai gemelos" },
  { id: 6, nombre: "Kitana",      faccion: "Edenia",               elemento: "Acero",       nivelPoder: 8,  arma: "Abanicos filosos" },
  { id: 7, nombre: "Shang Tsung", faccion: "Outworld",             elemento: "Almas",       nivelPoder: 9,  arma: "Absorción de almas" },
  { id: 8, nombre: "Jax",         faccion: "Fuerzas Especiales",   elemento: "Metal",       nivelPoder: 7,  arma: "Brazos biónicos" },
  { id: 9, nombre: "Quan Chi",    faccion: "Netherrealm",          elemento: "Nigromancia", nivelPoder: 8,  arma: "Magia oscura" },
  { id: 10, nombre: "Smoke",      faccion: "Lin Kuei",             elemento: "Humo",        nivelPoder: 6,  arma: "Espada corta" },
];
