# Pista — Fundamentos de TypeScript

- Empieza por la **forma del dato**, no por las funciones: define primero
  `type Elemento = "fuego" | "agua" | "aire" | "tierra";` y luego la
  `interface CartaEnergia`.
- Una interface se escribe así:

  ```ts
  interface CartaEnergia {
    id: number;
    nombre: string;
    elemento: Elemento;
    poder: number;
    esRara: boolean;
  }
  ```

- Para tipar una función con un objeto como parámetro, usa la interface como tipo:

  ```ts
  function registrarCarta(carta: CartaEnergia): string {
    return `${carta.nombre} (${carta.elemento}) — poder ${carta.poder}`;
  }
  ```

- Para comprobar la inferencia, escribe la función sin anotar el retorno y pasa el
  mouse sobre el nombre de la función en tu editor (VS Code te mostrará el tipo
  inferido, por ejemplo `(carta: CartaEnergia) => boolean`).
- Si `elemento` recibe un valor que no está en la unión (por ejemplo `"metal"`),
  TypeScript debe marcar error. Pruébalo a propósito para confirmar que la unión
  funciona.
