# Prompts de apoyo con IA (uso opcional)

Estos prompts son útiles si te atascas en algún concepto y quieres usar un asistente de IA para entender (no para copiar sin pensar) el problema. Se alinean con el eje conceptual del curso: la IA ayuda a razonar y auditar, no sustituye tu criterio como desarrollador.

## Para la Actividad 1 (repaso de conceptos)

### Entender un concepto específico antes de programarlo

```
Estoy repasando JavaScript avanzado antes de un ejercicio de programación.
Quiero entender el concepto de "[closures / funciones de orden superior /
destructuring y spread-rest / módulos ES / promesas y async-await / Event Loop]"
con un ejemplo sencillo y distinto al que voy a programar (mi ejercicio usa una
temática de una fábrica de pociones mágicas).

Explícame el concepto con una analogía clara, luego muéstrame un ejemplo de
código de 5-8 líneas, y termina con una pregunta para verificar que entendí
antes de que yo intente escribir mi propia versión.
```

### Depurar un error sin recibir la solución completa

```
Tengo este código en JavaScript que debería implementar [closures /
promesas con async-await / destructuring]:

<pega tu código aquí>

Al ejecutarlo obtengo este resultado o error:

<pega el resultado o error aquí>

No me des la solución completa. Pregúntame primero qué esperaba que pasara,
y guíame con una pregunta a la vez hacia el error.
```

## Para la Actividad 2 (generador narrativo)

### Verificar el propio entendimiento del comportamiento no bloqueante

```
Voy a mostrarte mi código de un generador narrativo con promesas y async/await.
Antes de decirme si está bien o mal, pregúntame: en qué orden espero que se
impriman los console.log, y por qué creo que va a pasar eso. Después de que
te responda, ejecuta mentalmente mi código y dime si mi predicción del orden
de impresión fue correcta, explicando por qué.

Código:
<pega tu código aquí>
```

### Auditar (no generar) el manejo de errores

```
Tengo una función que carga "escenas" usando Promise.all dentro de un
try/catch. Quiero asegurarme de que mi manejo de errores es correcto.
No reescribas mi código. Pregúntame: qué pasa si UNA sola escena de las
tres falla, ¿qué le pasa a las otras dos? Ayúdame a razonar la respuesta
antes de decírmela directamente.

Código:
<pega tu código aquí>
```

## Nota pedagógica para el docente

Estos prompts están diseñados para que el estudiante primero intente resolver por su cuenta, y solo use la IA para **entender un concepto puntual o auditar su propio razonamiento**, en línea con el rol del desarrollador como "auditor de resultados" descrito en el paper de referencia del curso sobre el cambio de paradigma del desarrollador (arxiv.org/html/2606.05608v2). Evitar prompts que generen la solución completa de punta a punta.
