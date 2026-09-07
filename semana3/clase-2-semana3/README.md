# Semana 03 · Clase 02 — Node.js, npm y modelo orientado a eventos

Contenido práctico de la sesión, con dos actividades en el mismo orden que las diapositivas.

## Qué contiene esta carpeta

1. **`00-actividad-previa-event-loop/`** — ejercicio corto (5-10 min) que demuestra en vivo
   las características principales de Node.js: el orden real de ejecución entre código
   síncrono, microtasks (promesas) y macrotasks (`setTimeout`). Es la introducción antes de
   construir el servidor HTTP.

2. **`01-servidor-http-oraculo/`** — el reto principal: un servidor HTTP con Node puro y
   TypeScript para un "oráculo creativo", con las rutas `/`, `/idea` y `/salud`, que registra
   cada petición recibida.

## Orden sugerido de trabajo en clase

1. Leer el enunciado y la pista de `00-actividad-previa-event-loop/`.
2. Predecir el orden de salida en papel, antes de ejecutar nada.
3. Ejecutar `00-actividad-previa-event-loop/solucion/` y comparar contra tu predicción.
4. Leer el enunciado y la pista de `01-servidor-http-oraculo/`.
5. Ejecutar `01-servidor-http-oraculo/solucion/` y probar las 3 rutas.
6. Llenar `docs/plantilla-nota-aprendizaje.md`.
7. Hacer commit de cada paso en una rama `feature/servidor-oraculo`.

## Carpetas y archivos

```
clase-2-semana3-nodejs-event-loop/
├── README.md
├── 00-actividad-previa-event-loop/
│   ├── enunciado.md
│   ├── pista.md
│   └── orden-ejecucion.ts
│
├── 01-servidor-http-oraculo/
│   ├── enunciado.md
│   ├── pista.md
│   ├── instrucciones-ejecucion.md
│   └── solucion/
│       ├── package.json
│       ├── tsconfig.json
│       ├── .env.example
│       └── src/{tipos.ts, ideas.ts, rutas.ts, index.ts}
├── prompts/
│   └── prompts-apoyo-ia.md
└── docs/
    └── plantilla-nota-aprendizaje.md
```
