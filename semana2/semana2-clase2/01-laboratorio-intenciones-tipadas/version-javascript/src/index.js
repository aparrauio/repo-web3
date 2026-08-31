/**
 * index.js
 * --------
 * Punto de entrada de la versión JavaScript del oráculo.
 * Ejecuta: node src/index.js
 */

import { criaturas } from "./criaturas.js";
import {
  crearContadorConsultas,
  filtrarPorMood,
  calcularEnergiaPromedio,
  combinarCriaturas,
  cargarCriaturas,
} from "./oraculo.js";

async function main() {
  console.log("=== Oráculo de Criaturas Emocionales (versión JavaScript) ===\n");

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
