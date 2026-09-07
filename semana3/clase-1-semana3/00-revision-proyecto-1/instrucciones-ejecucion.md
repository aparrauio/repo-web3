# Cómo ejecutar — Parte 0 (Revisión rápida del Proyecto 1)

## Paso 1 — Ejecutar la versión JavaScript

```bash
cd 00-revision-proyecto-1/version-javascript
npm install
npm start
```

## Paso 2 — Revisar la checklist

Abre `checklist-proyecto-1.md` y marca en qué archivo/línea encuentras cada requerimiento,
comparando `version-javascript/` con `reto-typescript/`.

## Paso 3 — Completar los tipos que faltan

```bash
cd ../reto-typescript
npm install
npm run build
```

Esto compila sin errores (no es corregir un bug, sino cerrar una brecha de cobertura de
tipos). Sigue `pista.md` para completar `tipos.ts` y ajustar `personajes.ts`/`combate.ts`.

## Paso 4 — Ejecutar tu versión corregida

```bash
npm run dev
```

## Paso 5 — Contrastar con la solución

```bash
cd ../solucion-typescript
npm install
npm run dev
```

Resultado esperado:

```
=== Torneo Mortal Kombat (versión TypeScript) ===

Combates registrados: 3

Personajes invocados: 10

Personajes de elemento Fuego: Scorpion, Liu Kang
Nivel de poder promedio: 8

Personaje fusión generado:
{
  id: '1-3', nombre: 'Scorpion / Raiden', faccion: 'Dioses Antiguos', elemento: 'Fuego',
  arma: 'Bastón', estadisticas: { nivelPoder: 9, combatesGanados: 97 }
}
```
