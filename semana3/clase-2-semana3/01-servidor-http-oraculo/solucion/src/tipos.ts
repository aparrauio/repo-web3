/**
 * tipos.ts
 * --------
 * Modela la forma de una "idea creativa" del oráculo.
 */

// Unión literal: categorías cerradas para clasificar cada idea.
export type CategoriaIdea = "narrativa" | "visual" | "sonora" | "interactiva";

export interface IdeaCreativa {
  id: number;
  texto: string;
  categoria: CategoriaIdea;
}
