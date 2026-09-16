/**
 * transformar.ts
 * ----------------
 * El corazón del ejercicio: agrupa las filas relacionales de `hobbies`
 * por `userId`, y las combina con los datos de `users` para producir un
 * documento por usuario con su arreglo de hobbies embebido.
 *
 * A diferencia de una transformación 1-a-1 (una fila -> un documento),
 * esta es una AGREGACIÓN: varias filas de hobbies -> un solo arreglo.
 */

import {
  DocumentoUsuario,
  FilaHobbyRelacional,
  FilaUsuarioRelacional,
} from "./tipos";

// Paso 1: agrupar filas de hobbies en un Map<userId, string[]>.
export function agruparHobbiesPorUsuario(
  filasHobbies: FilaHobbyRelacional[]
): Map<number, string[]> {
  const hobbiesPorUsuario = new Map<number, string[]>();

  for (const fila of filasHobbies) {
    const listaActual = hobbiesPorUsuario.get(fila.userId) ?? [];
    listaActual.push(fila.hobby);
    hobbiesPorUsuario.set(fila.userId, listaActual);
  }

  return hobbiesPorUsuario;
}

// Paso 2: combinar UN usuario con su arreglo de hobbies ya agrupado.
export function transformarUsuario(
  fila: FilaUsuarioRelacional,
  hobbiesPorUsuario: Map<number, string[]>
): DocumentoUsuario {
  return {
    firstName: fila.firstName,
    lastName: fila.lastName,
    cell: fila.cell,
    city: fila.city,
    hobbies: hobbiesPorUsuario.get(fila.id) ?? [],
  };
}

// Paso 3: aplicar la transformación completa a TODOS los usuarios.
export function transformarUsuarios(
  filasUsuarios: FilaUsuarioRelacional[],
  filasHobbies: FilaHobbyRelacional[]
): DocumentoUsuario[] {
  const hobbiesPorUsuario = agruparHobbiesPorUsuario(filasHobbies);
  return filasUsuarios.map((fila) => transformarUsuario(fila, hobbiesPorUsuario));
}
