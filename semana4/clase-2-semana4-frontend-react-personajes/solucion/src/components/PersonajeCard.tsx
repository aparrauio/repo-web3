/**
 * components/PersonajeCard.tsx
 * --------------------------------
 * Componente de negocio: muestra UN personaje. Usa <Tarjeta> y <Boton>
 * (la capa de UI) — no escribe "card" ni "btn" en ningún lado.
 *
 * Props: recibe el personaje y dos callbacks (onEditar, onEliminar).
 * Este componente no sabe CÓMO se edita o elimina — solo avisa que el
 * usuario hizo clic, y el padre (PersonajeList -> App) decide qué hacer.
 */

import { Personaje } from "../tipos";
import { Boton } from "./ui/Boton";
import { Tarjeta } from "./ui/Tarjeta";

interface PersonajeCardProps {
  personaje: Personaje;
  onEditar: (personaje: Personaje) => void;
  onEliminar: (id: number) => void;
}

export function PersonajeCard({ personaje, onEditar, onEliminar }: PersonajeCardProps) {
  return (
    <Tarjeta titulo={personaje.nombre}>
      <dl className="mb-4 grid grid-cols-2 gap-y-2 text-sm">
        <dt className="text-slate-500">Faccion</dt>
        <dd className="font-medium text-slate-800">{personaje.faccion}</dd>

        <dt className="text-slate-500">Elemento</dt>
        <dd className="font-medium text-slate-800">{personaje.elemento}</dd>

        <dt className="text-slate-500">Arma</dt>
        <dd className="font-medium text-slate-800">{personaje.arma}</dd>

        <dt className="text-slate-500">Nivel de poder</dt>
        <dd className="font-medium text-slate-800">{personaje.estadisticas.nivelPoder} / 10</dd>

        <dt className="text-slate-500">Combates ganados</dt>
        <dd className="font-medium text-slate-800">{personaje.estadisticas.combatesGanados}</dd>
      </dl>

      <div className="flex flex-wrap gap-2">
        <Boton variante="secondary" onClick={() => onEditar(personaje)}>
          Editar
        </Boton>
        <Boton
          variante="danger"
          onClick={() => {
            if (window.confirm(`¿Eliminar a ${personaje.nombre}?`)) {
              onEliminar(personaje.id);
            }
          }}
        >
          Eliminar
        </Boton>
      </div>
    </Tarjeta>
  );
}
