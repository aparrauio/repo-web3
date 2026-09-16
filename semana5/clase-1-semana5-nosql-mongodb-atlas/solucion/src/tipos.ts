/**
 * tipos.ts
 * --------
 * Dos familias de tipos:
 *   1) "Relacional*": la forma en que llegarían los datos si los leyeras
 *      directamente de las tablas `users` y `hobbies` en Supabase/Postgres.
 *   2) "DocumentoUsuario": la forma de documento que vamos a insertar en
 *      MongoDB, con los hobbies embebidos como arreglo.
 */

import { ObjectId } from "mongodb";

// ======================================================================
// 1) FORMA RELACIONAL (tal como en las tablas de Supabase)
// ======================================================================

// Fila de la tabla `users`.
export interface FilaUsuarioRelacional {
  id: number;
  firstName: string;
  lastName: string;
  cell: string;
  city: string;
}

// Fila de la tabla `hobbies` (una fila POR CADA hobby de un usuario).
export interface FilaHobbyRelacional {
  id: number;
  userId: number; // foreign key hacia users.id
  hobby: string;
}

// ======================================================================
// 2) FORMA DOCUMENTAL (lo que se inserta en MongoDB)
// ======================================================================

// Documento de la colección "users": los hobbies viven EMBEBIDOS como
// un arreglo de strings, en vez de en una tabla/colección separada.
export interface DocumentoUsuario {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  cell: string;
  city: string;
  hobbies: string[];
}
