# Pista — Estructuras reales de aplicación

## Orden recomendado

1. **Genéricos primero:**
   ```ts
   function buscarPorId<T extends { id: number | string }>(lista: T[], id: number | string): T | undefined {
     return lista.find((item) => item.id === id);
   }
   ```

2. **Tipos utilitarios** — se derivan de `Personaje`, no los reescribas a mano:
   ```ts
   type ActualizacionPersonaje = Partial<Personaje>;
   type ResumenPersonaje = Pick<Personaje, "nombre" | "elemento" | "arma">;
   type NuevoPersonaje = Omit<Personaje, "id">;
   ```
   `actualizarPersonaje` usa el spread: `{ ...personaje, ...cambios }`.

3. **Unión discriminada** — cada variante comparte el campo `tipo`:
   ```ts
   type EventoCombate =
     | { tipo: "ataque"; danio: number }
     | { tipo: "defensa"; bloqueo: number }
     | { tipo: "especial"; nombreMovimiento: string };
   ```
   Usa `switch (evento.tipo)`: TypeScript angosta el tipo dentro de cada `case`.

4. **Enum** — usa valores de cadena para que sean legibles:
   ```ts
   enum Faccion { ShiraiRyu = "Shirai Ryu", LinKuei = "Lin Kuei", Outworld = "Outworld", Edenia = "Edenia" }
   ```
   `Object.values(Faccion)` da el arreglo en tiempo de ejecución.

5. **Objetos anidados** — recuerda el nivel extra: `personaje.estadisticas.nivelPoder`.

## Errores comunes a evitar

- Olvidar `extends { id: number | string }` en el genérico.
- Escribir `Pick<Personaje, "nombre", "elemento">` (comas) en vez de
  `Pick<Personaje, "nombre" | "elemento">` (unión `|`).
- Comparar `evento.tipo` fuera de una rama condicional — la angostura solo aplica adentro.
