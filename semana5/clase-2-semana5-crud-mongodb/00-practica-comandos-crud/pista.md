# Pista — Practica los 8 comandos CRUD

## Cómo conectarte a la base de datos que ya existe

```ts
const cliente = new MongoClient(process.env.MONGODB_URI!);
await cliente.connect();
const db = cliente.db("usuarios_hobbies");
const coleccion = db.collection("users");
```

## insertOne vs. insertMany

```ts
const r1 = await coleccion.insertOne({ firstName: "Andy", ... });
console.log(r1.insertedId);

const r2 = await coleccion.insertMany([{ firstName: "Ben", ... }, { firstName: "Chris", ... }]);
console.log(r2.insertedIds);
```

## find vs. find().sort()

```ts
const dePawnee = await coleccion.find({ city: "Pawnee" }).toArray();
const ordenados = await coleccion.find({}).sort({ lastName: 1 }).toArray(); // 1 asc, -1 desc
```

## updateOne vs. updateMany

```ts
await coleccion.updateOne({ firstName: "Leslie" }, { $push: { hobbies: "pottery" } });
await coleccion.updateMany({ city: "Pawnee" }, { $set: { activo: true } });
```

## deleteOne vs. deleteMany

```ts
await coleccion.deleteOne({ firstName: "Ben" });
await coleccion.deleteMany({ activo: false }); // OJO: {} sin filtro borraría TODO
```

## Orden recomendado para no perder datos por accidente

1. Corre primero los insert* y verifica en Compass que aparecieron.
2. Corre los find* para confirmar que ves lo que esperabas.
3. Corre los update* y vuelve a mirar en Compass qué cambió.
4. Corre los delete* AL FINAL, siempre con un filtro específico.
