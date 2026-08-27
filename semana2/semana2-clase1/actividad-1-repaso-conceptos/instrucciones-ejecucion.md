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
2. No hay dependencias externas que instalar (el ejercicio usa solo JavaScript nativo), pero puedes correr `npm install` de todas formas por costumbre de flujo de trabajo:
   ```bash
   npm install
   ```
3. Ejecuta el programa:
   ```bash
   npm start
   ```
   o directamente:
   ```bash
   node src/index.js
   ```

## 3. Qué deberías ver en consola

La salida se divide en 5 bloques, uno por concepto:

1. **Closures y scope:** confirma que se agregaron ingredientes al caldero y que `verContenido()` retorna la lista.
2. **Funciones de orden superior:** muestra los nombres en mayúscula de los ingredientes potentes y la suma total de potencia.
3. **Destructuring y spread/rest:** describe la receta A y muestra los `extras` combinados de A y B, verificando que el arreglo original de A no cambió.
4. **Módulos ES:** mensaje de confirmación (la evidencia real está en que el programa corrió sin errores de `import`/`export`).
5. **Promesas/async/await/Event Loop:** verás el mensaje "Preparando pociones..." y el mensaje "no bloqueante" **antes** de que aparezcan los resultados finales, y un mensaje de error controlado en la consola de errores (`stderr`) por la "Poción fallida" con tiempo negativo — sin que el programa se detenga.

## 4. Cómo saber si te salió bien

- El programa termina sin lanzar una excepción no controlada (`Uncaught Exception`).
- El mensaje "Este mensaje aparece MIENTRAS las pociones aún se están preparando" se imprime ANTES de "Resultados finales", demostrando el comportamiento no bloqueante.
- El error de la "Poción fallida" aparece como advertencia controlada (`console.error`), no como un crash.
- `recetaA.extras` conserva sus 2 elementos originales después de llamar a `combinarRecetas`.

## 5. Errores comunes y cómo resolverlos

| Error | Causa probable | Solución |
|---|---|---|
| `SyntaxError: Cannot use import statement outside a module` | Falta `"type": "module"` en `package.json` | Verifica que el `package.json` tenga esa línea |
| `Cannot find module './archivo.js'` | Falta la extensión `.js` en el `import` | En módulos ES nativos de Node, siempre se debe incluir la extensión del archivo |
| El programa "se cuelga" y no muestra nada | Olvidaste `await` en `main()` o el `setTimeout` nunca resuelve | Revisa que `prepararPocion` siempre llame a `resolve` o `reject` |
