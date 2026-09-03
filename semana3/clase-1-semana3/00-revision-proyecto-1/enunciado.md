# Parte 0 · Revisión rápida — ¿qué se espera en el Proyecto 1?

**Duración sugerida:** 15-20 minutos, antes de la actividad principal de la sesión.

## Enunciado

Aquí tienes un ejemplo **casi completo** de lo que el Proyecto 1 pide: una versión en
JavaScript avanzado (`version-javascript/`) y su migración a TypeScript (`reto-typescript/`),
ambas usando el dataset `mortal_kombat_personajes.json`.

Tu tarea tiene dos partes:

1. **Revisar con la checklist** (`checklist-proyecto-1.md`) qué requerimiento técnico del
   Proyecto 1 cumple cada archivo. Marca cada ítem con el archivo y la línea donde lo
   encontraste.
2. **Cerrar la brecha que falta.** La migración en `reto-typescript/` todavía no llega al
   mínimo exigido de tipos personalizados ni usa ninguna unión literal. Debes:
   - Convertir el campo `elemento` (hoy `string`) en un **tipo literal / unión** con los
     9 valores reales del dataset.
   - Agregar **un tipo personalizado más** (además de `Personaje`): una interface anidada
     `EstadisticaCombate` que agrupe `nivelPoder` y un nuevo campo `combatesGanados`.
   - Actualizar `Personaje` para que use ambos tipos nuevos.

Al terminar, tu `tipos.ts` debe tener **3 tipos personalizados** (`Elemento`, `EstadisticaCombate`,
`Personaje`) y **1 unión literal** (`Elemento`) — el mínimo exacto que exige el Proyecto 1.

## Por qué esta actividad no es "solo leer código"

El Proyecto 1 se evalúa con una checklist de requerimientos mínimos. Practicar identificarlos
en un ejemplo ajeno —y completar lo que falta— es la mejor forma de asegurarte de que tu propio
repositorio los cumple todos.
