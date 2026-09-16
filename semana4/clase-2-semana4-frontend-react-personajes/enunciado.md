# Semana 04 · Clase 2 — Frontend en React para la API de personajes

## Objetivo de aprendizaje

- Construir una interfaz en React + TypeScript que consuma una API REST real.
- Practicar componentes, props y estado usando los personajes de Mortal Kombat.
- Integrar un framework de estilos (Bootstrap) sin acoplar toda la aplicación a él.
- Cubrir el ciclo completo de un recurso: listar, ver, crear, actualizar y eliminar.

## Enunciado

Construye el **frontend en React** para la API de personajes de Mortal Kombat que ya
construiste en la Clase 1 (Express + middleware). La aplicación debe:

1. **Listar** todos los personajes al cargar la página (`GET /api/personajes`).
2. Permitir **filtrar** la lista por elemento usando un `<select>`
   (`GET /api/personajes?elemento=Fuego`).
3. Mostrar el **detalle** de un personaje (puedes reutilizar los datos ya cargados o volver a
   pedirlos con `GET /api/personajes/:id`).
4. Permitir **crear** un personaje nuevo con un formulario (`POST /api/personajes`).
5. Permitir **editar** un personaje existente reutilizando el mismo formulario, precargado
   con sus datos (`PUT /api/personajes/:id`).
6. Permitir **eliminar** un personaje con un botón de confirmación
   (`DELETE /api/personajes/:id`).

### Requisito de arquitectura (el foco real de esta sesión)

Usa **Bootstrap** (vía CDN, sin instalar el paquete de React de Bootstrap) para dar estilo a
la interfaz, pero organiza tus componentes en dos niveles:

- **Componentes de UI** (`Boton`, `Tarjeta`): son los ÚNICOS archivos que escriben clases de
  Bootstrap (`btn btn-primary`, `card`, etc.).
- **Componentes de negocio** (`PersonajeCard`, `PersonajeForm`, `PersonajeList`,
  `FiltroElemento`): solo usan `<Boton>` y `<Tarjeta>` — nunca escriben una clase de Bootstrap
  directamente.

Esto debe permitir que, el día que quieras migrar a Tailwind (o cualquier otro framework),
**solo necesites reescribir 2 archivos** (`Boton.tsx` y `Tarjeta.tsx`), sin tocar el resto de
componentes.

## Qué debes entregar

Una aplicación React que corra con `npm run dev`, consuma las 5 rutas del backend, cubra las
6 funcionalidades listadas arriba, y mantenga las clases de Bootstrap aisladas en
`components/ui/`.
