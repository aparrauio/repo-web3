# Cómo ejecutar — Actividad 1 (Laboratorio de Intenciones Tipadas)

## Paso 1 — Ejecutar la versión JavaScript (referencia)

```bash
cd 01-laboratorio-intenciones-tipadas/version-javascript
npm install
npm start
```

Salida esperada (los números pueden variar ligeramente si cambias el orden):

```
=== Oráculo de Criaturas Emocionales (versión JavaScript) ===

Consultas registradas: 3

Criaturas cargadas: 5

Criaturas curiosas: Luma, Pixel
Energía promedio del oráculo: 65

Criatura híbrida generada:
{ id: '1-3', nombre: 'Luma + Ignix', mood: 'curiosa', rareza: 'mitica', energia: 77 }
```

## Paso 2 — Enfrentar el reto de migración

```bash
cd ../reto-typescript-incompleto
npm install
npm run build
```

Esto **debe fallar** y mostrarte varios errores de TypeScript. Léelos con calma: cada uno
indica archivo, línea y columna exacta del problema.

## Paso 3 — Corregir hasta que compile

Edita `src/tipos.ts`, `src/criaturas.ts` y `src/oraculo.ts` según la pista (`pista.md`).
Vuelve a correr `npm run build` después de cada cambio hasta que ya no aparezcan errores.

## Paso 4 — Ejecutar la versión corregida

```bash
npm run dev
```

La salida en consola debe ser equivalente a la de la versión JavaScript del Paso 1.

## Paso 5 — Contrastar con la solución (opcional)

Si quedaste atascado, compara tu código contra:

```bash
cd ../solucion-typescript
npm install
npm run dev
```

## Paso 6 — Documentar en la nota de aprendizaje

Completa `docs/plantilla-nota-aprendizaje.md` con los errores exactos que TypeScript te mostró
antes de corregirlos. Este documento es parte de los entregables del Proyecto 1.
