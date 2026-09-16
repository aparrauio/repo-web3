/**
 * services/personajes.service.ts
 * ---------------------------------
 * Lógica de negocio pura: no conoce Express, ni req/res. Solo trabaja con
 * el arreglo de datos y lanza `ApiError` cuando algo no es válido.
 */

import { personajes } from "../data/personajes";
import { ActualizacionPersonaje, Elemento, NuevoPersonaje, Personaje } from "../tipos";
import { ApiError } from "../apiError";

// Simula un autoincremento de id, como haría una base de datos real.
let siguienteId = personajes.length + 1;

export function listarPersonajes(elemento?: Elemento): Personaje[] {
  if (!elemento) return personajes;
  return personajes.filter((personaje) => personaje.elemento === elemento);
}

export function buscarPersonajePorId(id: number): Personaje {
  const personaje = personajes.find((p) => p.id === id);
  if (!personaje) {
    throw new ApiError(404, `Personaje con id ${id} no encontrado`);
  }
  return personaje;
}

export function crearPersonaje(datos: NuevoPersonaje): Personaje {
  // Validación básica de negocio antes de crear.
  if (!datos.nombre || !datos.elemento || !datos.arma) {
    throw new ApiError(400, "nombre, elemento y arma son obligatorios");
  }

  const nuevoPersonaje: Personaje = {
    id: siguienteId,
    ...datos,
  };

  siguienteId += 1;
  personajes.push(nuevoPersonaje);
  return nuevoPersonaje;
}

export function actualizarPersonaje(id: number, cambios: ActualizacionPersonaje): Personaje {
  const personaje = buscarPersonajePorId(id); // reutiliza la validación de existencia
  const actualizado: Personaje = { ...personaje, ...cambios, id: personaje.id };

  const indice = personajes.findIndex((p) => p.id === id);
  personajes[indice] = actualizado;
  return actualizado;
}

export function eliminarPersonaje(id: number): void {
  const indice = personajes.findIndex((p) => p.id === id);
  if (indice === -1) {
    throw new ApiError(404, `Personaje con id ${id} no encontrado`);
  }
  personajes.splice(indice, 1);
}
