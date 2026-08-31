# Pista — Laboratorio de Intenciones Tipadas

## Orden recomendado para migrar

1. **Tipa primero los datos, no las funciones.** Abre `src/tipos.ts` y completa:
   - La unión literal `Mood` le falta un valor que sí se usa en los datos
     (revisa `src/criaturas.ts` para encontrar cuál).
   - La interface `Criatura` le falta declarar un campo que las funciones ya usan
     (compara contra los objetos reales en `criaturas.ts`).
2. **Luego tipa los datos que usan esos tipos.** En `src/criaturas.ts`, anota el arreglo de
   criaturas con el tipo `Criatura[]`.
3. **Por último tipa las funciones.** En `src/oraculo.ts` hay una función que TypeScript
   marca con `error TS7006: Parameter 'x' implicitly has an 'any' type.` — agrégale el tipo
   de parámetro y, si quieres practicar la inferencia, deja el retorno sin anotar.

## Errores esperados si no cambias nada

Si ejecutas `npm run build` en `reto-typescript-incompleto/` tal como está, deberías ver
aproximadamente estos errores (los mensajes exactos pueden variar un poco según la versión
de TypeScript):

```
src/criaturas.ts:6:3 - error TS2322: Type '"serena"' is not assignable to type 'Mood'.

src/oraculo.ts:19:33 - error TS7006: Parameter 'lista' implicitly has an 'any' type.
src/oraculo.ts:19:40 - error TS7006: Parameter 'mood' implicitly has an 'any' type.

src/oraculo.ts:44:19 - error TS2339: Property 'rareza' does not exist on type 'Criatura'.
```

No memorices estos mensajes — **léelos como pistas**: cada uno te dice exactamente en qué
archivo, línea y por qué está fallando la migración.

## Pista sobre promesas y async/await

La función `cargarCriatura` ya usa `async/await` en JavaScript. Al tiparla en TypeScript,
el retorno de una función `async` siempre se envuelve en `Promise<...>`. Por ejemplo, si la
función devuelve una `Criatura`, su tipo de retorno es `Promise<Criatura>`.
