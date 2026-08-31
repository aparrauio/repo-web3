# Instrucciones para probar y ejecutar el ejercicio

## 1. Requisitos

- Node.js instalado (v18 o superior recomendado). Verifica con:
  ```bash
  node --version
  ```

## 2. Cómo ejecutar

1. Entra a la carpeta `solucion/`:
   ```bash
   cd solucion
   ```
2. Instala dependencias (no hay externas, pero mantiene el flujo estándar):
   ```bash
   npm install
   ```
3. Ejecuta:
   ```bash
   npm start
   ```
   o directamente:
   ```bash
   node src/index.js
   ```

## 3. Resultado esperado

Verás en consola la salida del ejercicio y los datos procesados, en este orden:

```
Inicio no bloqueante
Este mensaje aparece antes de que terminen las escenas
Escena 1: Bosque azul genera misterio
Escena 2: Puerta que canta genera curiosidad
Escena 3: Río de cristal genera calma
```

El punto clave: el segundo mensaje ("Este mensaje aparece antes...") se imprime **antes** de que las escenas terminen de "cargar", demostrando que el programa no se bloqueó esperando.

## 4. Prueba del manejo de errores (opcional)

Para verificar el `try/catch`, edita `src/escenas.js` y elimina el campo `titulo` de alguna escena (déjalo como cadena vacía o quítalo). Al ejecutar de nuevo, deberías ver en la consola de errores un mensaje como:

```
Historia incompleta: Escena 2 está incompleta
```

Sin que el programa se detenga con una excepción no controlada.

## 5. Cómo saber si te salió bien

- El mensaje "Este mensaje aparece antes de que terminen las escenas" aparece antes que cualquier escena impresa.
- Si simulas una escena incompleta, el error se captura de forma controlada (no un crash).
- Las tres escenas cargan y se imprimen sin importar su `delay` individual (cargan en paralelo, no en secuencia).
