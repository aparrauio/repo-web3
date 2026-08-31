# Pista

Usa `setTimeout` dentro de una `Promise`. `Promise.all` permite cargar varias escenas sin bloquear el flujo principal.

Pasos sugeridos:

1. Define un arreglo de objetos "escena", cada uno con al menos `id`, `titulo`, `emocion` y `delay` (tiempo simulado de carga en milisegundos).
2. Escribe una función `cargarEscena(escena)` que retorne una `Promise`. Dentro, usa `setTimeout` para simular el tiempo de carga y `resolve` con un texto describiendo la escena. Si a la escena le falta un campo obligatorio (por ejemplo `titulo`), usa `reject` con un error descriptivo.
3. Escribe una función `async reproducirHistoria(lista)` que use `await Promise.all(lista.map(cargarEscena))` dentro de un bloque `try/catch`.
4. Después de llamar a `reproducirHistoria(escenas)` (sin `await` en el nivel superior), imprime un mensaje adicional con `console.log`. Ese mensaje debería aparecer en consola **antes** de que termine de imprimirse el resultado de las escenas, demostrando que el flujo principal no se bloqueó.
