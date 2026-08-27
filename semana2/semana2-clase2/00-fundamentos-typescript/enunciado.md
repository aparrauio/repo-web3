# Actividad 0 · Fundamentos de TypeScript (calentamiento)

**Duración sugerida:** 10-15 minutos, antes de entrar al Laboratorio de Intenciones Tipadas.

## Enunciado

Tienes una función en JavaScript que registra la reseña de una carta coleccionable
("carta de energía"). Recíbela ya escrita y **conviértela a TypeScript** aplicando:

1. Tipos primitivos explícitos en las variables de entrada.
2. Un `type` con una unión literal para el campo `elemento` (solo puede ser
   `"fuego" | "agua" | "aire" | "tierra"`).
3. Una `interface CartaEnergia` que describa la forma completa de una carta
   (`id`, `nombre`, `elemento`, `poder`, `esRara`).
4. La función `registrarCarta` tipada: parámetro de tipo `CartaEnergia` y retorno
   explícito `string`.
5. Al menos una función adicional donde **dejes que TypeScript infiera el tipo**
   de retorno (no lo anotes tú) y comprueba en el editor cuál fue la inferencia.

## Punto de partida (JavaScript, sin tipos)

```js
function registrarCarta(carta) {
  return `${carta.nombre} (${carta.elemento}) — poder ${carta.poder}`;
}

function esPoderosa(carta) {
  return carta.poder >= 80;
}

const cartaEjemplo = {
  id: 1,
  nombre: "Fénix Ígneo",
  elemento: "fuego",
  poder: 92,
  esRara: true,
};

console.log(registrarCarta(cartaEjemplo));
console.log(esPoderosa(cartaEjemplo));
```

## Qué debes entregar

Un archivo `src/index.ts` que compile sin errores con `npx tsc` y que, al ejecutarse
con `node dist/index.js`, imprima el mismo resultado que la versión en JavaScript.
