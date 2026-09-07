/**
 * index.ts
 * --------
 * Crea el servidor HTTP y lo pone a escuchar. Ejecuta: npm run dev
 */

import http from "http";
import "dotenv/config";
import { manejarRuta } from "./rutas";

// El puerto puede configurarse por variable de entorno (.env), con un
// valor por defecto si no está definida.
const PUERTO = process.env.PORT ? Number(process.env.PORT) : 3000;

// `http.createServer` recibe una función (el callback). Esa función NO se
// ejecuta ahora: se ejecuta cada vez que llega una petición real. Ese es
// el modelo orientado a eventos del que habla la Clase 2.
const servidor = http.createServer(manejarRuta);

servidor.listen(PUERTO, () => {
  console.log(`Oráculo creativo escuchando en http://localhost:${PUERTO}`);
});
