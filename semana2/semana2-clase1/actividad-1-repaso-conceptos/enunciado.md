# Actividad 1 (previa) — "La fábrica de pociones mágicas"

## Contexto

Antes de enfrentar el reto integrador de la clase (el generador narrativo no bloqueante), necesitas calentar motores repasando, uno por uno, los conceptos de JavaScript avanzado que vas a necesitar. Esta actividad los implementa todos dentro de una sola temática creativa: una fábrica que prepara pociones mágicas por encargo.

## Enunciado del reto

Vas a construir, paso a paso, un pequeño sistema de "fábrica de pociones" en JavaScript puro (sin frameworks), donde cada archivo del proyecto demuestra un concepto específico:

### Parte 1 — Closures y scope (`closures.js`)
Crea una función `crearCaldero(nombrePocion)` que retorne un objeto con métodos `agregarIngrediente(ingrediente)` y `verContenido()`. El caldero debe "recordar" su lista de ingredientes internamente (una variable privada), sin exponerla directamente. Cada caldero creado debe mantener su propio estado, independiente de los demás.

### Parte 2 — Funciones de orden superior (`hof.js`)
Dado un arreglo de ingredientes con su `nombre` y `potencia` (número), usa `filter`, `map` y `reduce` para: filtrar solo los ingredientes con potencia mayor a un umbral, transformar esa lista a solo sus nombres en mayúsculas, y calcular la potencia total combinada.

### Parte 3 — Destructuring y spread/rest (`destructuring.js`)
Recibe un objeto `receta` con `nombre`, `ingredientePrincipal` y una lista `extras`. Usa destructuring para extraer esas propiedades en una sola línea. Luego escribe una función `combinarRecetas(...recetas)` que use rest para aceptar cualquier cantidad de recetas y devuelva un nuevo arreglo combinado de todos sus `extras`, usando spread para no mutar los arreglos originales.

### Parte 4 — Módulos ES (`ingredientes.js` + el resto de archivos)
Todo el proyecto debe estar organizado en módulos ES: cada archivo exporta (`export`) sus funciones/datos, y `index.js` los importa (`import`) para orquestar la ejecución. El archivo `ingredientes.js` exporta el catálogo de ingredientes disponibles como datos compartidos entre módulos.

### Parte 5 — Promesas, async/await, try/catch y Event Loop (`pociones.js`)
Crea una función `prepararPocion(nombre, tiempoDeCoccion)` que retorne una `Promise` que se resuelve tras `tiempoDeCoccion` milisegundos (usando `setTimeout` dentro de la promesa), simulando el tiempo de cocción. Si `tiempoDeCoccion` es negativo, la promesa debe rechazarse con un error. Luego, en `index.js`, usa `async/await` con `try/catch` para preparar **varias pociones en paralelo** con `Promise.all`, capturando el error si alguna falla, y demuestra con un `console.log` antes y después de la llamada asíncrona que el programa **no se bloquea** mientras las pociones se preparan.

## Criterios de aceptación

- Cada archivo implementa su concepto de forma aislada y ejecutable de forma independiente si se desea, pero todo se integra desde `index.js`.
- El closure de `crearCaldero` no permite acceder a la lista de ingredientes directamente desde fuera del objeto retornado.
- Las funciones de orden superior no usan bucles `for`/`while` para lograr su resultado.
- `combinarRecetas` no muta los arreglos `extras` originales.
- Todos los archivos usan `import`/`export` (módulos ES), no `require`/`module.exports`.
- Al ejecutar el programa, se ve en consola un mensaje que prueba que el flujo principal continuó **antes** de que todas las pociones terminaran de prepararse.
- Si una poción tiene tiempo de cocción negativo, el error se captura con `try/catch` y el programa no se detiene abruptamente.

## Entregable

Un commit en tu repositorio del semestre con el código de esta actividad, mensaje de commit claro (ej. `feat: repaso de conceptos JS avanzado - fabrica de pociones`), antes de continuar con la Actividad 2.
