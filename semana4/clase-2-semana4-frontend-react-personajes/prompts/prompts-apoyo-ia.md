# Prompts de apoyo con IA — Semana 4 · Clase 2

Estos prompts guían tu razonamiento sobre componentes, props y la integración de un
framework de estilos; no piden a la IA que resuelva el reto por ti.

## Para decidir qué va en un componente de UI vs. de negocio

> "Tengo este componente: `[pega tu código]`. Ayúdame a identificar qué partes son puramente
> visuales (clases de Bootstrap, estructura de HTML) y cuáles son lógica de negocio (props,
> datos del personaje), sin reescribirme el componente todavía."

## Para diseñar las props de un componente reutilizable

> "Quiero que este formulario sirva tanto para crear como para editar un personaje. Ayúdame a
> pensar qué props necesitaría recibir para soportar ambos casos, antes de escribir el
> código."

## Para depurar por qué un formulario no se actualiza

> "Mi formulario no se precarga con los datos del personaje cuando hago clic en 'Editar'.
> Aquí está mi componente: `[pégalo]`. Antes de corregirlo, pregúntame si estoy usando
> `useEffect` con las dependencias correctas."

## Para razonar sobre el aislamiento de un framework de CSS

> "Quiero poder migrar de Bootstrap a Tailwind más adelante sin reescribir toda mi app.
> Tengo estos componentes: `[lista tus componentes]`. Ayúdame a identificar cuáles deberían
> conocer las clases de CSS y cuáles no, antes de mostrarme cómo reorganizarlos."

## Para practicar el manejo de errores en el frontend

> "Mi llamada a la API puede fallar (404, 400, error de red). Aquí está mi función:
> `[pégala]`. Ayúdame a pensar qué debería mostrarle al usuario en cada caso, antes de
> escribir el manejo de errores."

## Regla general

Pide siempre el **por qué** antes del **cómo**. Si la respuesta da código completo sin que
hayas razonado el problema, pide que te lo explique paso a paso.
