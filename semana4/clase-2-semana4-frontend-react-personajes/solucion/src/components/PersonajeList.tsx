/**
 * components/PersonajeList.tsx
 * --------------------------------
 * Componente de negocio: solo recibe un arreglo de personajes (via props)
 * y lo transforma en una grilla de PersonajeCard. No sabe de dónde vino
 * el arreglo (podría ser la lista completa o una lista ya filtrada).
 */

import { Personaje } from "../tipos";
import { PersonajeCard } from "./PersonajeCard";

interface PersonajeListProps {
  personajes: Personaje[];
  onEditar: (personaje: Personaje) => void;
  onEliminar: (id: number) => void;
}

export function PersonajeList({ personajes, onEditar, onEliminar }: PersonajeListProps) {
  if (personajes.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 bg-white/80 p-4 text-sm text-slate-600">
        No hay personajes que coincidan con el filtro.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {personajes.map((personaje) => (
        <div key={personaje.id}>
          <PersonajeCard
            personaje={personaje}
            onEditar={onEditar}
            onEliminar={onEliminar}
          />
        </div>
      ))}
    </div>
  );
}
