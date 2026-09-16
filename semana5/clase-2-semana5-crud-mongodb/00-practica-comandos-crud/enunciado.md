# Parte 0 · Practica los 8 comandos CRUD sobre usuarios y hobbies

## Objetivo de aprendizaje
- Conectarse a una base de datos real en MongoDB Atlas desde código.
- Ejecutar insertOne, insertMany, find, find().sort(), updateOne, updateMany, deleteOne y
  deleteMany sobre una colección real.
- Practicar filtros simples y exploración visual de datos en MongoDB Compass.

## Enunciado

Ya tienes, desde la Semana 5 · Clase 1, un clúster de MongoDB Atlas con la base de datos
`usuarios_hobbies` y su colección `users` (Leslie, Ron, Tom y April, cada uno con su arreglo
de `hobbies`). Tu reto en esta parte es conectarte a esa misma base y ejecutar, en orden,
estos 8 comandos:

1. **insertOne** — registra un usuario nuevo con al menos 2 hobbies.
2. **insertMany** — registra 2 usuarios más, de una sola vez.
3. **find** (con filtro) — busca todos los usuarios de la ciudad "Pawnee".
4. **find().sort()** — lista TODOS los usuarios ordenados por lastName, alfabéticamente.
5. **updateOne** — agrega un hobby nuevo a un usuario específico (usa $push).
6. **updateMany** — agrega un campo activo: true a TODOS los usuarios que vivan en "Pawnee"
   (usa $set).
7. **deleteOne** — elimina UNO de los usuarios que insertaste con insertMany.
8. **deleteMany** — elimina TODOS los usuarios que tengan activo: false (o que no tengan ese
   campo — decide tú el filtro).

## Qué debes entregar

Un script que ejecute los 8 comandos en orden contra tu clúster real de Atlas, más una
verificación visual en MongoDB Compass después de cada bloque de operaciones (inserciones,
luego búsquedas, luego actualizaciones, luego eliminaciones).
