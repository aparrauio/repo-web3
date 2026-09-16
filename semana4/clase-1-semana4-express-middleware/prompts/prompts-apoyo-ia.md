# Prompts de apoyo con IA — Semana 4 · Clase 1

Estos prompts guían tu razonamiento sobre Express y middleware; no piden a la IA que
resuelva el reto por ti.

## Para entender el orden de los middlewares

> "Tengo estos `app.use(...)` en este orden: `[pega tu lista]`. Antes de decirme si está
> bien, pregúntame qué necesita cada middleware de los anteriores (por ejemplo, ¿alguno lee
> `req.body` o `req.id`?) para que yo mismo detecte si el orden es correcto."

## Para diseñar la separación en capas

> "Tengo esta función que mezcla lógica de negocio con `req`/`res`: `[pega tu código]`.
> Ayúdame a identificar qué parte pertenece a un servicio y qué parte pertenece a un
> controlador, sin reescribirme el código completo todavía."

## Para razonar sobre el manejo de errores

> "Quiero que mi API responda errores de forma consistente. Aquí está mi middleware de
> errores: `[pégalo]`. Pregúntame primero cómo distingo un error esperado (404, 400) de uno
> inesperado (500), antes de sugerirme cambios."

## Para depurar una petición que no responde

> "Mi petición POST se queda cargando sin respuesta. Aquí está mi cadena de middlewares:
> `[pégala]`. Antes de darme la solución, pregúntame si cada middleware llama a `next()` en
> todos sus casos posibles."

## Para practicar el diseño de rutas CRUD

> "Quiero diseñar las rutas CRUD para `[tu recurso]`. Ayúdame a pensar qué debería devolver
> cada verbo HTTP (GET, POST, PUT, DELETE) y qué status code corresponde a cada caso de
> éxito y de error, antes de escribir las rutas."

## Regla general

Pide siempre el **por qué** antes del **cómo**. Si la respuesta da código completo sin que
hayas razonado el problema, pide que te lo explique paso a paso.
