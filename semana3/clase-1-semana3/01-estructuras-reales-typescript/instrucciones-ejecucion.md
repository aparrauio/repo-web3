# Cómo ejecutar — Parte 1 (Estructuras reales de aplicación)

## Paso 1 — Enfrentar el reto

```bash
cd 01-estructuras-reales-typescript/reto
npm install
npm run build
```

Esto **fallará** hasta que completes los 7 TODOs: 2 tipos en `tipos.ts` (`Faccion`,
`EventoCombate`) y 5 funciones repartidas en `utilidades.ts` y `eventos.ts`.

## Paso 2 — Completar los TODOs

Sigue `pista.md`: primero genéricos, luego tipos utilitarios, unión discriminada, enum y
objeto anidado. Vuelve a correr `npm run build` después de cada cambio.

## Paso 3 — Ejecutar

```bash
npm run dev
```

## Paso 4 — Contrastar con la solución

```bash
cd ../solucion
npm install
npm run dev
```

## Resultado esperado

```
=== Estructuras reales de aplicación (versión TypeScript) ===

Encontrado por id (genérico): Raiden

Personaje actualizado (Partial): Kunai mejorado

Resumen (Pick): { nombre: 'Sub-Zero', elemento: 'Hielo', arma: 'Kori Blade' }

Personaje creado (Omit): {
  nombre: 'Reptile', faccion: 'Lin Kuei', elemento: 'Almas',
  estadisticas: { nivelPoder: 7, combatesGanados: 20 }, arma: 'Ácido', id: 11
}

Más fuerte (objeto anidado): Raiden 10

Eventos de combate:
Ataque con 25 de daño
Defensa que bloquea 10 de daño
Movimiento especial: Fatality

Facciones registradas (enum): [ 'Shirai Ryu', 'Lin Kuei', 'Outworld', 'Edenia' ]
```
