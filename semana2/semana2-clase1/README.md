# Semana 2 — Clase 1: JavaScript avanzado revisitado para MERN

## Ubicación en el temario

Esta carpeta corresponde a **Semana 2, Clase 1** del curso *Desarrollo Web 3: Aplicaciones Web Interactivas con Stack MERN e Ingeniería Agéntica*.

**Objetivos de aprendizaje de la semana:**
- Reforzar conceptos avanzados de JavaScript necesarios para aplicaciones interactivas y no bloqueantes.
- Comprender el valor de TypeScript como herramienta para reducir errores y documentar estructuras de datos.
- Migrar módulos simples de JavaScript a TypeScript usando tipos básicos, inferencia e interfaces.
- Aplicar Git/GitHub como bitácora técnica del proceso de aprendizaje.

**Contenido de la clase 1:** Repaso aplicado de closures, scope, funciones de orden superior, destructuring, spread/rest, módulos ES, promesas, `async/await`, manejo de errores con `try/catch` y Event Loop, conectando este último con la programación orientada a eventos y la prevención de bloqueos cliente-servidor.

## Estructura de esta carpeta

```
semana2-clase1/
├── README.md                                    # Este archivo: contexto y guía general
├── actividad-1-repaso-conceptos/                 # NUEVA: repaso guiado, un concepto a la vez
│   ├── enunciado.md
│   ├── pista.md
│   ├── solucion.md
│   ├── instrucciones-ejecucion.md
│   └── solucion/
│       ├── package.json
│       └── src/
│           ├── index.js
│           ├── closures.js
│           ├── hof.js
│           ├── destructuring.js
│           ├── ingredientes.js       (módulo ES de datos)
│           └── pociones.js           (promesas, async/await, try/catch, Event Loop)
├── actividad-2-generador-narrativo/              # ORIGINAL: se mantiene sin cambios de fondo
│   ├── enunciado.md
│   ├── pista.md
│   ├── solucion.md
│   ├── instrucciones-ejecucion.md
│   └── solucion/
│       ├── package.json
│       └── src/
│           ├── index.js
│           └── escenas.js
└── prompts/
    └── prompts-apoyo-ia.md                       # Prompts de apoyo para ambas actividades
```

## Recorrido sugerido de la clase

1. **Actividad 1 — Repaso de conceptos (≈40 min):** los estudiantes completan "La fábrica de pociones mágicas", un mini-programa creativo que implementa, uno por uno y de forma explícita, cada concepto de la lista: closures y scope, funciones de orden superior, destructuring y spread/rest, módulos ES, promesas y async/await, try/catch y Event Loop.
2. **Actividad 2 — Generador narrativo no bloqueante (≈35 min):** el reto original de la sesión, donde los mismos conceptos se combinan en un ejercicio integrador de tema libre.
3. **Cierre (≈10 min):** cada estudiante hace commit de ambas actividades en su repositorio del semestre, usando Git/GitHub como bitácora técnica del proceso.

## Requisitos previos

- Node.js instalado (v18 o superior recomendado, para soporte nativo de módulos ES).
- Editor de código (VS Code recomendado).
- Terminal (bash/zsh/PowerShell).
