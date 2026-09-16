# Semana 05 · Clase 1 — De Supabase (relacional) a MongoDB Atlas (documental)

## Objetivo de aprendizaje

- Comparar bases de datos relacionales y no relacionales desde casos de uso concretos.
- Comprender el modelo documental de MongoDB y su flexibilidad de esquema.
- Configurar MongoDB Atlas para trabajo de desarrollo.
- Realizar operaciones CRUD básicas sobre colecciones y documentos.

## Enunciado

Tienes el esquema **relacional** de usuarios y sus hobbies, tal como existiría en
Supabase/Postgres (`data/esquema-relacional-supabase.sql`): 2 tablas normalizadas (`users` y
`hobbies`) conectadas 1-a-muchos por `user_id`.

Tu reto es migrar este esquema a un **modelo documental en MongoDB Atlas**, aplicando el
criterio de embeber vs. referenciar:

1. **Diseña la colección `users`**: cada documento debe traer **embebido** un arreglo
   `hobbies` con todos los hobbies de ese usuario — sin necesidad de ninguna tabla ni
   colección separada para leerlos.
2. **Escribe la transformación**: una función que reciba las filas de `users` y las filas de
   `hobbies` (tal como saldrían de Supabase) y devuelva un documento por usuario, con sus
   hobbies agrupados en un arreglo.
3. **Configura un clúster de MongoDB Atlas** (nivel gratuito) y conéctate con MongoDB
   Compass.
4. **Inserta los datos transformados** en Atlas y verifica visualmente en Compass que cada
   usuario trae su arreglo `hobbies` completo, sin filas repetidas.
5. **Practica el CRUD básico** desde Compass o desde código:
   - `find` con un filtro simple (por ejemplo, usuarios de la ciudad `"Pawnee"`).
   - `find` con un filtro sobre el arreglo (por ejemplo, usuarios que tengan el hobby
     `"working"`).
   - `update` para **agregar** un hobby nuevo al arreglo de un usuario (`$push`).
   - `update` para **quitar** un hobby del arreglo (`$pull`).
   - `delete` de un documento de prueba.

## Qué debes entregar

La colección `users` visible en tu clúster de MongoDB Atlas, con cada documento trayendo su
arreglo `hobbies` embebido correctamente, más evidencia (captura o consulta) de al menos un
`find` con filtro sobre el arreglo, un `update` con `$push` o `$pull`, y un `delete`.
