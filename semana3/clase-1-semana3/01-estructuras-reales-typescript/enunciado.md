# Parte 1 · Estructuras reales de aplicación (reto principal)

## Enunciado

Usando el mismo dataset de personajes (ya con `Elemento`, `EstadisticaCombate` y `Personaje`
completos desde la Parte 0), implementa:

### 1. Genéricos
`buscarPorId<T extends { id: number | string }>` que funcione para **cualquier** arreglo
cuyos elementos tengan un campo `id` — no solo `Personaje[]`.

### 2. Tipos utilitarios
- `Partial<Personaje>` → `ActualizacionPersonaje`, con `actualizarPersonaje`.
- `Pick<Personaje, "nombre" | "elemento" | "arma">` → `ResumenPersonaje`, con `resumirPersonaje`.
- `Omit<Personaje, "id">` → `NuevoPersonaje`, con `crearPersonaje`.

### 3. Unión discriminada
`type EventoCombate` con 3 variantes (`"ataque"`, `"defensa"`, `"especial"`), cada una con su
propio campo. `resolverEvento(evento: EventoCombate): string` usa el campo discriminante
(`tipo`) para devolver un mensaje distinto por variante.

### 4. Enum
`enum Faccion` con al menos 4 facciones reales del dataset, recorrido con
`Object.values(Faccion)` — algo que una unión literal no puede hacer en tiempo de ejecución.

### 5. Objetos anidados
`personajeMasFuerte(lista: Personaje[]): Personaje` que compare `estadisticas.nivelPoder`
(campo anidado) entre todos los personajes y devuelva el más fuerte.

## Qué debes entregar

Los 5 puntos implementados en `src/utilidades.ts` y `src/eventos.ts` (sin usar `any`),
compilando sin errores con `npm run build` y ejecutando correctamente con `npm run dev`.
