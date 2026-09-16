# Semana 05 · Clase 01 — Fundamentos NoSQL y configuración de MongoDB

Contenido práctico de la sesión: migrar el clásico esquema relacional **Usuarios + Hobbies**
(tal como existiría en **Supabase/Postgres**) hacia un modelo documental en **MongoDB Atlas**,
siguiendo el ejemplo oficial de modelado de datos de MongoDB
([Data Modeling in MongoDB](https://www.mongodb.com/docs/manual/data-modeling/)): una relación
1-a-muchos que se resuelve **embebiendo un arreglo** dentro del documento del usuario.

## El ejemplo de partida

Este es exactamente el ejemplo que ilustra el diagrama de modelado de datos de MongoDB:

**Tabla `users` (relacional):**

| ID | first_name | last_name | cell | city |
|---|---|---|---|---|
| 1 | Leslie | Yepp | 8125552344 | Pawnee |

**Tabla `hobbies` (relacional, 1-a-muchos vía `user_id`):**

| ID | user_id | hobby |
|---|---|---|
| 10 | 1 | scrapbooking |
| 11 | 1 | eating waffles |
| 12 | 1 | working |

En Supabase, leer a Leslie con todos sus hobbies requiere un `JOIN` que devuelve **3 filas
repetidas** (una por cada hobby). En MongoDB, ese mismo usuario es **un solo documento**, con
sus hobbies como un arreglo embebido:

```json
{
  "_id": "ObjectId(...)",
  "firstName": "Leslie",
  "lastName": "Yepp",
  "cell": "8125552344",
  "city": "Pawnee",
  "hobbies": ["scrapbooking", "eating waffles", "working"]
}
```

## La comparación central de la sesión

| | Relacional (Supabase/Postgres) | Documental (MongoDB) |
|---|---|---|
| Estructura | 2 tablas (`users`, `hobbies`) unidas por `user_id` | 1 colección (`users`), con `hobbies` como arreglo embebido |
| Leer un usuario con sus hobbies | `JOIN` que devuelve N filas repetidas (una por hobby) | Un solo `findOne`, sin joins ni filas repetidas |
| Agregar un hobby nuevo | `INSERT` en la tabla `hobbies` | `$push` sobre el arreglo `hobbies` del documento |
| Cuándo conviene cada uno | Los hobbies necesitaran ser consultados o editados como entidades independientes (con su propio dueño, fecha, etc.) | Los hobbies siempre se leen y muestran junto al usuario, y son una lista acotada |

## Qué contiene esta carpeta

- **`data/esquema-relacional-supabase.sql`** — el punto de partida: las tablas `users` y
  `hobbies` normalizadas, exactamente como en la imagen de referencia, con datos de ejemplo.
- **`enunciado.md`** — el reto de la sesión.
- **`pista.md`** — cómo agrupar filas de `hobbies` en un arreglo embebido por usuario.
- **`docs/comparacion-relacional-vs-documental.md`** — la explicación conceptual completa de
  la transformación, con el JOIN repetido y el documento final lado a lado.
- **`instrucciones-ejecucion.md`** — cómo configurar MongoDB Atlas, Compass, y correr los
  scripts de esta carpeta.
- **`solucion/`** — el código fuente (Node.js + TypeScript + driver oficial de MongoDB) que
  agrupa los hobbies por usuario y los inserta como documentos en Atlas.
- **`prompts/prompts-apoyo-ia.md`** y **`docs/plantilla-nota-aprendizaje.md`** — apoyo guiado
  y plantilla de cierre.

## Orden sugerido de trabajo en clase

1. Leer `data/esquema-relacional-supabase.sql` — identifica la relación 1-a-muchos entre
   `users` y `hobbies`.
2. Leer `docs/comparacion-relacional-vs-documental.md` — entender por qué esta relación se
   embebe como arreglo (y no se referencia).
3. Configurar un clúster gratuito de MongoDB Atlas y conectar MongoDB Compass
   (`instrucciones-ejecucion.md`).
4. Resolver el reto en `enunciado.md`: agrupar los hobbies por usuario y transformar en
   documentos.
5. Ejecutar `solucion/` para poblar Atlas con la colección `users`.
6. Explorar visualmente los documentos creados en Compass: `find`, filtros sobre el arreglo,
   `update` (agregar/quitar un hobby), `delete`.
7. Llenar `docs/plantilla-nota-aprendizaje.md`.
8. Hacer commit de cada paso en una rama `feature/migracion-mongodb`.

## Carpetas y archivos

```
clase-1-semana5-nosql-mongodb-atlas/
├── README.md
├── enunciado.md
├── pista.md
├── instrucciones-ejecucion.md
├── data/
│   └── esquema-relacional-supabase.sql
├── docs/
│   ├── comparacion-relacional-vs-documental.md
│   └── plantilla-nota-aprendizaje.md
├── prompts/
│   └── prompts-apoyo-ia.md
└── solucion/
    ├── package.json
    ├── tsconfig.json
    ├── .env.example
    └── src/
        ├── tipos.ts
        ├── datosRelacionales.ts     # filas de users + hobbies, tal como saldrían de Supabase
        ├── transformar.ts          # agrupa hobbies por user_id y los embebe como arreglo
        ├── conexion.ts             # conecta al cluster de MongoDB Atlas
        ├── seed.ts                 # inserta la colección users
        ├── consultas.ts            # insert, find, update ($push/$pull), delete (CRUD)
        └── index.ts                # ejecuta seed + demo de consultas
```
