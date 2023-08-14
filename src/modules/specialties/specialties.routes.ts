import { FastifyInstance } from "fastify";
import { createSpecialtyHandle, deleteSpecialtyHandle, listSpecialtyHandle } from "./specialties.controller";

export async function specialtyRoutes(app: FastifyInstance) {
    app.get('/', listSpecialtyHandle);
    app.post('/', createSpecialtyHandle);
    app.delete('/:id', deleteSpecialtyHandle);
}