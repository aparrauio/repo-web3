# Guía de migración: Bootstrap → Tailwind

Este documento existe para comprobar que la arquitectura funciona: **migrar de framework de
estilos debería tocar solo 2 archivos**, sin importar cuántos componentes de negocio tenga la
aplicación.

## Paso 1 — Quitar Bootstrap de `index.html`

```html
<!-- Eliminar esta línea -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
```

## Paso 2 — Instalar y configurar Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Agrega un archivo `src/index.css` con las directivas de Tailwind e impórtalo en `main.tsx`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Paso 3 — Reescribir `components/ui/Boton.tsx`

Solo cambia el `return` de este archivo (el comentario "Versión equivalente con Tailwind" ya
incluido en el código te da el punto de partida):

```tsx
const clasesPorVariante: Record<VarianteBoton, string> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  "outline-secondary": "border border-gray-400 text-gray-700 hover:bg-gray-100",
};

return (
  <button className={`px-3 py-1.5 rounded font-medium ${clasesPorVariante[variante]}`} {...resto}>
    {children}
  </button>
);
```

## Paso 4 — Reescribir `components/ui/Tarjeta.tsx`

Mismo principio: solo el `return` cambia.

```tsx
return (
  <div className={`rounded-lg border border-gray-200 shadow-sm mb-3 ${className ?? ""}`}>
    {titulo && <div className="border-b px-4 py-2 font-semibold">{titulo}</div>}
    <div className="p-4">{children}</div>
  </div>
);
```

## Paso 5 — Verificar que nada más cambió

Busca en el proyecto cualquier ocurrencia de `className="btn` o `className="card` fuera de
`components/ui/`. Si tu arquitectura respetó la separación, **no debería haber ninguna**.

```bash
grep -rn "btn btn-" src/ --include="*.tsx" | grep -v "components/ui"
grep -rn ""card" src/ --include="*.tsx" | grep -v "components/ui"
```

Si estos comandos no devuelven nada, tu migración está completa y el resto de componentes
(`PersonajeCard`, `PersonajeForm`, `PersonajeList`, `FiltroElemento`, `App`) no necesitaron
ningún cambio.

## Por qué esto importa para el resto del curso

Este mismo patrón —aislar una decisión técnica externa detrás de una capa delgada propia— es
el que ya usaste con el middleware en el backend (Clase 1) y es el que seguirás usando con
cualquier librería de UI, cliente HTTP o motor de estilos en proyectos futuros.
