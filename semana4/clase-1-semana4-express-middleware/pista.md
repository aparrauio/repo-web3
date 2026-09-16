# Pista — Express.js y patrón de middleware

## El orden de los middlewares importa

Express ejecuta los middlewares **en el orden en que los registras** con `app.use(...)`. Si
un middleware no llama a `next()`, la petición se queda "colgada" ahí para siempre —nunca
llega a las rutas ni a las respuestas.

```ts
app.use(express.json());     // 1. Debe ir ANTES de leer req.body
app.use(requestId);          // 2. Asigna req.id antes de loguear
app.use(logger);             // 3. Ya puede usar req.id en el log
app.use("/api/personajes", personajesRouter); // 4. Las rutas
app.use(errorHandler);       // 5. SIEMPRE al final: captura errores de todo lo anterior
```

## Cómo pasar un error al middleware centralizado

Dentro de un controlador, en vez de manejar el error ahí mismo, pásalo a `next(error)`:

```ts
export function obtenerPersonajePorId(req: Request, res: Response, next: NextFunction) {
  const personaje = personajesService.buscarPorId(Number(req.params.id));
  if (!personaje) {
    return next(new ApiError(404, `Personaje ${req.params.id} no encontrado`));
  }
  res.json(personaje);
}
```

Express detecta automáticamente que un middleware de error tiene **4 parámetros**
`(err, req, res, next)` y lo llama cuando alguien invoca `next(error)` en cualquier punto
anterior de la cadena.

## Cómo separar servicio de controlador

- El **servicio** (`personajes.service.ts`) solo conoce el arreglo de datos: no sabe qué es
  `req` ni `res`. Devuelve datos o lanza errores de negocio.
- El **controlador** (`personajes.controller.ts`) traduce: lee `req.params`/`req.body`, llama
  al servicio, y decide qué status/JSON responder.

## Orden recomendado para construir la API

1. `tipos.ts` — la forma de `Personaje` (ya la tienes de la Semana 3).
2. `data/personajes.ts` — el arreglo en memoria.
3. `services/personajes.service.ts` — funciones puras: buscar, crear, actualizar, eliminar.
4. `middlewares/` — `requestId`, `logger`, `errorHandler`.
5. `controllers/` y `routes/` — conectan todo con Express.
6. `app.ts` e `index.ts` — ensamblan y arrancan el servidor.
