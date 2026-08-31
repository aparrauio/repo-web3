# Pista

Resuelve las partes en orden, probando cada archivo por separado antes de integrarlo en `index.js`. No intentes escribir todo de una vez.

- **Closures:** piensa en `crearCaldero` como una "fábrica de calderos". Cada vez que la llamas, se crea un nuevo scope con su propia variable `ingredientes = []`. Los métodos que retornas "cierran sobre" (closure) esa variable y pueden leerla/modificarla, pero nadie de fuera tiene acceso directo a ella.

- **Funciones de orden superior:** recuerda el orden lógico: primero `filter` (quedarte con lo que cumple la condición), luego `map` (transformar cada elemento), y `reduce` al final (combinar todo en un solo valor, como una suma). Puedes encadenarlos: `ingredientes.filter(...).map(...)`.

- **Destructuring y spread/rest:** `const { nombre, ingredientePrincipal, extras } = receta;` extrae propiedades de un objeto. Para la función con múltiples recetas, la firma se ve así: `function combinarRecetas(...recetas) { ... }` — dentro, usa `recetas.map(r => r.extras)` y luego combina todo con spread: `[...arr1, ...arr2]` o `.flat()`.

- **Módulos ES:** cada archivo que exporta algo termina con líneas como `export function miFuncion() {...}` o `export const miDato = [...]`. Cada archivo que importa algo empieza con `import { miFuncion } from './archivo.js';`. No olvides configurar `"type": "module"` en el `package.json`.

- **Promesas y Event Loop:** la estructura base es:
  ```js
  function prepararPocion(nombre, tiempoDeCoccion) {
    return new Promise((resolve, reject) => {
      if (tiempoDeCoccion < 0) return reject(new Error("Tiempo inválido"));
      setTimeout(() => resolve(`${nombre} está lista`), tiempoDeCoccion);
    });
  }
  ```
  Para probar que no bloquea, imprime un `console.log("Preparando pociones...")` justo antes de llamar a la función async (sin `await` en ese punto), y verás que ese mensaje aparece antes de que termine el tiempo de cocción.

Si te atoras en una parte específica, revisa solo ese archivo de forma aislada antes de integrarlo con los demás.
