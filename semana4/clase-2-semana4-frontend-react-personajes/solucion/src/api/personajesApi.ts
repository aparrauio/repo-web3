/**
 * api/personajesApi.ts
 * -----------------------
 * ÚNICO archivo que sabe cómo hablar con el backend (fetch, URLs, JSON).
 * Los componentes nunca llaman a fetch() directamente: siempre pasan por
 * estas funciones. Si el día de mañana cambias fetch por axios, o la URL
 * base del backend, solo tocas este archivo.
 */

import {
  ActualizacionPersonaje,
  Elemento,
  NuevoPersonaje,
  Personaje,
} from "../tipos";

// Vite expone las variables de entorno que empiezan con VITE_ en import.meta.env.
// En desarrollo, si no hay VITE_API_URL, usamos /api para aprovechar el proxy de Vite
// y evitar problemas de CORS entre puertos distintos.
const API_BASE = import.meta.env.VITE_API_URL ?? "/api";
const BASE = `${API_BASE}/personajes`;

// Helper interno: centraliza cómo detectamos y traducimos errores de la API.
async function manejarRespuesta<T>(respuesta: Response): Promise<T> {
  if (!respuesta.ok) {
    const cuerpo = await respuesta.json().catch(() => ({}));
    throw new Error(cuerpo.error ?? `Error HTTP ${respuesta.status}`);
  }
  // Las respuestas 204 (DELETE) no tienen cuerpo que parsear.
  if (respuesta.status === 204) {
    return undefined as T;
  }
  return respuesta.json();
}

// GET /api/personajes (con filtro opcional por elemento)
export async function obtenerPersonajes(elemento?: Elemento): Promise<Personaje[]> {
  const url = elemento ? `${BASE}?elemento=${encodeURIComponent(elemento)}` : BASE;
  const respuesta = await fetch(url);
  const datos = await manejarRespuesta<{ personajes: Personaje[] }>(respuesta);
  return datos.personajes;
}

// GET /api/personajes/:id
export async function obtenerPersonajePorId(id: number): Promise<Personaje> {
  const respuesta = await fetch(`${BASE}/${id}`);
  const datos = await manejarRespuesta<{ personaje: Personaje }>(respuesta);
  return datos.personaje;
}

// POST /api/personajes
export async function crearPersonaje(datos: NuevoPersonaje): Promise<Personaje> {
  const respuesta = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  const resultado = await manejarRespuesta<{ personaje: Personaje }>(respuesta);
  return resultado.personaje;
}

// PUT /api/personajes/:id
export async function actualizarPersonaje(
  id: number,
  cambios: ActualizacionPersonaje
): Promise<Personaje> {
  const respuesta = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cambios),
  });
  const resultado = await manejarRespuesta<{ personaje: Personaje }>(respuesta);
  return resultado.personaje;
}

// DELETE /api/personajes/:id
export async function eliminarPersonaje(id: number): Promise<void> {
  const respuesta = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  await manejarRespuesta<void>(respuesta);
}
