/**
 * conexion.ts
 * -------------
 * Conecta al cluster de MongoDB Atlas usando el driver oficial.
 * Centralizar la conexión aquí (en vez de repetirla en cada script)
 * es el mismo principio de capas que usamos en Express: una sola
 * responsabilidad, un solo lugar para cambiarla.
 */

import "dotenv/config";
import { Db, MongoClient } from "mongodb";

let cliente: MongoClient | null = null;

export async function conectar(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  const nombreBD = process.env.MONGODB_DB ?? "usuarios_hobbies";

  if (!uri) {
    throw new Error(
      "Falta MONGODB_URI en tu .env. Copia .env.example a .env y pega tu " +
        "connection string de MongoDB Atlas."
    );
  }

  cliente = new MongoClient(uri);
  await cliente.connect();
  console.log("Conectado a MongoDB Atlas");

  return cliente.db(nombreBD);
}

export async function cerrarConexion(): Promise<void> {
  if (cliente) {
    await cliente.close();
    console.log("Conexión cerrada");
  }
}
