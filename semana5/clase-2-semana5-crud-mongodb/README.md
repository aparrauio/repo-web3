# Semana 05 · Clase 02 — Comandos CRUD en MongoDB y modelado de un escenario propio

Contenido práctico de la sesión, en dos partes, ambas conectándose a un clúster real de
**MongoDB Atlas**.

## Qué contiene esta carpeta

1. **`00-practica-comandos-crud/`** — primero, cómo conectarse a la base de datos
   `usuarios_hobbies` que ya creaste en la Semana 5 · Clase 1, y cómo ejecutar sobre ella los
   8 comandos CRUD centrales de MongoDB: `insertOne`, `insertMany`, `find`, `find().sort()`,
   `updateOne`, `updateMany`, `deleteOne` y `deleteMany`.

2. **`01-reto-creativo-modelado/`** — un escenario creativo nuevo (un archivo de criaturas
   urbanas reportadas en Pawnee) que debes **modelar desde cero** (diseñar la forma del
   documento) y luego poblar y consultar usando los mismos 8 comandos.

## Por qué en ese orden

Primero practicas los comandos sobre un modelo **que ya existe** (usuarios y hobbies), para
concentrarte solo en la sintaxis de MongoDB. Después, en la Parte 1, tienes que **diseñar tú
mismo** la forma de los documentos antes de poder ejecutar los mismos comandos — la misma
progresión que ya viviste en semanas anteriores (primero un ejemplo guiado, luego un reto
propio).

## Los 8 comandos que vas a dominar

| Comando | Qué hace |
|---|---|
| `insertOne` | Inserta UN documento nuevo en la colección. |
| `insertMany` | Inserta VARIOS documentos de una sola vez. |
| `find` (con filtro) | Busca documentos que cumplan una condición. |
| `find().sort()` | Busca y además ordena los resultados por un campo. |
| `updateOne` | Modifica el PRIMER documento que cumpla el filtro. |
| `updateMany` | Modifica TODOS los documentos que cumplan el filtro. |
| `deleteOne` | Elimina el PRIMER documento que cumpla el filtro. |
| `deleteMany` | Elimina TODOS los documentos que cumplan el filtro. |

## Orden sugerido de trabajo en clase

1. Conectarte a tu clúster de Atlas (mismo que la Clase 1) y confirmar que la base
   `usuarios_hobbies` sigue ahí.
2. Resolver `00-practica-comandos-crud/` — los 8 comandos sobre datos conocidos.
3. Leer el escenario creativo de `01-reto-creativo-modelado/enunciado.md`.
4. Diseñar tu propio documento (campos, tipos, arreglos embebidos) antes de escribir código.
5. Resolver `01-reto-creativo-modelado/` — los mismos 8 comandos, sobre tu propio modelo.
6. Hacer commit de cada comando practicado en una rama `feature/crud-mongodb`.

## Carpetas y archivos

```
clase-2-semana5-crud-mongodb/
├── README.md
├── prompts/
│   └── prompts-apoyo-ia.md
├── docs/
│   └── plantilla-nota-aprendizaje.md
├── 00-practica-comandos-crud/
│   ├── enunciado.md
│   ├── pista.md
│   ├── instrucciones-ejecucion.md
│   └── solucion/
│       ├── package.json · tsconfig.json · .env.example
│       └── src/
│           ├── tipos.ts
│           ├── datos.ts
│           ├── conexion.ts
│           ├── comandos.ts
│           └── index.ts
└── 01-reto-creativo-modelado/
    ├── enunciado.md
    ├── pista.md
    ├── instrucciones-ejecucion.md
    └── solucion/
        ├── package.json · tsconfig.json · .env.example
        └── src/
            ├── tipos.ts
            ├── datos.ts
            ├── conexion.ts
            ├── comandos.ts
            └── index.ts
```
