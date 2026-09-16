# Pista — De Supabase a MongoDB Atlas (usuarios y hobbies)

## Por qué esta relación se embebe (y no se referencia)

Antes de escribir código, responde:

> ¿Los hobbies se leen SIEMPRE junto con el usuario? ¿Tiene sentido un hobby "suelto", sin su
> usuario? ¿La lista de hobbies de una persona es corta y acotada?

Las tres respuestas apuntan a **embeber** un arreglo — no a crear una colección separada de
"hobbies" con referencias.

## Cómo agrupar filas de `hobbies` en un arreglo por usuario

Esto es distinto a una transformación 1-a-1: tienes que **agrupar** varias filas relacionadas
en un solo arreglo, usando `user_id` como clave:

```ts
function agruparHobbiesPorUsuario(
  filasHobbies: FilaHobbyRelacional[]
): Map<number, string[]> {
  const hobbiesPorUsuario = new Map<number, string[]>();

  for (const fila of filasHobbies) {
    const listaActual = hobbiesPorUsuario.get(fila.userId) ?? [];
    listaActual.push(fila.hobby);
    hobbiesPorUsuario.set(fila.userId, listaActual);
  }

  return hobbiesPorUsuario;
}
```

Luego, para cada usuario, combinas sus datos propios con el arreglo que le corresponde:

```ts
function transformarUsuario(
  fila: FilaUsuarioRelacional,
  hobbiesPorUsuario: Map<number, string[]>
): DocumentoUsuario {
  return {
    firstName: fila.firstName,
    lastName: fila.lastName,
    cell: fila.cell,
    city: fila.city,
    hobbies: hobbiesPorUsuario.get(fila.id) ?? [],
  };
}
```

## Cómo agregar o quitar un hobby en MongoDB

MongoDB tiene operadores específicos para arreglos — no necesitas leer el documento completo,
modificarlo en memoria y volver a guardarlo:

```ts
// Agregar un hobby nuevo al arreglo:
await coleccion.updateOne(
  { firstName: "Leslie" },
  { $push: { hobbies: "pottery" } }
);

// Quitar un hobby del arreglo:
await coleccion.updateOne(
  { firstName: "Leslie" },
  { $pull: { hobbies: "working" } }
);
```

## Cómo filtrar por un valor dentro del arreglo

```ts
// Todos los usuarios que tengan "working" entre sus hobbies:
await coleccion.find({ hobbies: "working" }).toArray();
```

MongoDB entiende automáticamente que, si el campo es un arreglo, este filtro busca "algún
elemento que coincida" — no necesitas un operador especial para este caso simple.

## Cómo configurar MongoDB Atlas (resumen)

1. Crea una cuenta gratuita en [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Crea un clúster **M0 (gratuito)**.
3. En "Database Access", crea un usuario con contraseña.
4. En "Network Access", agrega tu IP (o `0.0.0.0/0` solo para desarrollo).
5. Copia el "Connection String" — esa es tu `MONGODB_URI`.
6. Pega esa URI en MongoDB Compass para conectarte visualmente, y en tu `.env` para conectarte
   desde código.
