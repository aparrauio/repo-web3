# Semana 04 · Clase 1 — Express.js y patrón de middleware

## Objetivo de aprendizaje

- Construir una API REST con Express y TypeScript.
- Aplicar middleware para separar responsabilidades y mejorar mantenibilidad.
- Diseñar endpoints CRUD con rutas, controladores y servicios.
- Probar endpoints con herramientas de cliente HTTP.

## Enunciado

Construye una API Express + TypeScript para gestionar un **inventario de personajes de
Mortal Kombat** (el mismo dataset que usaste en la Semana 3). La API debe incluir:

- `express.json()` para poder leer cuerpos JSON en `POST`/`PUT`.
- Un middleware de **logging** que registre método, ruta y duración de cada petición.
- Un middleware de **id de petición** (`request id`) que le asigne un identificador único a
  cada request y lo incluya en las respuestas.
- Un middleware **centralizado de manejo de errores**, al final de la cadena, que capture
  cualquier error lanzado por las rutas y responda con un JSON consistente.

### Endpoints CRUD requeridos

| Método | Ruta | Qué hace |
|---|---|---|
| `GET` | `/api/personajes` | Lista todos los personajes (admite filtro opcional `?elemento=`) |
| `GET` | `/api/personajes/:id` | Devuelve un personaje por id, o 404 si no existe |
| `POST` | `/api/personajes` | Crea un personaje nuevo (valida el cuerpo) |
| `PUT` | `/api/personajes/:id` | Actualiza campos de un personaje existente |
| `DELETE` | `/api/personajes/:id` | Elimina un personaje por id |

### Arquitectura esperada

Separa el código en capas: **rutas** (definen los endpoints), **controladores** (traducen la
petición/respuesta HTTP) y **servicios** (contienen la lógica real sobre los datos). No mezcles
estas responsabilidades en un solo archivo.

## Qué debes entregar

Una API que arranque con `npm run dev`, responda las 5 rutas CRUD, use los 3 middlewares
indicados, y devuelva errores consistentes en formato JSON (por ejemplo, al buscar un `id`
que no existe).
