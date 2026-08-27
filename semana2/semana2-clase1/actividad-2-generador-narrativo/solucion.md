# Solución completa comentada — Generador narrativo no bloqueante

> El código completo también está disponible y listo para ejecutar en la carpeta [`solucion/`](./solucion/).

## `src/escenas.js` — Datos y función de carga

```javascript
// Arreglo de escenas de ejemplo. Cada una tiene un tiempo de carga simulado (delay).
export const escenas = [
  { id: 1, titulo: "Bosque azul", emocion: "misterio", delay: 400 },
  { id: 2, titulo: "Puerta que canta", emocion: "curiosidad", delay: 250 },
  { id: 3, titulo: "Río de cristal", emocion: "calma", delay: 500 }
];

// cargarEscena retorna una Promise que se resuelve tras "delay" ms,
// simulando una consulta futura a backend o base de datos.
export function cargarEscena({ id, titulo, emocion, delay }) {
  return new Promise((resolve, reject) => {
    if (!titulo || !emocion) {
      // Si falta un campo obligatorio, rechazamos con un error descriptivo.
      reject(new Error(`Escena ${id} está incompleta`));
      return;
    }
    setTimeout(() => {
      resolve(`Escena ${id}: ${titulo} genera ${emocion}`);
    }, delay);
  });
}
```

## `src/index.js` — Orquestación con async/await y try/catch

```javascript
import { escenas, cargarEscena } from "./escenas.js";

// reproducirHistoria carga TODAS las escenas en paralelo con Promise.all.
// Si alguna escena falla (por datos incompletos), el catch la captura
// sin detener el programa completo.
async function reproducirHistoria(lista) {
  try {
    const textos = await Promise.all(lista.map(cargarEscena));
    textos.forEach((texto) => console.log(texto));
  } catch (error) {
    console.error("Historia incompleta:", error.message);
  }
}

console.log("Inicio no bloqueante");
reproducirHistoria(escenas); // Nótese: no hay "await" aquí a propósito
console.log("Este mensaje aparece antes de que terminen las escenas");
```

## Por qué esta solución cumple los criterios

| Criterio | Cómo se cumple |
|---|---|
| Promise con setTimeout | `cargarEscena` usa `setTimeout` dentro de una `Promise` para simular el tiempo de carga |
| Carga en paralelo | `Promise.all(lista.map(cargarEscena))` procesa todas las escenas a la vez, no una por una |
| async/await + try/catch | `reproducirHistoria` es `async` y envuelve la espera en un bloque `try/catch` |
| No bloqueante | El `console.log` final se ejecuta antes de que las escenas terminen de "cargar", porque `reproducirHistoria` no se espera con `await` en el nivel superior |
| Manejo de errores | Si una escena no tiene `titulo` o `emocion`, `cargarEscena` rechaza la promesa y el error se captura en el `catch`, sin detener el programa |
