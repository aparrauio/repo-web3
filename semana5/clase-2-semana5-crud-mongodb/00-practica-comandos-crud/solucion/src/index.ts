/**
 * index.ts
 * --------
 * Ejecuta los 8 comandos en orden seguro. Ejecuta: npm run dev
 */

import { cerrarConexion, conectar } from "./conexion";
import {
  activarUsuariosDeCiudad, agregarHobbyAUnUsuario, buscarPorCiudad,
  eliminarUsuarioPorNombre, eliminarUsuariosInactivos, listarOrdenadosPorApellido,
  registrarUsuario, registrarUsuarios,
} from "./comandos";

async function main(): Promise<void> {
  const db = await conectar();

  //console.log("\n=== 1) insertOne ===");
  //await registrarUsuario(db, { firstName: "Andy", lastName: "Dwyer", cell: "8125551111", city: "Pawnee", hobbies: ["music", "napping"] });

  console.log("\n=== 2) insertMany ===");
  await registrarUsuarios(db, [
    { firstName: "Ben", lastName: "Wyatt", cell: "8125552222", city: "Partridge", hobbies: ["video edition", "board games"] },
    { firstName: "Chris", lastName: "Traeger", cell: "8125553333", city: "Pawnee", hobbies: ["running", "literally"] },
  ]);

  console.log("\n=== 3) find ===");
  await buscarPorCiudad(db, "Pawnee");

  console.log("\n=== 4) find().sort() ===");
  await listarOrdenadosPorApellido(db);

  console.log("\n=== 5) updateOne ===");
  await agregarHobbyAUnUsuario(db, "Leslie", "pottery");

  console.log("\n=== 6) updateMany ===");
  await activarUsuariosDeCiudad(db, "Pawnee");

  console.log("\n=== 7) deleteOne ===");
  await eliminarUsuarioPorNombre(db, "Ben");

  console.log("\n=== 8) deleteMany ===");
  await eliminarUsuariosInactivos(db);

  await cerrarConexion();
}

main().catch((error) => { console.error("Error ejecutando el script:", error); process.exit(1); });
