/**
 * seed.ts
 * -------
 * Inserta la colección "users" en MongoDB Atlas, a partir de los datos
 * relacionales (users + hobbies) ya transformados y agrupados.
 */

import { Db } from "mongodb";
import { filasHobbies, filasUsuarios } from "./datosRelacionales";
import { transformarUsuarios } from "./transformar";
import { DocumentoUsuario } from "./tipos";

export async function poblarBaseDeDatos(db: Db): Promise<void> {
  const coleccion = db.collection<DocumentoUsuario>("users");

  // Limpiamos la colección para que el script se pueda correr varias
  // veces sin duplicar datos (idempotencia básica).
  await coleccion.deleteMany({});

  const documentos = transformarUsuarios(filasUsuarios, filasHobbies);
  const resultado = await coleccion.insertMany(documentos);

  console.log(`Insertados ${resultado.insertedCount} usuarios (con hobbies embebidos).`);
}
