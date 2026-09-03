# Actividad principal · Servidor HTTP para un oráculo creativo

## Enunciado

Crea un servidor HTTP con **Node puro** (sin Express) y **TypeScript** para un "oráculo
creativo": un servicio que entrega ideas creativas aleatorias a quien lo consulte.

### Rutas que debe responder

| Ruta | Método | Qué debe devolver |
|---|---|---|
| `/` | GET | Mensaje de bienvenida al oráculo, en JSON. |
| `/idea` | GET | Una idea creativa elegida al azar, en JSON. |
| `/salud` | GET | Estado del servidor (`health check`), en JSON. |
| Cualquier otra ruta | — | Un `404` con un mensaje claro, en JSON. |

### Requisitos técnicos

- Usa el módulo nativo `http` (no instales Express ni frameworks).
- Registra en consola cada petición recibida: método HTTP + ruta + hora.
- Todas las respuestas deben ser JSON válido, con el header
  `Content-Type: application/json`.
- Modela la forma de una "idea creativa" con TypeScript: un `id`, un `texto` y una
  `categoria` limitada a un conjunto cerrado de valores (unión literal).
- El puerto del servidor debe poder configurarse por variable de entorno (`PORT`), con un
  valor por defecto si no está definida.

## Qué debes entregar

Un servidor que arranque con `npm run dev`, responda las 3 rutas y el caso 404, y registre
cada petición en la terminal.
