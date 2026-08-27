# Solución completa comentada — "La fábrica de pociones mágicas"

> El código completo también está disponible y listo para ejecutar en la carpeta [`solucion/`](./solucion/). Aquí se explica cada archivo con comentarios.

## `src/closures.js` — Closures y scope

```javascript
// Cada llamada a crearCaldero() genera un nuevo "scope" privado.
// La variable "ingredientes" vive dentro de ese scope y solo es
// accesible a través de los métodos que se retornan (closure).
export function crearCaldero(nombrePocion) {
  const ingredientes = []; // variable privada: no se expone directamente

  return {
    agregarIngrediente(ingrediente) {
      ingredientes.push(ingrediente);
      console.log(`[${nombrePocion}] Se agregó: ${ingrediente}`);
    },
    verContenido() {
      // Se retorna una copia (spread) para no exponer el arreglo original
      return [...ingredientes];
    }
  };
}
```

## `src/hof.js` — Funciones de orden superior

```javascript
// filter -> map -> reduce: el trío clásico de las funciones de orden superior.
export function analizarIngredientes(ingredientes, umbralPotencia) {
  const potentes = ingredientes.filter((ing) => ing.potencia > umbralPotencia);

  const nombresEnMayuscula = potentes.map((ing) => ing.nombre.toUpperCase());

  const potenciaTotal = potentes.reduce((total, ing) => total + ing.potencia, 0);

  return { nombresEnMayuscula, potenciaTotal };
}
```

## `src/destructuring.js` — Destructuring y spread/rest

```javascript
// Destructuring: extraemos propiedades de un objeto receta en una sola línea.
export function describirReceta(receta) {
  const { nombre, ingredientePrincipal, extras } = receta;
  return `${nombre} usa ${ingredientePrincipal} y ${extras.length} extras.`;
}

// Rest (...recetas): acepta cualquier cantidad de recetas como argumentos.
// Spread ([...]): combina los arreglos "extras" sin mutar los originales.
export function combinarRecetas(...recetas) {
  return recetas.reduce((acumulado, receta) => {
    return [...acumulado, ...receta.extras];
  }, []);
}
```

## `src/ingredientes.js` — Módulo ES con datos compartidos

```javascript
// Catálogo de ingredientes disponible para toda la fábrica.
// Se exporta como dato (no como función) para ser importado donde se necesite.
export const catalogoIngredientes = [
  { nombre: "raíz lunar", potencia: 8 },
  { nombre: "polvo de estrella", potencia: 15 },
  { nombre: "escama de dragón", potencia: 20 },
  { nombre: "agua de niebla", potencia: 3 },
  { nombre: "esencia de fénix", potencia: 25 }
];
```

## `src/pociones.js` — Promesas, async/await, try/catch y Event Loop

```javascript
// Retorna una Promise que se resuelve tras "tiempoDeCoccion" ms,
// simulando un proceso lento (como una consulta a base de datos).
// setTimeout dentro de una Promise es el patrón clásico para
// simular operaciones asíncronas sin bloquear el hilo principal.
export function prepararPocion(nombre, tiempoDeCoccion) {
  return new Promise((resolve, reject) => {
    if (tiempoDeCoccion < 0) {
      // Rechazo inmediato si el tiempo no tiene sentido
      reject(new Error(`Tiempo de cocción inválido para ${nombre}`));
      return;
    }
    setTimeout(() => {
      resolve(`✨ ${nombre} está lista tras ${tiempoDeCoccion}ms`);
    }, tiempoDeCoccion);
  });
}

// Prepara varias pociones EN PARALELO usando Promise.all.
// async/await hace que el código se lea de forma secuencial,
// pero por dentro sigue siendo no bloqueante gracias al Event Loop.
export async function prepararVariasPociones(listaPociones) {
  try {
    const resultados = await Promise.all(
      listaPociones.map(({ nombre, tiempo }) => prepararPocion(nombre, tiempo))
    );
    return resultados;
  } catch (error) {
    // Si CUALQUIER poción falla, Promise.all rechaza y caemos aquí.
    console.error("⚠️ Error en la fábrica:", error.message);
    return [];
  }
}
```

## `src/index.js` — Orquestación de todos los módulos

```javascript
import { crearCaldero } from "./closures.js";
import { analizarIngredientes } from "./hof.js";
import { describirReceta, combinarRecetas } from "./destructuring.js";
import { catalogoIngredientes } from "./ingredientes.js";
import { prepararVariasPociones } from "./pociones.js";

console.log("=== 1. Closures y scope ===");
const calderoAmor = crearCaldero("Poción de amor");
calderoAmor.agregarIngrediente("pétalo de rosa");
calderoAmor.agregarIngrediente("miel de luna");
console.log("Contenido del caldero:", calderoAmor.verContenido());

console.log("\n=== 2. Funciones de orden superior ===");
const { nombresEnMayuscula, potenciaTotal } = analizarIngredientes(catalogoIngredientes, 10);
console.log("Ingredientes potentes:", nombresEnMayuscula);
console.log("Potencia total combinada:", potenciaTotal);

console.log("\n=== 3. Destructuring y spread/rest ===");
const recetaA = { nombre: "Poción de valentía", ingredientePrincipal: "escama de dragón", extras: ["sal", "canela"] };
const recetaB = { nombre: "Poción de sabiduría", ingredientePrincipal: "polvo de estrella", extras: ["miel", "menta"] };
console.log(describirReceta(recetaA));
console.log("Extras combinados:", combinarRecetas(recetaA, recetaB));
// Verificamos que los arreglos originales no se mutaron
console.log("extras de recetaA sigue intacto:", recetaA.extras);

console.log("\n=== 4. Módulos ES ===");
console.log("Todo este archivo importa funciones y datos de otros módulos ES ✔");

console.log("\n=== 5. Promesas, async/await, try/catch y Event Loop ===");

async function main() {
  console.log("Preparando pociones..."); // Este mensaje se imprime ANTES de que terminen de cocinarse

  const resultados = await prepararVariasPociones([
    { nombre: "Poción de fuego", tiempo: 600 },
    { nombre: "Poción de hielo", tiempo: 300 },
    { nombre: "Poción fallida", tiempo: -100 } // Esta provoca un error controlado
  ]);

  console.log("Resultados finales:", resultados);
  console.log("El programa siguió corriendo mientras las pociones se preparaban 🎉");
}

main();

console.log("Este mensaje aparece MIENTRAS las pociones aún se están preparando (no bloqueante)");
```

## Por qué esta solución cumple los criterios

| Criterio | Cómo se cumple |
|---|---|
| Closure privado | `ingredientes` en `closures.js` solo es accesible vía los métodos retornados |
| HOF sin bucles | `analizarIngredientes` usa solo `filter`, `map`, `reduce` |
| No mutación | `combinarRecetas` usa spread (`[...acumulado, ...receta.extras]`) en vez de `push` sobre el original |
| Módulos ES | Todos los archivos usan `import`/`export`, ninguno usa `require` |
| No bloqueante | El `console.log` final se imprime antes de que `main()` termine, demostrando el comportamiento asíncrono |
| Manejo de errores | La "Poción fallida" con tiempo negativo se captura en el `try/catch` de `prepararVariasPociones` sin detener el programa |
