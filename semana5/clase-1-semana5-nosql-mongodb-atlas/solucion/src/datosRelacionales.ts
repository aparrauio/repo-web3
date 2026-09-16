/**
 * datosRelacionales.ts
 * -----------------------
 * Simula el contenido real de las tablas `users` y `hobbies` de Supabase
 * (ver data/esquema-relacional-supabase.sql). Los primeros datos (Leslie
 * Yepp, id 1, con sus 3 hobbies) son EXACTAMENTE el ejemplo de referencia
 * de esta sesión; se agregan 3 usuarios más para tener suficientes datos
 * con los que practicar filtros, updates y deletes.
 */

import { FilaHobbyRelacional, FilaUsuarioRelacional } from "./tipos";

// Simula: select * from users;
export const filasUsuarios: FilaUsuarioRelacional[] = [
  { id: 1, firstName: "Leslie", lastName: "Yepp",     cell: "8125552344", city: "Pawnee" },
  { id: 2, firstName: "Ron",    lastName: "Swandson", cell: "8125557788", city: "Pawnee" },
  { id: 3, firstName: "Tom",    lastName: "Haverford", cell: "8125559012", city: "Pawnee" },
  { id: 4, firstName: "April",  lastName: "Ludgate",  cell: "8125553456", city: "Pawnee" },
];

// Simula: select * from hobbies;
// Nota que "Leslie" (userId: 1) tiene 3 filas — una por cada hobby.
export const filasHobbies: FilaHobbyRelacional[] = [
  { id: 10, userId: 1, hobby: "scrapbooking" },
  { id: 11, userId: 1, hobby: "eating waffles" },
  { id: 12, userId: 1, hobby: "working" },
  { id: 13, userId: 2, hobby: "woodworking" },
  { id: 14, userId: 2, hobby: "breakfast foods" },
  { id: 15, userId: 3, hobby: "business ideas" },
  { id: 16, userId: 3, hobby: "fashion" },
  { id: 17, userId: 3, hobby: "nightlife" },
  { id: 18, userId: 4, hobby: "sleeping" },
  { id: 19, userId: 4, hobby: "sulking" },
];
