# Actividad 1 · Laboratorio de Intenciones Tipadas (versión de práctica)

Esta actividad es una versión **simplificada** del Proyecto 1 (entregable de las semanas 1-2).
No sustituye tu proyecto personal — es un ejemplo guiado para practicar exactamente los mismos
movimientos técnicos que necesitarás documentar en tu entrega.

## Premisa creativa

**Oráculo de Criaturas Emocionales**: un mini-programa que carga criaturas de forma asíncrona
(simulando una consulta lenta al oráculo), permite filtrarlas por estado de ánimo (`mood`),
calcular estadísticas y combinar dos criaturas en una nueva criatura híbrida.

## Enunciado del reto

Ya existe una **versión funcional en JavaScript** (`version-javascript/`). Tu reto es completar
su **migración a TypeScript**, que está deliberadamente inconclusa en `reto-typescript-incompleto/`.

Al ejecutar `npm run build` dentro de esa carpeta, `tsc` **debe mostrar errores reales**. Tu trabajo:

1. Leer cada error de compilación y entender qué está mal (¿falta un campo?, ¿un tipo `any`
   implícito?, ¿un valor fuera de la unión literal?).
2. Corregir el código en `src/tipos.ts`, `src/criaturas.ts` y `src/oraculo.ts` hasta que
   `npm run build` compile **sin ningún error**.
3. Ejecutar `npm run dev` y confirmar que la salida en consola coincide con la de la versión
   en JavaScript (los datos son los mismos; solo cambia que ahora están validados por tipos).
4. Llenar la nota de aprendizaje (`docs/plantilla-nota-aprendizaje.md`) con los errores exactos
   que viste antes de corregirlos.

## Requisitos que tu migración debe cumplir (igual que el Proyecto 1)

- Mínimo **3 tipos personalizados** entre `type` e `interface`.
- Mínimo **1 unión literal** para representar una dimensión creativa (aquí: `Mood` o `Rareza`).
- Mínimo **3 funciones tipadas** con parámetros y retorno explícito o inferido correctamente.
- `tsconfig.json` configurado con `strict: true`.
- El código debe seguir usando los conceptos avanzados de JavaScript ya presentes en la versión
  original: closures, funciones de orden superior, destructuring/spread-rest, módulos ES,
  promesas/async-await y manejo de errores con `try/catch`.

## Qué NO tienes que hacer

No necesitas escribir el programa desde cero: la lógica y los datos ya existen en JavaScript.
Tu trabajo es exclusivamente la **migración de tipos** — igual que en la Clase 4 de tu Proyecto 1.
