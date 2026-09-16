# Comparación: modelo relacional (Supabase) vs. modelo documental (MongoDB)

Este documento explica, paso a paso, el ejemplo clásico de modelado de datos de MongoDB
([Data Modeling in MongoDB](https://www.mongodb.com/docs/manual/data-modeling/)): una tabla de
usuarios y una tabla de hobbies relacionadas 1-a-muchos, y cómo esa relación se transforma en
un documento con un arreglo embebido.

## El principio rector

> "Los datos que se consultan juntos, deberían almacenarse juntos."
> — MongoDB, *Data Modeling in MongoDB*

En un modelo relacional normalizado, cada hobby es una **fila independiente** en su propia
tabla, conectada al usuario por `user_id`. En MongoDB, si los hobbies siempre se leen y se
muestran junto al usuario (y nunca se consultan por separado, con su propio dueño complejo),
tiene sentido guardarlos **dentro** del documento del usuario, como un arreglo.

## Paso 1 — El esquema relacional de partida (Supabase/Postgres)

**Tabla `users`**

| ID | first_name | last_name | cell | city |
|---|---|---|---|---|
| 1 | Leslie | Yepp | 8125552344 | Pawnee |

**Tabla `hobbies`**

| ID | user_id | hobby |
|---|---|---|
| 10 | 1 | scrapbooking |
| 11 | 1 | eating waffles |
| 12 | 1 | working |

```
users                      hobbies
┌────────────┐             ┌────────────┐
│ id (PK)    │◄────────────┤ user_id(FK)│
│ first_name │             │ id (PK)    │
│ last_name  │             │ hobby      │
│ cell       │             └────────────┘
│ city       │
└────────────┘
```

## Paso 2 — El problema del JOIN repetido

Para leer a Leslie con todos sus hobbies en el modelo relacional:

```sql
select u.first_name, u.last_name, u.cell, u.city, h.hobby
from users u
join hobbies h on h.user_id = u.id
where u.id = 1;
```

El resultado son **3 filas**, repitiendo los datos de Leslie en cada una:

```
first_name | last_name | cell       | city   | hobby
-----------+-----------+------------+--------+----------------
Leslie     | Yepp      | 8125552344 | Pawnee | scrapbooking
Leslie     | Yepp      | 8125552344 | Pawnee | eating waffles
Leslie     | Yepp      | 8125552344 | Pawnee | working
```

Tu aplicación tendría que "desarmar" este resultado en código para reconstruir UN objeto
`Leslie` con un arreglo de 3 hobbies. MongoDB te ahorra ese paso guardando el arreglo
directamente en el documento.

## Paso 3 — El criterio de decisión: ¿embeber o referenciar?

| Pregunta | Respuesta para "hobbies" | Decisión |
|---|---|---|
| ¿Se leen siempre junto con el usuario? | Sí, siempre se muestran en su perfil | Favorece **embeber** |
| ¿Un hobby tiene sentido sin su usuario (dueño, fecha propia, se comparte)? | No, es solo una palabra que describe al usuario | Favorece **embeber** |
| ¿La lista puede crecer sin límite (miles de hobbies por persona)? | No, es una lista corta y acotada | Favorece **embeber** |

Como las 3 respuestas apuntan al mismo lado, **embeber un arreglo es la decisión correcta**
para esta relación. (Si en cambio los "hobbies" fueran algo como "publicaciones de blog" —que
pueden crecer sin límite y consultarse de forma independiente— la decisión habría sido
referenciar, como viste con la relación de combates en el ejercicio anterior de personajes.)

## Paso 4 — El documento resultante en MongoDB

```json
{
  "_id": "ObjectId(...)",
  "firstName": "Leslie",
  "lastName": "Yepp",
  "cell": "8125552344",
  "city": "Pawnee",
  "hobbies": ["scrapbooking", "eating waffles", "working"]
}
```

Todo el usuario —incluidos sus 3 hobbies— vive en **un solo documento autocontenido**. Leerlo
completo es un solo `findOne({ firstName: "Leslie" })`, sin JOIN y sin filas repetidas.

## Paso 5 — Cómo se transforma el dato (la lógica del ejercicio)

La transformación de relacional a documental para este caso no es 1-a-1 por fila: es una
**agrupación**. Tienes que:

1. Recorrer todas las filas de `hobbies`.
2. Agruparlas por `user_id`.
3. Para cada usuario, construir el documento con su información de `users` + el arreglo de
   hobbies agrupado.

```ts
function agruparHobbiesPorUsuario(filas: FilaHobbyRelacional[]): Map<number, string[]> {
  const mapa = new Map<number, string[]>();
  for (const fila of filas) {
    const listaActual = mapa.get(fila.userId) ?? [];
    listaActual.push(fila.hobby);
    mapa.set(fila.userId, listaActual);
  }
  return mapa;
}
```

## Resumen: la regla de decisión

- **¿El dato es una lista corta, propia de un solo documento, y se lee siempre junto con él?**
  → Embébelo como arreglo (como `hobbies` dentro de `users`).
- **¿El dato puede crecer sin límite, tiene entidad propia, o se consulta de forma
  independiente?** → Referéncialo por `_id` en una colección separada.

Esta es la misma decisión que documenta el diagrama oficial de modelado de datos de MongoDB,
aplicada aquí al ejemplo clásico de usuarios y hobbies.
