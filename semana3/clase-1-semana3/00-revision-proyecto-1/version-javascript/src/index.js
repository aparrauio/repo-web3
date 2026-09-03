/**
 * index.js
 * --------
 * Punto de entrada de la versión JavaScript de referencia.
 * Ejecuta: node src/index.js
 */

import { personajes } from "./personajes.js";
import {
  crearContadorCombates,
  filtrarPorNivel,
  calcularPoderPromedio,
  filtrarPorElemento,
  fusionarPersonajes,
  invocarPersonajes,
} from "./combate.js";

async function main() {
  console.log("=== Torneo Mortal Kombat (versión JavaScript) ===\n");

  const contador = crearContadorCombates();
  contador.registrar();
  contador.registrar();
  console.log(`Combates registrados: ${contador.registrar()}`);

  const invocados = await invocarPersonajes(personajes);
  console.log(`\nPersonajes invocados: ${invocados.length}`);

  const deFuego = filtrarPorElemento(invocados, "Fuego");
  console.log(`\nPersonajes de elemento Fuego: ${deFuego.map((p) => p.nombre).join(", ")}`);

  const deNivel = filtrarPorNivel(invocados, 8);
  console.log(`\nPersonajes de nivel 8: ${deNivel.map((p) => p.nombre).join(", ")}`);

  const promedio = calcularPoderPromedio(invocados);
  console.log(`Nivel de poder promedio: ${promedio}`);

  const fusion = fusionarPersonajes(invocados[0], invocados[2]);
  console.log("\nPersonaje fusión generado:");
  console.log(fusion);
}

main();
