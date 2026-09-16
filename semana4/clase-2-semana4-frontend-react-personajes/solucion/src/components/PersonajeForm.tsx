/**
 * components/PersonajeForm.tsx
 * --------------------------------
 * Componente de negocio reutilizado en 2 modos:
 *   - Crear: se monta con `personajeInicial = null`.
 *   - Editar: se monta con `personajeInicial = <el personaje seleccionado>`.
 *
 * Usa useEffect para precargar los campos cuando `personajeInicial` cambia
 * (por ejemplo, cuando el usuario hace clic en "Editar" sobre otra tarjeta).
 */

import { FormEvent, useEffect, useState } from "react";
import { Elemento, ELEMENTOS, NuevoPersonaje, Personaje } from "../tipos";
import { Boton } from "./ui/Boton";
import { Tarjeta } from "./ui/Tarjeta";

interface PersonajeFormProps {
  personajeInicial: Personaje | null;
  onGuardar: (datos: NuevoPersonaje) => Promise<void>;
  onCancelar: () => void;
}

const FORM_VACIO: NuevoPersonaje = {
  nombre: "",
  faccion: "",
  elemento: "Fuego",
  estadisticas: { nivelPoder: 5, combatesGanados: 0 },
  arma: "",
};

export function PersonajeForm({ personajeInicial, onGuardar, onCancelar }: PersonajeFormProps) {
  const [form, setForm] = useState<NuevoPersonaje>(FORM_VACIO);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cada vez que cambia `personajeInicial` (por ejemplo, al hacer clic en
  // "Editar" sobre un personaje distinto), reseteamos el formulario.
  useEffect(() => {
    if (personajeInicial) {
      const { id, ...resto } = personajeInicial;
      setForm(resto);
    } else {
      setForm(FORM_VACIO);
    }
  }, [personajeInicial]);

  async function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setError(null);

    if (!form.nombre.trim() || !form.faccion.trim() || !form.arma.trim()) {
      setError("Nombre, facción y arma son obligatorios.");
      return;
    }

    try {
      setGuardando(true);
      await onGuardar(form);
      setForm(FORM_VACIO);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo guardar el personaje.");
    } finally {
      setGuardando(false);
    }
  }

  const esEdicion = personajeInicial !== null;

  const clasesCampo =
    "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200";

  const clasesEtiqueta = "text-sm font-medium text-slate-700";

  return (
    <Tarjeta titulo={esEdicion ? `Editar a ${personajeInicial!.nombre}` : "Crear nuevo personaje"}>
      <form onSubmit={manejarEnvio} className="space-y-3">
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <div>
          <label className={clasesEtiqueta}>Nombre</label>
          <input
            className={clasesCampo}
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
        </div>

        <div>
          <label className={clasesEtiqueta}>Faccion</label>
          <input
            className={clasesCampo}
            value={form.faccion}
            onChange={(e) => setForm({ ...form, faccion: e.target.value })}
          />
        </div>

        <div>
          <label className={clasesEtiqueta}>Elemento</label>
          <select
            className={clasesCampo}
            value={form.elemento}
            onChange={(e) => setForm({ ...form, elemento: e.target.value as Elemento })}
          >
            {ELEMENTOS.map((elemento) => (
              <option key={elemento} value={elemento}>
                {elemento}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={clasesEtiqueta}>Arma</label>
          <input
            className={clasesCampo}
            value={form.arma}
            onChange={(e) => setForm({ ...form, arma: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={clasesEtiqueta}>Nivel de poder (1-10)</label>
            <input
              type="number"
              min={1}
              max={10}
              className={clasesCampo}
              value={form.estadisticas.nivelPoder}
              onChange={(e) =>
                setForm({
                  ...form,
                  estadisticas: { ...form.estadisticas, nivelPoder: Number(e.target.value) },
                })
              }
            />
          </div>
          <div>
            <label className={clasesEtiqueta}>Combates ganados</label>
            <input
              type="number"
              min={0}
              className={clasesCampo}
              value={form.estadisticas.combatesGanados}
              onChange={(e) =>
                setForm({
                  ...form,
                  estadisticas: { ...form.estadisticas, combatesGanados: Number(e.target.value) },
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <Boton variante="primary" type="submit">
            {guardando ? "Guardando..." : esEdicion ? "Guardar cambios" : "Crear personaje"}
          </Boton>
          <Boton variante="outline-secondary" type="button" onClick={onCancelar}>
            Cancelar
          </Boton>
        </div>
      </form>
    </Tarjeta>
  );
}
