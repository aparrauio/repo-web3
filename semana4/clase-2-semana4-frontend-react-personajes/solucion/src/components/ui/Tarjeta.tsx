/**
 * components/ui/Tarjeta.tsx
 * ----------------------------
 * Componente base de tarjetas/paneles. Mantiene encapsuladas las clases de
 * presentación con Tailwind para reutilizar estructura visual consistente.
 */

import { ReactNode } from "react";

interface TarjetaProps {
  titulo?: string;
  children: ReactNode;
  className?: string;
}

export function Tarjeta({ titulo, children, className }: TarjetaProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/70 ${className ?? ""}`.trim()}
    >
      {titulo && <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900">{titulo}</div>}
      <div className="p-4">{children}</div>
    </div>
  );
}
