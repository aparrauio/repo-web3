/**
 * tipos.ts
 * --------
 * Mismo documento de usuario que en la Semana 5 · Clase 1, con hobbies
 * embebido como arreglo. Agregamos el campo opcional `activo`, usado
 * para practicar updateMany y deleteMany.
 */

import { ObjectId } from "mongodb";

export interface DocumentoUsuario {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  cell: string;
  city: string;
  hobbies: string[];
  activo?: boolean;
}
