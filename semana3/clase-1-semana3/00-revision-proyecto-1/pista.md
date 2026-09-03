# Pista — Revisión rápida del Proyecto 1

## Dónde buscar cada requerimiento

| Requerimiento del Proyecto 1 | Dónde lo encuentras en este ejemplo |
|---|---|
| Versión JS y versión TS | `version-javascript/` vs. `reto-typescript/` |
| ≥ 3 conceptos de JS avanzado | `combate.js`: closures, HOF, destructuring/spread-rest, módulos ES, promesas/async-await |
| `tsconfig.json` + script de ejecución | `reto-typescript/tsconfig.json` + `package.json` (`npm run dev`) |
| ≥ 3 tipos personalizados | **Todavía falta uno** — hoy solo existe `interface Personaje` |
| ≥ 1 unión literal | **Todavía falta** — `elemento` es `string`, no una unión |
| ≥ 3 funciones tipadas | `combate.ts`: `filtrarPorElemento`, `calcularPoderPromedio`, `fusionarPersonajes`, `invocarPersonajes` |

## Cómo completar los tipos que faltan

1. Abre `reto-typescript/src/tipos.ts`.
2. Escribe la unión literal con los 9 valores reales de `elemento` en el dataset:
   `"Fuego" | "Hielo" | "Rayo" | "Acero" | "Sai" | "Almas" | "Metal" | "Nigromancia" | "Humo"`.
3. Crea `interface EstadisticaCombate { nivelPoder: number; combatesGanados: number }`.
4. Actualiza `interface Personaje` para que use `elemento: Elemento` y
   `estadisticas: EstadisticaCombate` en vez de un campo `nivelPoder` plano.
5. Ajusta `personajes.ts` y `combate.ts` para que sigan compilando con la nueva forma.

Si te quedas atascado, compara contra `solucion-typescript/` — pero inténtalo primero tú.
