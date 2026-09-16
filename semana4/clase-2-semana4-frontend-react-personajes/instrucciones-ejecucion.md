# Cómo ejecutar — Frontend en React para la API de personajes

## Paso 0 — Tener el backend corriendo

Este frontend necesita la API de la Clase 1 (`clase-1-semana4-express-middleware/solucion/`)
corriendo en otra terminal:

```bash
cd clase-1-semana4-express-middleware/solucion
npm install
cp .env.example .env
npm run dev
# API de personajes escuchando en http://localhost:3000
```

## Paso 1 — Instalar el frontend

En una terminal nueva:

```bash
cd solucion
npm install
```

## Paso 2 — Configurar variables de entorno

```bash
cp .env.example .env
```

`.env` trae `VITE_API_URL=http://localhost:3000` por defecto — ajústalo si tu backend corre
en otro puerto.

## Paso 3 — Ejecutar en desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Paso 4 — Probar las 6 funcionalidades

1. **Listar**: al cargar la página deberías ver las 10 tarjetas de personajes.
2. **Filtrar**: cambia el `<select>` "Filtrar por elemento" y confirma que la lista se
   actualiza (revisa la pestaña Network: debe llamar a `?elemento=...`).
3. **Ver detalle**: cada tarjeta ya muestra todos los campos del personaje.
4. **Crear**: llena el formulario de la izquierda (déjalo en modo "Crear") y confirma que
   aparece una tarjeta nueva.
5. **Editar**: haz clic en "Editar" sobre cualquier tarjeta — el formulario debe precargarse
   con sus datos. Cambia algo y guarda.
6. **Eliminar**: haz clic en "Eliminar", confirma el diálogo, y verifica que la tarjeta
   desaparece de la lista.

## Paso 5 — Confirmar el aislamiento de Bootstrap

Sigue `MIGRACION-BOOTSTRAP-A-TAILWIND.md` y ejecuta los comandos `grep` del Paso 5 para
comprobar que ninguna clase de Bootstrap aparece fuera de `components/ui/`.

## Paso 6 — Compilar para producción (opcional)

```bash
npm run build
npm run preview
```
