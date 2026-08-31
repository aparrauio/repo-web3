# Actividad 2 — Generador narrativo no bloqueante

> Realizalo después de completar la Actividad 1 (repaso de conceptos).

## Enunciado

Crea un generador narrativo no bloqueante. Recibe escenas con tiempos de carga simulados, procésalas con promesas y `async/await`, y captura errores si una escena está incompleta.

## Pista

Usa `setTimeout` dentro de una `Promise`. `Promise.all` permite cargar varias escenas sin bloquear el flujo principal.

## Temática libre

Puedes ambientar tu generador narrativo con cualquier temática: un mini-juego textual, un catálogo visual, o cualquier herramienta creativa que te interese. La estructura del código (promesas, `async/await`, manejo de errores) es lo que se evalúa, no el tema elegido.

## Criterios de aceptación

- Existe una función que retorna una `Promise` simulando la carga de una escena con un tiempo de espera (`setTimeout`).
- Se usa `Promise.all` para cargar varias escenas en paralelo.
- Se usa `async/await` junto con `try/catch` para manejar el flujo y capturar errores si una escena está incompleta (por ejemplo, si falta un campo requerido).
- Se demuestra con `console.log` que el programa no se bloquea mientras las escenas cargan (un mensaje posterior a la llamada async se imprime antes de que termine la carga).

## Entregable

Un commit adicional en tu repositorio del semestre con el código de esta actividad, después del commit de la Actividad 1.
