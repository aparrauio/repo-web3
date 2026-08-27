# Semana 02 · Clase 02 — Introducción a TypeScript desde JavaScript

Contenido práctico de la sesión, alineado con el **Proyecto 1: Laboratorio de Intenciones Tipadas**
(semanas 1–2, sesiones 1–4, entrega al final de esta clase).

## Qué contiene esta carpeta

Esta clase tiene **dos actividades**, pensadas para hacerse en orden:

1. **`00-fundamentos-typescript/`** — repaso rápido (10-15 min) de los fundamentos básicos de
   TypeScript: tipos primitivos, arreglos, objetos, funciones tipadas e inferencia. Sirve de
   calentamiento antes de la actividad principal.

2. **`01-laboratorio-intenciones-tipadas/`** — el ejercicio principal de la sesión. Es una versión
   **simplificada** del Proyecto 1: un "Oráculo de Criaturas Emocionales" que primero se construye
   en JavaScript avanzado (closures, funciones de orden superior, destructuring/spread-rest,
   módulos ES, promesas/async-await con manejo de errores) y luego se migra a TypeScript.

   A diferencia de un ejemplo ya resuelto, esta carpeta incluye:
   - `version-javascript/` — el punto de partida, funcionando en JS.
   - `reto-typescript-incompleto/` — una migración a TypeScript **deliberadamente incompleta**:
     al compilar con `tsc` aparecen errores reales que el estudiante debe leer, entender y corregir.
     Esto reproduce la experiencia pedida en el Proyecto 1: "documentar qué detectó TypeScript
     antes de ejecutar el código".
   - `solucion-typescript/` — la migración completa y comentada, para contrastar una vez resuelto
     el reto.

## Cómo se conecta con el Proyecto 1

| Requerimiento del Proyecto 1 | Dónde se practica en esta sesión |
|---|---|
| Versión JS y versión TS de un mini-programa | `version-javascript/` → `reto-typescript-incompleto/` → `solucion-typescript/` |
| ≥ 3 conceptos de JavaScript avanzado | Closures, funciones de orden superior, destructuring/spread-rest, módulos ES, promesas/async-await, manejo de errores (5 en total) |
| `tsconfig.json` + script de compilación/ejecución | Incluido en `reto-typescript-incompleto/` y `solucion-typescript/` |
| ≥ 3 tipos personalizados (`type` / `interface`) | `Criatura` (interface), `Mood`, `Rareza` (type) |
| ≥ 1 unión literal | `Mood` y `Rareza` son uniones literales |
| ≥ 3 funciones tipadas | `filtrarPorMood`, `calcularEnergiaPromedio`, `combinarCriaturas`, `cargarCriatura` |
| Nota de aprendizaje sobre errores detectados por TypeScript | Plantilla en `docs/plantilla-nota-aprendizaje.md` |

## Orden sugerido de trabajo en clase

1. Resolver `00-fundamentos-typescript/` (individual, 10-15 min).
2. Leer y ejecutar `01-laboratorio-intenciones-tipadas/version-javascript/`.
3. Abrir `reto-typescript-incompleto/`, compilar con `tsc` y anotar los errores que aparecen.
4. Corregir el código hasta que compile sin errores (comparar contra `solucion-typescript/` solo
   si quedan atascados).
5. Hacer commit de cada paso siguiendo el flujo de Git/GitHub visto en la semana 1
   (rama `feature/proyecto-1`, commits semánticos, pull request).
