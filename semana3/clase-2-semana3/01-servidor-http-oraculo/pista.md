# Pista — Servidor HTTP para un oráculo creativo

## El callback ES el evento

```ts
import http from "http";

const servidor = http.createServer((req, res) => {
  // Este callback NO se ejecuta al leer el archivo — Node lo registra y
  // sigue. Solo se ejecuta cuando llega una petición real: ese es el evento
  // "orientado a eventos" del que habla la Clase 2.
});

servidor.listen(3000);
```

## Cómo distinguir las rutas

`req.url` te da la ruta solicitada y `req.method` el verbo HTTP:

```ts
if (req.method === "GET" && req.url === "/idea") {
  // ...
}
```

## Cómo responder JSON correctamente

```ts
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ mensaje: "Bienvenido al oráculo" }));
```

No olvides `res.end(...)` — sin eso, la respuesta nunca se envía y la petición queda
"colgada".

## Cómo elegir una idea al azar

```ts
function obtenerIdeaAleatoria(ideas: IdeaCreativa[]): IdeaCreativa {
  const indice = Math.floor(Math.random() * ideas.length);
  return ideas[indice];
}
```

## Cómo registrar cada petición

Ponlo al inicio del callback de `createServer`, para que se ejecute sin importar la ruta:

```ts
const servidor = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  // ... el resto de la lógica de rutas
});
```

## Cómo leer el puerto desde una variable de entorno

```ts
const PUERTO = process.env.PORT ? Number(process.env.PORT) : 3000;
```

## Orden recomendado para construir el servidor

1. Define `tipos.ts` (la forma de una idea creativa).
2. Define `ideas.ts` (los datos + la función que elige una al azar).
3. Define `rutas.ts` (la función que decide qué responder según `req.url`).
4. Define `index.ts` (crea el servidor, conecta `rutas.ts` y arranca en el puerto).
