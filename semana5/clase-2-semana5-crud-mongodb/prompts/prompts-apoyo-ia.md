# Prompts de apoyo con IA — Semana 5 · Clase 2

## Para elegir entre updateOne y updateMany

> "Quiero modificar documentos en MongoDB que cumplen [describe tu filtro]. Antes de darme
> el código, pregúntame si espero que el filtro identifique a UN solo documento o a VARIOS."

## Para diseñar el documento de un escenario nuevo

> "Tengo este escenario: [descríbelo]. Ayúdame a identificar qué campos necesita el documento,
> cuáles deberían ser uniones literales y cuáles arreglos, antes de escribirme la interface."

## Para elegir el operador de comparación correcto

> "Quiero filtrar documentos donde un campo numérico sea 'como mucho X' o 'al menos X'.
> Explícame $lte, $gte, $lt y $gt con un ejemplo de cada uno, antes de darme la consulta."

## Para depurar un deleteMany que borró más de lo esperado

> "Ejecuté deleteMany con este filtro: [pégalo] y se borraron más documentos de los
> esperados. Antes de corregirlo, pregúntame qué documentos existían antes de correr el
> comando."

## Regla general

Pide siempre el por qué antes del cómo. Si la respuesta da código completo sin que hayas
razonado el problema, pide que te lo explique paso a paso.
