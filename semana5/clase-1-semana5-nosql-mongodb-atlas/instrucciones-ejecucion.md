# Cómo ejecutar — De Supabase a MongoDB Atlas (usuarios y hobbies)

## Paso 1 — Configurar MongoDB Atlas (una sola vez)

1. Crea una cuenta gratuita en [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Crea un proyecto y, dentro de él, un clúster **M0 (gratuito)**.
3. En **Database Access**, crea un usuario de base de datos con contraseña (guárdala).
4. En **Network Access**, agrega tu dirección IP actual (o `0.0.0.0/0` solo para desarrollo
   en clase — nunca en producción).
5. En **Database > Connect > Drivers**, elige **Node.js** y copia el *connection string*.

## Paso 2 — Conectar MongoDB Compass (exploración visual)

1. Descarga [MongoDB Compass](https://www.mongodb.com/products/compass) (gratuito).
2. Pega tu *connection string* del Paso 1 y conéctate.

## Paso 3 — Configurar el proyecto de código

```bash
cd solucion
npm install
cp .env.example .env
```

Edita `.env` y pega tu `MONGODB_URI` real (la del Paso 1). Puedes dejar `MONGODB_DB` como
`usuarios_hobbies`, o cambiarlo.

## Paso 4 — Ejecutar el seed y la demo de CRUD

```bash
npm run seed
```

Esto va a:
1. Conectarse a tu clúster de Atlas.
2. Crear (o limpiar) la colección `users`.
3. Insertar los 4 usuarios, cada uno con su arreglo `hobbies` embebido (agrupado desde las
   filas relacionales de `hobbies`).
4. Ejecutar en consola: un `find` por ciudad, un `findOne` (para ver el embedding completo),
   un `find` filtrando por un valor dentro del arreglo, `$push` y `$pull` sobre los hobbies de
   Leslie, un `$set` sobre el celular de Ron, y un `deleteOne`.

## Paso 5 — Verificar visualmente en Compass

1. En Compass, refresca la lista de bases de datos — debería aparecer `usuarios_hobbies`.
2. Abre la colección `users` y confirma que cada documento trae el campo `hobbies` como un
   **arreglo**, no como filas separadas.
3. Practica manualmente en Compass:
   - **Find**: usa el filtro `{ hobbies: "working" }` en la barra de consultas — deberías ver
     solo a Leslie.
   - **Insert**: agrega un documento nuevo con el botón "Add Data", incluyendo su propio
     arreglo de `hobbies`.
   - **Update**: edita el documento de un usuario y agrega un hobby manualmente al arreglo.
   - **Delete**: elimina el documento que insertaste manualmente.

## Paso 6 — Compilar para producción (opcional)

```bash
npm run build
npm start
```
