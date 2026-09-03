# Actividad previa · Demuestra el Event Loop en vivo

**Duración sugerida:** 5-10 minutos, antes de construir el servidor HTTP.

## Enunciado

Antes de escribir cualquier servidor, necesitas comprobar cómo Node.js decide **en qué orden**
ejecuta el código. Vas a escribir (o completar) un script corto que mezcle:

1. Código síncrono normal (`console.log`).
2. Una tarea programada con `setTimeout(..., 0)`.
3. Una promesa resuelta inmediatamente con `Promise.resolve().then(...)`.

Antes de ejecutar nada, **predice en papel** el orden en que se imprimirán los 4 mensajes.
Luego ejecuta el script y compara tu predicción contra el resultado real.

## Preguntas para responder después de ejecutar

1. ¿El orden fue el que predijiste? Si no, ¿por qué crees que te equivocaste?
2. ¿Por qué la promesa (`microtask`) se imprime antes que el `setTimeout` (`macrotask`),
   aunque ambos "esperan 0 ms"?
3. Si agregas un segundo `setTimeout(..., 0)`, ¿en qué posición se imprimirá?
4. **Conexión con el servidor HTTP:** cuando lleguen 2 peticiones casi al mismo tiempo,
   ¿qué parte de este comportamiento se repite?

## Qué debes entregar

El script ejecutado, con tu predicción escrita como comentario al inicio del archivo y las
4 respuestas del punto anterior en un comentario al final.
