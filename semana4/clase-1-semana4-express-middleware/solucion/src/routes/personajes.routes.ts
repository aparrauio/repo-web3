/**
 * routes/personajes.routes.ts
 * ------------------------------
 * Define las 5 rutas CRUD y las conecta con el controlador. Este archivo
 * NO sabe qué hace cada controlador por dentro — solo asocia verbo+ruta
 * con la función que debe manejarla.
 */

import { Router } from "express";
import * as personajesController from "../controllers/personajes.controller";

export const personajesRouter = Router();

personajesRouter.get("/", personajesController.listar);
personajesRouter.get("/:id", personajesController.obtenerPorId);
personajesRouter.post("/", personajesController.crear);
personajesRouter.put("/:id", personajesController.actualizar);
personajesRouter.delete("/:id", personajesController.eliminar);
