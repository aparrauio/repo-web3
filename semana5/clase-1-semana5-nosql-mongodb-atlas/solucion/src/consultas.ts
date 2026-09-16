/**
 * consultas.ts
 * --------------
 * Operaciones CRUD básicas sobre la colección "users", con foco en cómo
 * se filtran y modifican arreglos embebidos (los hobbies) — exactamente
 * lo que la Clase 2 pide practicar también desde MongoDB Compass.
 */

import { Db } from "mongodb";
import { DocumentoUsuario } from "./tipos";

// --- FIND con filtro simple sobre un campo plano --------------------------
// Equivalente a: SELECT * FROM users WHERE city = 'Pawnee';
export async function buscarPorCiudad(db: Db, city: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  return coleccion.find({ city }).toArray();
}

// --- FIND con filtro sobre un valor DENTRO del arreglo ---------------------
// MongoDB entiende automáticamente "algún elemento del arreglo coincide"
// sin necesitar un operador especial para este caso simple.
export async function buscarPorHobby(db: Db, hobby: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  return coleccion.find({ hobbies: hobby }).toArray();
}

// --- FIND de uno solo, por nombre -----------------------------------------
export async function buscarPorNombre(db: Db, firstName: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  return coleccion.findOne({ firstName });
}

// --- UPDATE: agregar un hobby nuevo al arreglo ($push) ----------------------
// No hace falta leer el documento completo y reescribirlo: $push modifica
// el arreglo directamente en el servidor de MongoDB.
export async function agregarHobby(db: Db, firstName: string, hobbyNuevo: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.updateOne(
    { firstName },
    { $push: { hobbies: hobbyNuevo } }
  );
  return resultado.modifiedCount;
}

// --- UPDATE: quitar un hobby del arreglo ($pull) -----------------------------
export async function quitarHobby(db: Db, firstName: string, hobbyAQuitar: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.updateOne(
    { firstName },
    { $pull: { hobbies: hobbyAQuitar } }
  );
  return resultado.modifiedCount;
}

// --- UPDATE: cambiar un campo plano (por ejemplo, el celular) ---------------
export async function actualizarCelular(db: Db, firstName: string, cellNuevo: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.updateOne({ firstName }, { $set: { cell: cellNuevo } });
  return resultado.modifiedCount;
}

// --- DELETE: eliminar un usuario de prueba ----------------------------------
export async function eliminarPorNombre(db: Db, firstName: string) {
  const coleccion = db.collection<DocumentoUsuario>("users");
  const resultado = await coleccion.deleteOne({ firstName });
  return resultado.deletedCount;
}
