/**
 * index.ts — reto
 * -------------------
 * Asume que completaste los TODOs de tipos.ts, utilidades.ts y eventos.ts.
 * Si lo ejecutas antes de terminar, `npm run build` mostrará errores — es esperado.
 */

import { personajes } from "./personajes";
import { Faccion } from "./tipos"; // TODO: existe una vez que definas el enum
import {
  buscarPorId,
  actualizarPersonaje,
  resumirPersonaje,
  crearPersonaje,
  personajeMasFuerte,
} from "./utilidades";
import { resolverEvento } from "./eventos";

function main(): void {
  console.log("=== Estructuras reales de aplicación (versión TypeScript) ===\n");

  const encontrado = buscarPorId(personajes, 3);
  console.log("Encontrado por id (genérico):", encontrado?.nombre);

  const actualizado = actualizarPersonaje(personajes[0], { arma: "Kunai mejorado" });
  console.log("\nPersonaje actualizado (Partial):", actualizado.arma);
  
  const nuevoPersonaje = resumirPersonaje(actualizado);
  console.log("\nResumen (personaje actualizado):", nuevoPersonaje);

  const resumen = resumirPersonaje(personajes[1]);
  console.log("\nResumen (Pick):", resumen);

  const nuevo = crearPersonaje(
    { nombre: "Reptile", faccion: "Lin Kuei", elemento: "Almas", estadisticas: { nivelPoder: 7, combatesGanados: 20 }, arma: "Ácido" },
    11
  );
  console.log("\nPersonaje creado (Omit):", nuevo);

  const masFuerte = personajeMasFuerte(personajes);
  console.log("\nMás fuerte (objeto anidado):", masFuerte.nombre, masFuerte.estadisticas.nivelPoder);

  /*console.log("\nEventos de combate:");
  console.log(resolverEvento({ tipo: "ataque", danio: 25 }));
  console.log(resolverEvento({ tipo: "defensa", bloqueo: 10 }));
  console.log(resolverEvento({ tipo: "especial", nombreMovimiento: "Fatality" }));

  console.log("\nFacciones registradas (enum):", Object.values(Faccion));*/
}

main();
