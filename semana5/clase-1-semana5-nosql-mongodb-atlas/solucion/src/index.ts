/**
 * index.ts
 * --------
 * Punto de entrada: conecta a Atlas, pobla la colección y ejecuta una
 * demo de las operaciones CRUD sobre usuarios y sus hobbies embebidos.
 * Ejecuta: npm run seed
 */

import { cerrarConexion, conectar } from "./conexion";
import { poblarBaseDeDatos } from "./seed";
import {
  actualizarCelular,
  agregarHobby,
  buscarPorCiudad,
  buscarPorHobby,
  buscarPorNombre,
  eliminarPorNombre,
  quitarHobby,
} from "./consultas";

async function main(): Promise<void> {
  const db = await conectar();

  console.log("\n=== 1) Poblando la base de datos ===");
  await poblarBaseDeDatos(db);

  console.log("\n=== 2) FIND: usuarios de Pawnee ===");
  const dePawnee = await buscarPorCiudad(db, "Pawnee");
  console.log(dePawnee.map((u) => u.firstName));

  console.log("\n=== 3) FIND: un usuario por nombre (con hobbies embebidos) ===");
  const leslie = await buscarPorNombre(db, "Leslie");
  console.log(leslie);

  console.log("\n=== 4) FIND: usuarios que tengan el hobby 'working' ===");
  const trabajadores = await buscarPorHobby(db, "working");
  console.log(trabajadores.map((u) => u.firstName));

  console.log("\n=== 5) UPDATE ($push): agregar un hobby nuevo a Leslie ===");
  const modificadosPush = await agregarHobby(db, "Leslie", "pottery");
  console.log(`Documentos modificados: ${modificadosPush}`);
  console.log((await buscarPorNombre(db, "Leslie"))?.hobbies);

  console.log("\n=== 6) UPDATE ($pull): quitar 'working' de los hobbies de Leslie ===");
  const modificadosPull = await quitarHobby(db, "Leslie", "working");
  console.log(`Documentos modificados: ${modificadosPull}`);
  console.log((await buscarPorNombre(db, "Leslie"))?.hobbies);

  console.log("\n=== 7) UPDATE ($set): actualizar el celular de Ron ===");
  await actualizarCelular(db, "Ron", "8125550000");
  console.log("Celular de Ron actualizado.");

  console.log("\n=== 8) DELETE: eliminar un usuario de prueba ===");
  await poblarBaseDeDatos(db); // reinserta datos limpios antes de la prueba de delete
  const eliminados = await eliminarPorNombre(db, "April");
  console.log(`Documentos eliminados: ${eliminados}`);

  await cerrarConexion();
}

main().catch((error) => {
  console.error("Error ejecutando el script:", error);
  process.exit(1);
});
