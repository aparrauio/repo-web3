# Prompts de apoyo con IA — Semana 3 · Clase 1

Estos prompts guían tu razonamiento; no piden a la IA que resuelva el reto por ti.

## Para entender un tipo utilitario antes de usarlo

> "Quiero usar `[Partial/Pick/Omit]<MiTipo, ...>` en TypeScript. Aquí está mi interface:
> `[pega tu interface]`. Explícame qué forma final tendría el tipo resultante, sin escribirme
> el código completo."

## Para diseñar una unión discriminada propia

> "Quiero modelar `[eventos/acciones/estados]` de mi proyecto como unión discriminada.
> Estas son mis variantes con sus campos: `[descríbelas]`. Revisa si uso un campo
> discriminante consistente en todas, sin darme la solución completa."

## Para decidir entre enum y unión literal

> "Tengo este conjunto de valores fijos: `[lista tus valores]`. Dame los criterios para
> decidir entre enum y unión literal (¿necesito iterarlos en tiempo de ejecución?), no la
> respuesta directa."

## Para practicar un genérico

> "Tengo esta función que solo funciona con `[tu tipo]`: `[pega tu función]`. Ayúdame a
> razonar qué necesitaría cambiar para volverla genérica, explicándome antes de dar el código."

## Para verificar tu checklist del Proyecto 1

> "Aquí está mi `tipos.ts`: `[pega tu código]`. Sin corregirlo, dime cuántos tipos
> personalizados y uniones literales identificas, y si cumplo el mínimo exigido."

## Regla general

Pide siempre el **por qué** antes del **cómo**. Si la respuesta da código completo sin que
hayas razonado el problema, pide que te lo explique paso a paso.
