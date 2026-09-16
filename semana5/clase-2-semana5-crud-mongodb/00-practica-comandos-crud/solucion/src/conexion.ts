/**
 * conexion.ts
 * -------------
 * Se conecta a la MISMA base de datos ya creada en la Clase 1
 * (usuarios_hobbies) — no la volvemos a crear, solo nos conectamos.
 */

import "dotenv/config";
import { Db, MongoClient } from "mongodb";

let cliente: MongoClient | null = null;

export async function conectar(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  const nombreBD = process.env.MONGODB_DB ?? "usuarios_hobbies";
  if (!uri) throw new Error("Falta MONGODB_URI en tu .env.");
  cliente = new MongoClient(uri);
  await cliente.connect();
  console.log(`Conectado a MongoDB Atlas (base: ${nombreBD})`);
  return cliente.db(nombreBD);
}

export async function cerrarConexion(): Promise<void> {
  if (cliente) { await cliente.close(); console.log("Conexión cerrada"); }
}
