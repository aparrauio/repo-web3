# Cómo ejecutar — Servidor HTTP para un oráculo creativo

## Paso 1 — Entrar a la carpeta e instalar

```bash
cd 01-servidor-http-oraculo/solucion
npm install
```

## Paso 2 — Configurar variables de entorno

```bash
cp .env.example .env
```

`.env` ya trae `PORT=3000` por defecto — puedes cambiarlo si ese puerto está ocupado.

## Paso 3 — Ejecutar en desarrollo

```bash
npm run dev
```

Deberías ver:

```
Oráculo creativo escuchando en http://localhost:3000
```

## Paso 4 — Probar las rutas

Con `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/idea
curl http://localhost:3000/salud
curl http://localhost:3000/no-existe
```

O con Thunder Client / Postman, usando peticiones `GET` a las mismas URLs.

## Resultado esperado

```json
// GET /
{ "mensaje": "Bienvenido al oráculo creativo. Consulta /idea o /salud." }

// GET /idea (el texto cambia en cada consulta)
{ "idea": { "id": 3, "texto": "...", "categoria": "interactiva" } }

// GET /salud
{ "estado": "ok", "timestamp": "2026-01-01T00:00:00.000Z" }

// GET /no-existe → status 404
{ "error": "Ruta no encontrada: GET /no-existe" }
```

En la terminal donde corre `npm run dev`, cada petición debe registrarse con fecha, método y
ruta, por ejemplo:

```
[2026-01-01T00:00:00.000Z] GET /idea
```

## Paso 5 — Compilar para producción (opcional)

```bash
npm run build
npm start
```

`npm run build` genera `dist/` con JavaScript puro; `npm start` ejecuta esa versión compilada
sin depender de `tsx`.
