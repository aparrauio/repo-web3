# Pista — Demuestra el Event Loop en vivo

## El orden de las "colas" en Node.js

Node.js no ejecuta las cosas en el orden en que aparecen escritas cuando hay operaciones
asíncronas de por medio. El orden real sigue esta prioridad:

1. **Código síncrono** — se ejecuta de inmediato, de arriba hacia abajo.
2. **Microtasks** (promesas, `queueMicrotask`) — se procesan apenas termina el código
   síncrono, ANTES de cualquier macrotask.
3. **Macrotasks** (`setTimeout`, `setInterval`, eventos de I/O) — se procesan después de
   que la cola de microtasks queda vacía.

## Cómo armar el script

```ts
console.log("1: inicio del script");        // síncrono → se imprime primero

setTimeout(() => {
  console.log("4: timeout (macrotask)");     // macrotask → se imprime al final
}, 0);

Promise.resolve().then(() => {
  console.log("3: promesa (microtask)");     // microtask → se imprime antes del timeout
});

console.log("2: fin del script");            // síncrono → se imprime segundo
```

## Por qué el orden es 1, 2, 3, 4 (y no 1, 2, 4, 3)

- Las líneas 1 y 2 son código síncrono: se ejecutan inmediatamente, en el orden escrito.
- `setTimeout` y la promesa se "registran" pero no se ejecutan todavía — Node sigue
  corriendo el resto del script primero.
- Cuando el script síncrono termina, Node revisa primero la cola de **microtasks** (la
  promesa) antes de tocar la cola de **macrotasks** (el timeout), sin importar cuál se
  registró primero.

## Para la pregunta de conexión con el servidor HTTP

Cada petición HTTP que llega es, en el fondo, un evento que dispara un callback — igual que
el `setTimeout` de este ejercicio. Si dos peticiones llegan casi al mismo tiempo, Node las
atiende una tras otra en el orden en que sus eventos entran a la cola, sin bloquear el hilo
principal esperando a que la primera "termine" por completo.
