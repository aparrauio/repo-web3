/**
 * comandos.ts
 * -------------
 * Los 8 comandos CRUD centrales de MongoDB, cada uno en su propia
 * función comentada.
 */

import { Db } from "mongodb";
import { DocumentoUsuario } from "./tipos";

// 1) insertOne — inserta UN documento nuevo
export async function registrarUsuario(db: Db, usuario: DocumentoUsuario) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.insertOne(usuario);
  console.log(`insertOne -> nuevo _id: ${resultado.insertedId}`);
  return resultado.insertedId;
}

// 2) insertMany — inserta VARIOS documentos de una sola vez
export async function registrarUsuarios(db: Db, usuarios: DocumentoUsuario[]) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.insertMany(usuarios);
  console.log(`insertMany -> ${resultado.insertedCount} usuarios insertados`);
  return resultado.insertedIds;
}

// 3) find — busca documentos que cumplan un filtro simple
export async function buscarPorCiudad(db: Db, city: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultados = await coleccion.find({ city }).toArray();
  console.log(`find({ city: "${city}" }) -> ${resultados.length} usuarios`);
  return resultados;
}

// 4) find().sort() — busca Y ordena por un campo (1 = asc, -1 = desc)
export async function listarOrdenadosPorApellido(db: Db) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultados = await coleccion.find({}).sort({ lastName: 1 }).toArray();
  console.log("find().sort({ lastName: 1 }) -> orden alfabético por apellido:");
  console.log(resultados.map((u) => `${u.lastName}, ${u.firstName}`));
  return resultados;
}

// 5) updateOne — modifica SOLO el primer documento que coincide
export async function agregarHobbyAUnUsuario(db: Db, firstName: string, hobby: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.updateOne({ firstName }, { $push: { hobbies: hobby } });
  console.log(`updateOne -> ${resultado.modifiedCount} documento modificado (${firstName})`);
  return resultado.modifiedCount;
}

// 6) updateMany — modifica TODOS los documentos que coinciden
export async function activarUsuariosDeCiudad(db: Db, city: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.updateMany({ city }, { $set: { activo: true } });
  console.log(`updateMany -> ${resultado.modifiedCount} documentos modificados (city: ${city})`);
  return resultado.modifiedCount;
}

// 7) deleteOne — elimina SOLO el primer documento que coincide
export async function eliminarUsuarioPorNombre(db: Db, firstName: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.deleteOne({ firstName });
  console.log(`deleteOne -> ${resultado.deletedCount} documento eliminado (${firstName})`);
  return resultado.deletedCount;
}

// 8) deleteMany — elimina TODOS los documentos que coinciden (OJO con {})
export async function eliminarUsuariosInactivos(db: Db) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.deleteMany({ activo: { $ne: true } });
  console.log(`deleteMany -> ${resultado.deletedCount} documentos eliminados (activo != true)`);
  return resultado.deletedCount;
}
