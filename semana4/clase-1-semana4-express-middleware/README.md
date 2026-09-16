# Semana 04 · Clase 01 — Express.js y patrón de middleware

Contenido práctico de la sesión: una API REST con **Express + TypeScript** para gestionar
personajes de Mortal Kombat, aplicando el patrón de middleware (logging, id de petición,
manejo centralizado de errores) y separación en rutas / controladores / servicios.

## Por qué Mortal Kombat otra vez

En la Semana 3 · Clase 1 usamos `mortal_kombat_personajes.json` para practicar tipos de
TypeScript (genéricos, utilitarios, uniones discriminadas, enums). Esta sesión reutiliza el
**mismo dataset** para dar el siguiente paso: exponerlo a través de una API REST real con
Express, en vez de solo manipularlo en un script de consola.

## Qué contiene esta carpeta

- **`enunciado.md`** — el reto de la sesión.
- **`pista.md`** — cómo pensar el orden de los middlewares.
- **`instrucciones-ejecucion.md`** — cómo instalar, configurar y probar la API.
- **`solucion/`** — el código fuente completo y comentado.
- **`prompts/prompts-apoyo-ia.md`** — prompts guiados para usar IA sin que resuelva el reto.
- **`docs/plantilla-nota-aprendizaje.md`** — plantilla para documentar tu proceso.

## Arquitectura de la solución

```
solucion/src/
├── tipos.ts                        # Personaje, Elemento (unión literal), EstadisticaCombate
├── data/personajes.ts              # "base de datos" en memoria (mismo dataset de Semana 3)
├── middlewares/
│   ├── requestId.ts                # asigna un id único a cada petición
│   ├── logger.ts                   # registra método, ruta, id y duración
│   └── errorHandler.ts             # captura errores de forma centralizada
├── services/personajes.service.ts  # lógica de negocio (CRUD sobre el arreglo en memoria)
├── controllers/personajes.controller.ts  # traduce HTTP <-> servicio
├── routes/personajes.routes.ts     # define las rutas y las conecta al controlador
├── app.ts                          # ensambla Express + middlewares + rutas
└── index.ts                        # arranca el servidor HTTP
```

## Orden sugerido de trabajo en clase

1. Leer `enunciado.md` y `pista.md`.
2. Ejecutar `solucion/` siguiendo `instrucciones-ejecucion.md`.
3. Probar las 5 rutas CRUD con `curl`, Thunder Client o Postman.
4. Provocar a propósito un error (por ejemplo, un `id` inexistente) y observar cómo lo
   captura el middleware centralizado de errores.
5. Llenar `docs/plantilla-nota-aprendizaje.md`.
6. Hacer commit de cada middleware por separado en una rama `feature/api-personajes`.
