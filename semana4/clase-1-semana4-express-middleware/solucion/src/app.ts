/**
 * app.ts
 * ------
 * Ensambla la aplicación Express: middlewares globales, rutas y el
 * middleware centralizado de errores. El ORDEN de app.use() es la parte
 * más importante de este archivo (ver pista.md).
 */

import express, { Express, Request, Response } from "express";
import { requestId } from "./middlewares/requestId";
import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import { personajesRouter } from "./routes/personajes.routes";
import { ApiError } from "./apiError";

export function crearApp(): Express {
  const app = express();

  // 1) express.json() debe ir ANTES de cualquier ruta que lea req.body.
  app.use(express.json());

  // 2) requestId debe ir ANTES de logger, porque logger usa req.id.
  app.use(requestId);

  // 3) logger: registra cada petición (incluye req.id gracias al paso 2).
  app.use(logger);

  // 4) Ruta de salud simple, fuera del router de personajes.
  app.get("/api/salud", (req: Request, res: Response) => {
    res.json({ estado: "ok", requestId: req.id });
  });

  // 5) Rutas de negocio, montadas bajo /api/personajes.
  app.use("/api/personajes", personajesRouter);

  // 6) Cualquier ruta no definida llega aquí y se convierte en un error 404
  //    consistente, en vez del HTML por defecto de Express.
  app.use((req: Request, res: Response, next) => {
    next(new ApiError(404, `Ruta no encontrada: ${req.method} ${req.originalUrl}`));
  });

  // 7) SIEMPRE al final: el middleware de errores. Si algo antes llama a
  //    next(error), termina aquí.
  app.use(errorHandler);

  return app;
}
