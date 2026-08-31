/**
 * index.ts — punto de entrada (reto)
 * -------------------------------------
 * No necesitas modificar este archivo: una vez que corrijas tipos.ts,
 * criaturas.ts y oraculo.ts, este archivo compilará y correrá igual que
 * la versión JavaScript.
 */

import { criaturas } from "./criaturas";
import {
  crearContadorConsultas,
  filtrarPorMood,
  calcularEnergiaPromedio,
  combinarCriaturas,
  cargarCriaturas,
} from "./oraculo";

async function main(): Promise<void> {
  console.log("=== Oráculo de Criaturas Emocionales (versión TypeScript) ===\n");

  const contador = crearContadorConsultas();
  contador.registrar();
  contador.registrar();
  console.log(`Consultas registradas: ${contador.registrar()}`);

  const criaturasCargadas = await cargarCriaturas(criaturas);
  console.log(`\nCriaturas cargadas: ${criaturasCargadas.length}`);

  const curiosas = filtrarPorMood(criaturasCargadas, "curiosa");
  console.log(`\nCriaturas curiosas: ${curiosas.map((c) => c.nombre).join(", ")}`);

  const promedio = calcularEnergiaPromedio(criaturasCargadas);
  console.log(`Energía promedio del oráculo: ${promedio}`);

  const hibrida = combinarCriaturas(criaturasCargadas[0], criaturasCargadas[2]);
  console.log("\nCriatura híbrida generada:");
  console.log(hibrida);
}

main();
