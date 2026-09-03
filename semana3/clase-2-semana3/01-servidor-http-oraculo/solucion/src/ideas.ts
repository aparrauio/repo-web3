/**
 * ideas.ts
 * --------
 * Datos del oráculo + función para elegir una idea al azar.
 */

import { IdeaCreativa } from "./tipos";

export const ideas: IdeaCreativa[] = [
  { id: 1, texto: "Un personaje que solo puede mentir cuando llueve.", categoria: "narrativa" },
  { id: 2, texto: "Una paleta de colores basada en sonidos de la ciudad a medianoche.", categoria: "visual" },
  { id: 3, texto: "Un mini-juego donde cada decisión cambia el ritmo de la música de fondo.", categoria: "interactiva" },
  { id: 4, texto: "Un moodboard construido solo con texturas de objetos abandonados.", categoria: "visual" },
  { id: 5, texto: "Una banda sonora generada a partir del clima real del día.", categoria: "sonora" },
  { id: 6, texto: "Un archivo de criaturas que evolucionan según cómo las nombras.", categoria: "narrativa" },
  { id: 7, texto: "Una interfaz que responde distinto según la hora del día del usuario.", categoria: "interactiva" },
  { id: 8, texto: "Un catálogo de stickers cuyo color cambia con el estado de ánimo elegido.", categoria: "visual" },
];

// Función tipada: recibe la lista y devuelve UNA idea al azar.
export function obtenerIdeaAleatoria(lista: IdeaCreativa[]): IdeaCreativa {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}
