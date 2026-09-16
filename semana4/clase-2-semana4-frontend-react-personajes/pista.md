# Pista — Frontend en React para la API de personajes

## Cómo aislar Bootstrap detrás de componentes propios

En vez de escribir esto en cada componente de negocio...

```tsx
// Mal: PersonajeCard.tsx conoce las clases de Bootstrap directamente
<button className="btn btn-danger btn-sm" onClick={onEliminar}>Eliminar</button>
```

...crea un componente `Boton` que reciba una prop `variante`, y úsalo en todos lados:

```tsx
// components/ui/Boton.tsx — el ÚNICO lugar que sabe que existe Bootstrap
export function Boton({ variante = "primary", children, ...props }: BotonProps) {
  return (
    <button className={`btn btn-${variante}`} {...props}>
      {children}
    </button>
  );
}

// PersonajeCard.tsx — no sabe qué framework de CSS hay detrás
<Boton variante="danger" onClick={onEliminar}>Eliminar</Boton>
```

Si migras a Tailwind, solo reescribes el `return` de `Boton.tsx` (por ejemplo, a
`className="bg-red-600 text-white px-3 py-1 rounded"` cuando `variante === "danger"`) — todo
lo demás sigue funcionando igual.

## Cómo estructurar las llamadas a la API

Centraliza todos los `fetch` en un solo archivo (`api/personajesApi.ts`), en vez de llamar
`fetch(...)` directamente dentro de los componentes:

```ts
export async function obtenerPersonajes(elemento?: Elemento): Promise<Personaje[]> {
  const url = elemento
    ? `${API_URL}/api/personajes?elemento=${elemento}`
    : `${API_URL}/api/personajes`;
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error("No se pudieron cargar los personajes");
  const datos = await respuesta.json();
  return datos.personajes;
}
```

## Cómo reutilizar un formulario para crear Y editar

Un solo componente `PersonajeForm` puede servir para ambos casos si recibe un
`personajeInicial` opcional:

```tsx
<PersonajeForm personajeInicial={null} onGuardar={crear} />       {/* modo crear */}
<PersonajeForm personajeInicial={personajeSeleccionado} onGuardar={actualizar} /> {/* modo editar */}
```

Dentro del formulario, usa `useEffect` para precargar los campos cuando `personajeInicial`
cambie.

## Orden recomendado para construir el frontend

1. `tipos.ts` — copia la forma de `Personaje` desde el backend.
2. `api/personajesApi.ts` — las 5 funciones (una por cada ruta).
3. `components/ui/Boton.tsx` y `Tarjeta.tsx` — la capa de aislamiento de Bootstrap.
4. `components/PersonajeCard.tsx` y `PersonajeList.tsx` — mostrar la lista.
5. `components/FiltroElemento.tsx` — el filtro por elemento.
6. `components/PersonajeForm.tsx` — crear y editar.
7. `App.tsx` — conecta todo: estado, efectos y llamadas a la API.
