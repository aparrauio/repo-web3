/**
 * App.tsx
 * -------
 * Componente raíz: mantiene el estado de la pantalla (lista de personajes,
 * filtro activo, personaje en edición, carga/error) y orquesta las
 * llamadas a la API. Los componentes hijos son "tontos": reciben datos y
 * callbacks por props, sin llamar a fetch directamente.
 */

import { useEffect, useState } from "react";
import { Elemento, NuevoPersonaje, Personaje } from "./tipos";
import {
  actualizarPersonaje,
  crearPersonaje,
  eliminarPersonaje,
  obtenerPersonajes,
} from "./api/personajesApi";
import { FiltroElemento } from "./components/FiltroElemento";
import { PersonajeForm } from "./components/PersonajeForm";
import { PersonajeList } from "./components/PersonajeList";

export default function App() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [filtro, setFiltro] = useState<Elemento | "">("");
  const [personajeEnEdicion, setPersonajeEnEdicion] = useState<Personaje | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Se ejecuta al montar el componente Y cada vez que cambia `filtro`.
  useEffect(() => {
    cargarPersonajes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtro]);

  async function cargarPersonajes() {
    try {
      setCargando(true);
      setError(null);
      const datos = await obtenerPersonajes(filtro || undefined);
      setPersonajes(datos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar los personajes.");
    } finally {
      setCargando(false);
    }
  }

  // Un solo handler para crear O actualizar, según si hay un personaje en edición.
  async function manejarGuardar(datos: NuevoPersonaje) {
    if (personajeEnEdicion) {
      await actualizarPersonaje(personajeEnEdicion.id, datos);
    } else {
      await crearPersonaje(datos);
    }
    setPersonajeEnEdicion(null);
    await cargarPersonajes();
  }

  async function manejarEliminar(id: number) {
    try {
      await eliminarPersonaje(id);
      await cargarPersonajes();
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar el personaje.");
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fef3c7_0%,#ffffff_40%,#e0f2fe_100%)]">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <header className="mb-6 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
        <h1 className="font-display text-3xl tracking-wide text-slate-900 sm:text-4xl">
          Personajes de Mortal Kombat
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
          Frontend en React + TypeScript, consumiendo la API de la Clase 1 (Express +
          middleware). Estilos con Tailwind, aislados en <code>components/ui</code>.
        </p>
      </header>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <PersonajeForm
            personajeInicial={personajeEnEdicion}
            onGuardar={manejarGuardar}
            onCancelar={() => setPersonajeEnEdicion(null)}
          />
        </div>

        <div className="lg:col-span-8">
          <FiltroElemento valor={filtro} onCambiar={setFiltro} />

          {cargando ? (
            <p className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
              Cargando personajes...
            </p>
          ) : (
            <PersonajeList
              personajes={personajes}
              onEditar={setPersonajeEnEdicion}
              onEliminar={manejarEliminar}
            />
          )}
        </div>
      </div>
      </main>
    </div>
  );
}
