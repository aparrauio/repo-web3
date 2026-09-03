/**
 * rutas.ts
 * --------
 * Decide qué responder según el método y la ruta de la petición.
 * Esta función NO crea el servidor — solo maneja una petición ya recibida.
 */

import { IncomingMessage, ServerResponse } from "http";
import { ideas, obtenerIdeaAleatoria } from "./ideas";

// Helper: siempre responde JSON con el status y el header correctos.
function responderJSON(res: ServerResponse, status: number, payload: unknown): void {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

export function manejarRuta(req: IncomingMessage, res: ServerResponse): void {
  const metodo = req.method ?? "GET";
  const ruta = req.url ?? "/";

  // Registro de la petición: esto corre para TODAS las rutas, porque está
  // antes de las comparaciones de abajo.
  console.log(`[${new Date().toISOString()}] ${metodo} ${ruta}`);

  if (metodo === "GET" && ruta === "/") {
    responderJSON(res, 200, {
      mensaje: "Bienvenido al oráculo creativo. Consulta /idea o /salud.",
    });
    return;
  }

  if (metodo === "GET" && ruta === "/idea") {
    const idea = obtenerIdeaAleatoria(ideas);
    responderJSON(res, 200, { idea });
    return;
  }

  if (metodo === "GET" && ruta === "/salud") {
    responderJSON(res, 200, {
      estado: "ok",
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (metodo === "GET" && ruta === "/hola") {
    responderJSON(res, 200, {
      mensaje: "Hola Mundo estoy en Web 3 :)",
    });
    return;
  }

  // Ninguna ruta coincidió: 404.
  responderJSON(res, 404, {
    error: `Ruta no encontrada: ${metodo} ${ruta}`,
  });
}
