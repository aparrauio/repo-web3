# Cómo ejecutar — Actividad 0 (Fundamentos de TypeScript)

1. Entra a la carpeta de la solución:
   ```bash
   cd 00-fundamentos-typescript/solucion
   ```
2. Instala TypeScript como dependencia de desarrollo:
   ```bash
   npm install
   ```
3. Compila y ejecuta en un solo paso:
   ```bash
   npm run dev
   ```
   Esto corre `tsc` (genera `dist/index.js`) y luego `node dist/index.js`.

## Resultado esperado en consola

```
Fénix Ígneo (fuego) — poder 92
true
```

## Para practicar el error a propósito

1. Abre `src/index.ts`.
2. Cambia `elemento: "fuego"` por `elemento: "metal"`.
3. Corre `npm run build` (solo compila, sin ejecutar).
4. Verás un error como:
   ```
   error TS2322: Type '"metal"' is not assignable to type 'Elemento'.
   ```
5. Vuelve a dejar `"fuego"` y confirma que el error desaparece.

Esto es exactamente lo que el Proyecto 1 pide documentar en la nota de aprendizaje:
**qué error detectó TypeScript antes de ejecutar el código**.
