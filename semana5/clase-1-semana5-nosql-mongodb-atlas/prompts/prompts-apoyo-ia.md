# Prompts de apoyo con IA — Semana 5 · Clase 1

Estos prompts guían tu razonamiento sobre modelado de datos relacional vs. documental; no
piden a la IA que resuelva el reto por ti.

## Para decidir si embeber un arreglo o crear una colección separada

> "Tengo una relación 1-a-muchos entre `[tabla principal]` y `[tabla relacionada]`. La tabla
> relacionada tiene estas columnas: `[descríbelas]`. Ayúdame a pensar si en MongoDB esto
> debería ser un arreglo embebido o una colección separada, dándome los criterios antes de la
> respuesta final."

## Para razonar sobre agrupar filas en un arreglo

> "Tengo varias filas donde cada una representa un solo elemento de una lista que pertenece a
> un mismo registro (por ejemplo, hobbies de una persona). Ayúdame a pensar en pseudocódigo
> cómo agruparía estas filas por su identificador común, antes de escribir la función real."

## Para practicar $push y $pull

> "Quiero agregar y quitar elementos de un arreglo embebido en MongoDB sin reescribir el
> documento completo. Explícame la diferencia entre $push, $pull y $addToSet, y en qué caso
> usaría cada uno, antes de darme el código."

## Para depurar un filtro que no encuentra nada

> "Mi consulta `{ hobbies: 'Working' }` no encuentra ningún documento, aunque sé que existe un
> usuario con el hobby 'working' en su arreglo. Antes de corregirlo, pregúntame si estoy
> revisando mayúsculas/minúsculas o espacios extra."

## Para comparar el costo de cada modelo

> "Quiero entender qué gano y qué pierdo al embeber un arreglo en vez de usar una tabla
> relacionada. Ayúdame a pensar en un escenario donde esa lista creciera mucho (miles de
> elementos) — ¿seguiría siendo buena idea embeberla?"

## Regla general

Pide siempre el **por qué** antes del **cómo**. Si la respuesta da código completo sin que
hayas razonado el problema, pide que te lo explique paso a paso.
