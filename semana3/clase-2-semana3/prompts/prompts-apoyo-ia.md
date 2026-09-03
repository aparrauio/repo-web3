# Prompts de apoyo con IA — Semana 3 · Clase 2

Estos prompts guían tu razonamiento sobre Node.js y el Event Loop; no piden a la IA que
resuelva el reto por ti.

## Para entender el orden de ejecución

> "Tengo este código con console.log, setTimeout y una promesa: `[pega tu código]`. Antes de
> decirme el resultado, explícame qué tipo de tarea es cada línea (síncrona, microtask o
> macrotask) para que yo mismo prediga el orden."

## Para razonar sobre bloquear vs. no bloquear

> "Tengo esta función que hace `[describe la operación: leer un archivo, un cálculo pesado,
> etc.]`. Ayúdame a entender si es bloqueante o no, y qué pasaría con otras peticiones al
> servidor si esta tarda 3 segundos — sin darme el código corregido todavía."

## Para diseñar las rutas de tu propio servidor

> "Quiero crear un servidor HTTP con Node puro para `[tu idea creativa]`, con estas rutas:
> `[descríbelas]`. Ayúdame a pensar qué debería devolver cada una y en qué casos debería
> responder un error, antes de escribir el código."

## Para depurar un servidor que no responde

> "Mi servidor con `http.createServer` no responde en el navegador / con curl. Aquí está mi
> código: `[pégalo]`. Sin corregirlo directamente, pregúntame qué he verificado ya (¿llamé a
> `res.end()`? ¿el puerto coincide? ¿el servidor sigue corriendo?)."

## Para practicar el registro de peticiones

> "Quiero registrar cada petición que llega a mi servidor con información útil (no solo la
> ruta). Dame 3-4 ideas de qué información sería valiosa registrar en un log real, antes de
> mostrarme el código."

## Regla general

Pide siempre el **por qué** antes del **cómo**. Si la respuesta da código completo sin que
hayas razonado el problema, pide que te lo explique paso a paso.
