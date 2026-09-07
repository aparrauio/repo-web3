/**
 * orden-ejecucion.ts — SOLUCIÓN
 * --------------------------------
 * Demuestra el orden real de ejecución en Node.js entre código síncrono,
 * microtasks (promesas) y macrotasks (setTimeout).
 *
 * MI PREDICCIÓN (completa esto ANTES de ejecutar):
 *   Orden esperado: 1, 2, 3, 4  ← escribe aquí tu propia predicción
 */

// 1) Código síncrono: se ejecuta de inmediato, en el orden en que aparece.
console.log("1: inicio del script");

// 2) Macrotask: `setTimeout` registra el callback, pero Node sigue
//    ejecutando el resto del script ANTES de volver a esto, incluso con 0 ms.
setTimeout(() => {
  console.log("4: timeout (macrotask)");
}, 0);

// 3) Microtask: las promesas resueltas se procesan apenas el código síncrono
//    actual termina — antes que cualquier macrotask, sin importar el orden
//    en que se registraron.
Promise.resolve().then(() => {
  console.log("3: promesa (microtask)");
});

// 4) Código síncrono: se sigue ejecutando de inmediato.
console.log("2: fin del script");

/**
 * RESPUESTAS (completa después de ejecutar):
 *
 * 1) ¿El orden fue el que predijiste?
 *    ...
 *
 * 2) ¿Por qué la promesa se imprime antes que el setTimeout?
 *    Porque Node vacía la cola de microtasks completa antes de procesar
 *    la siguiente macrotask, sin importar que ambas "esperen 0 ms".
 *
 * 3) ¿Dónde se imprimiría un segundo setTimeout(..., 0)?
 *    Después del primer timeout, porque las macrotasks del mismo tipo se
 *    procesan en orden de llegada (FIFO) una vez que llega su turno.
 *
 * 4) Conexión con el servidor HTTP:
 *    Cada petición entrante dispara un callback registrado, igual que el
 *    setTimeout. Si dos peticiones llegan casi simultáneas, Node las
 *    encola y las atiende en orden, sin bloquear el hilo esperando a que
 *    la primera "termine" antes de aceptar la segunda.
 */
