# Cómo ejecutar — Parte 0 (Practica los 8 comandos CRUD)

## Paso 1 — Conectarte a tu base de datos existente

```bash
cd 00-practica-comandos-crud/solucion
npm install
cp .env.example .env
```

Edita `.env` y pega la misma `MONGODB_URI` que usaste en la Semana 5 · Clase 1. Deja
`MONGODB_DB=usuarios_hobbies` para conectarte a la base que ya existe.

## Paso 2 — Ejecutar los 8 comandos

```bash
npm run dev
```

Verás en consola, en orden, los resultados de insertOne, insertMany, find, find().sort(),
updateOne, updateMany, deleteOne y deleteMany.

## Paso 3 — Verificar en MongoDB Compass después de cada bloque

1. Tras las inserciones, refresca `users` en Compass — deberías ver 7 documentos.
2. Tras las actualizaciones, Leslie debe tener 4 hobbies y los usuarios de Pawnee
   `activo: true`.
3. Tras las eliminaciones, Ben ya no está, y solo quedan los usuarios con `activo: true`.

## Nota de seguridad

`deleteMany({})` (sin ningún filtro) eliminaría toda la colección. El script de esta carpeta
siempre usa un filtro explícito — revísalo dos veces antes de correrlo contra datos reales.
