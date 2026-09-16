# Semana 04 · Clase 02 — Frontend en React para la API de personajes

Contenido práctico de la sesión: el **frontend en React + TypeScript** que consume la API de
Express construida en la Clase 1 (Semana 4 · Sesión 1), usando **Bootstrap** como framework
de estilos — con la arquitectura pensada para poder migrar a Tailwind (o cualquier otro
framework) más adelante sin reescribir toda la aplicación.

## Con qué backend conecta

Este frontend consume la API que ya construiste en `clase-1-semana4-express-middleware/`:

```
GET    /api/personajes          -> listar (admite ?elemento=)
GET    /api/personajes/:id      -> obtener uno
POST   /api/personajes          -> crear
PUT    /api/personajes/:id      -> actualizar
DELETE /api/personajes/:id      -> eliminar
```

Si no tienes esa API corriendo, puedes seguir usando este frontend contra cualquier servidor
que respete la misma forma de `Personaje` y las mismas 5 rutas.

## Qué contiene esta carpeta

- **`enunciado.md`** — el reto de la sesión.
- **`pista.md`** — cómo abordar la integración de Bootstrap sin acoplar todo el proyecto a él.
- **`instrucciones-ejecucion.md`** — cómo instalar, configurar y probar el frontend.
- **`solucion/`** — el código fuente completo y comentado (React + TypeScript + Vite).
- **`MIGRACION-BOOTSTRAP-A-TAILWIND.md`** — guía concreta de qué archivos tocar el día que
  decidas cambiar de framework de estilos.
- **`prompts/prompts-apoyo-ia.md`** — prompts guiados para usar IA sin que resuelva el reto.

## La idea clave de esta sesión

**Nunca escribas clases de Bootstrap directamente dentro de tus componentes de negocio**
(`PersonajeCard`, `PersonajeForm`, etc.). En su lugar, créate una capa delgada de componentes
de UI (`Boton`, `Tarjeta`) que son los ÚNICOS lugares del proyecto que conocen las clases de
Bootstrap. El resto de la aplicación solo usa `<Boton variante="danger">` o `<Tarjeta>`, sin
saber ni importarle qué framework de CSS hay detrás.

Esto es lo mismo que ya practicaste con el patrón de middleware en el backend (Clase 1): una
capa que aísla una decisión técnica del resto del sistema, para poder cambiarla después sin
tocar todo el código.

## Arquitectura de la solución

```
solucion/src/
├── tipos.ts                     # Personaje, Elemento (unión literal) — igual que el backend
├── api/personajesApi.ts         # todas las llamadas fetch a la API (GET/POST/PUT/DELETE)
├── components/
│   ├── ui/
│   │   ├── Boton.tsx            # ÚNICO lugar que conoce las clases "btn btn-..."
│   │   └── Tarjeta.tsx          # ÚNICO lugar que conoce las clases "card ..."
│   ├── FiltroElemento.tsx       # <select> para filtrar por elemento (?elemento=)
│   ├── PersonajeForm.tsx        # formulario de creación / edición
│   ├── PersonajeCard.tsx        # una tarjeta por personaje (usa Tarjeta + Boton)
│   └── PersonajeList.tsx        # lista de PersonajeCard
├── App.tsx                      # estado global de la pantalla + orquesta las llamadas API
└── main.tsx                     # punto de entrada de React
```

## Orden sugerido de trabajo en clase

1. Levantar el backend de la Clase 1 (`npm run dev` en su carpeta `solucion/`).
2. Leer `enunciado.md` y `pista.md`.
3. Ejecutar `solucion/` (este frontend) siguiendo `instrucciones-ejecucion.md`.
4. Probar las 5 operaciones desde la interfaz: listar, filtrar, crear, editar, eliminar.
5. Leer `MIGRACION-BOOTSTRAP-A-TAILWIND.md` y ubicar en el código los 2 únicos archivos que
   tocarías si migraras de framework.
6. Llenar `docs/plantilla-nota-aprendizaje.md`.
7. Hacer commit por componente en una rama `feature/frontend-personajes`.
