/**
 * components/ui/Boton.tsx
 * --------------------------
 * Componente base de botones del proyecto. Centraliza variantes visuales
 * con Tailwind para que el resto de la aplicación solo use la API
 * <Boton variante="..."> sin acoplarse a clases concretas.
 */

import { ButtonHTMLAttributes, ReactNode } from "react";

type VarianteBoton = "primary" | "secondary" | "danger" | "outline-secondary";

interface BotonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: VarianteBoton;
  children: ReactNode;
}

export function Boton({ variante = "primary", children, className, ...resto }: BotonProps) {
  const clasesPorVariante: Record<VarianteBoton, string> = {
    primary: "bg-amber-500 text-slate-950 hover:bg-amber-400 focus-visible:outline-amber-500",
    secondary: "bg-slate-700 text-white hover:bg-slate-600 focus-visible:outline-slate-700",
    danger: "bg-rose-600 text-white hover:bg-rose-500 focus-visible:outline-rose-600",
    "outline-secondary":
      "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-500",
  };

  const clasesBase =
    "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <button
      className={`${clasesBase} ${clasesPorVariante[variante]} ${className ?? ""}`.trim()}
      {...resto}
    >
      {children}
    </button>
  );
}
