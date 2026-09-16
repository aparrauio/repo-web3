# Cómo ejecutar — API de personajes con Express y TypeScript

## Paso 1 — Instalar dependencias

```bash
cd solucion
npm install
```

## Paso 2 — Configurar variables de entorno

```bash
cp .env.example .env
```

`.env` trae `PORT=3000` por defecto.

## Paso 3 — Ejecutar en desarrollo

```bash
npm run dev
```

Deberías ver:

```
API de personajes escuchando en http://localhost:3000
Prueba: curl http://localhost:3000/api/personajes
```

## Paso 4 — Probar los endpoints

### Listar todos los personajes

```bash
curl http://localhost:3000/api/personajes
```

### Filtrar por elemento

```bash
curl "http://localhost:3000/api/personajes?elemento=Fuego"
```

### Obtener un personaje por id

```bash
curl http://localhost:3000/api/personajes/1
```

### Crear un personaje nuevo

```bash
curl -X POST http://localhost:3000/api/personajes \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Reptile","faccion":"Lin Kuei","elemento":"Almas","estadisticas":{"nivelPoder":7,"combatesGanados":20},"arma":"Ácido"}'
```

### Actualizar un personaje

```bash
curl -X PUT http://localhost:3000/api/personajes/1 \
  -H "Content-Type: application/json" \
  -d '{"arma":"Kunai mejorado"}'
```

### Eliminar un personaje

```bash
curl -X DELETE http://localhost:3000/api/personajes/1
```

### Probar el manejo centralizado de errores

```bash
curl http://localhost:3000/api/personajes/999      # 404
curl -X POST http://localhost:3000/api/personajes \
  -H "Content-Type: application/json" -d '{}'       # 400
curl http://localhost:3000/ruta-que-no-existe        # 404 genérico
```

En todos los casos de error, la respuesta debe traer `{ "error": "...", "requestId": "..." }`
y la terminal donde corre `npm run dev` debe mostrar el log de la petición con su `id`,
método, ruta y duración.

## Con Thunder Client / Postman

Crea una colección con las mismas 5 rutas (más `/api/salud`) usando `http://localhost:3000`
como base y los mismos métodos/cuerpos JSON que arriba.

## Paso 5 — Compilar para producción (opcional)

```bash
npm run build
npm start
```
