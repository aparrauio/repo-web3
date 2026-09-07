/**
 * index.ts — punto de entrada (reto)
 * -------------------------------------
 * No necesitas modificarlo. Corre igual mientras la forma de `Personaje`
 * siga teniendo `nivelPoder` directamente (antes de completar los TODOs).
 */

import { personajes } from "./personajes";
import {
  crearContadorCombates,
  filtrarPorElemento,
  calcularPoderPromedio,
  fusionarPersonajes,
  invocarPersonajes,
} from "./combate";

async function main(): Promise<void> {
  console.log("=== Torneo Mortal Kombat (versión TypeScript) ===\n");

  const contador = crearContadorCombates();
  contador.registrar();
  contador.registrar();
  console.log(`Combates registrados: ${contador.registrar()}`);

  const invocados = await invocarPersonajes(personajes);
  console.log(`\nPersonajes invocados: ${invocados.length}`);

  const deFuego = filtrarPorElemento(invocados, "Fuego");
  console.log(`\nPersonajes de elemento Fuego: ${deFuego.map((p) => p.nombre).join(", ")}`);

  const promedio = calcularPoderPromedio(invocados);
  console.log(`Nivel de poder promedio: ${promedio}`);

  const fusion = fusionarPersonajes(invocados[0], invocados[2]);
  console.log("\nPersonaje fusión generado:");
  console.log(fusion);
}

main();
