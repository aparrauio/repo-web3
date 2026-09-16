/**
 * controllers/personajes.controller.ts
 * ---------------------------------------
 * Traduce entre HTTP (req/res) y el servicio. No contiene lógica de
 * negocio: solo lee la petición, llama al servicio y decide la respuesta.
 * Cualquier error se delega a `next(error)` para que lo capture el
 * middleware centralizado (errorHandler.ts).
 */

import { Request, Response, NextFunction } from "express";
import * as personajesService from "../services/personajes.service";
import { Elemento } from "../tipos";
import { ApiError } from "../apiError";

export function listar(req: Request, res: Response, next: NextFunction): void {
  try {
    const elemento = req.query.elemento as Elemento | undefined;
    const resultado = personajesService.listarPersonajes(elemento);
    res.json({ total: resultado.length, personajes: resultado, requestId: req.id });
  } catch (error) {
    next(error);
  }
}

export function obtenerPorId(req: Request, res: Response, next: NextFunction): void {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      throw new ApiError(400, `"${req.params.id}" no es un id válido`);
    }
    const personaje = personajesService.buscarPersonajePorId(id);
    res.json({ personaje, requestId: req.id });
  } catch (error) {
    next(error); // El middleware de errores decide status y formato de la respuesta.
  }
}

export function crear(req: Request, res: Response, next: NextFunction): void {
  try {
    const nuevoPersonaje = personajesService.crearPersonaje(req.body);
    res.status(201).json({ personaje: nuevoPersonaje, requestId: req.id });
  } catch (error) {
    next(error);
  }
}

export function actualizar(req: Request, res: Response, next: NextFunction): void {
  try {
    const id = Number(req.params.id);
    const actualizado = personajesService.actualizarPersonaje(id, req.body);
    res.json({ personaje: actualizado, requestId: req.id });
  } catch (error) {
    next(error);
  }
}

export function eliminar(req: Request, res: Response, next: NextFunction): void {
  try {
    const id = Number(req.params.id);
    personajesService.eliminarPersonaje(id);
    res.status(204).send(); // 204 No Content: eliminado, sin cuerpo de respuesta.
  } catch (error) {
    next(error);
  }
}
