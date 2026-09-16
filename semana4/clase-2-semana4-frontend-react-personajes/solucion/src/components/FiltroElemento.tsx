/**
 * components/FiltroElemento.tsx
 * ---------------------------------
 * Componente de negocio para seleccionar un elemento y notificar el cambio
 * al componente padre. Usa utilidades de Tailwind para mantener un estilo
 * consistente con el resto de la interfaz.
 *
 * Props: recibe el valor actual y una función para notificar el cambio —
 * el estado real vive en App.tsx (el componente padre).
 */

import { Elemento, ELEMENTOS } from "../tipos";

interface FiltroElementoProps {
  valor: Elemento | "";
  onCambiar: (nuevoValor: Elemento | "") => void;
}

export function FiltroElemento({ valor, onCambiar }: FiltroElementoProps) {
  return (
    <div className="mb-5 w-full max-w-xs">
      <label htmlFor="filtro-elemento" className="mb-2 block text-sm font-semibold text-slate-700">
        Filtrar por elemento
      </label>
      <select
        id="filtro-elemento"
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        value={valor}
        onChange={(evento) => onCambiar(evento.target.value as Elemento | "")}
      >
        <option value="">Todos los elementos</option>
        {ELEMENTOS.map((elemento) => (
          <option key={elemento} value={elemento}>
            {elemento}
          </option>
        ))}
      </select>
    </div>
  );
}
