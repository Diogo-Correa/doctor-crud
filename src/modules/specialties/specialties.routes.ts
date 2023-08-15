import { FastifyInstance } from "fastify";
import { createSpecialtyHandle, deleteSpecialtyHandle, listSpecialtyHandle } from "./specialties.controller";
import { $ref } from "./specialties.schema";

export async function specialtyRoutes(app: FastifyInstance) {
    app.get('/', {
        schema: {
            tags: ["Specialty routes"],
            description: "List of specialties",
        },
    }, listSpecialtyHandle);

    app.post('/', {
        schema: {
            tags: ["Specialty routes"],
            description: "Create specialty",
            body: $ref("specialtyCreateSchema"),
            response: {
                201: $ref("specialtyCreateSchema")
            }
        },
    }, createSpecialtyHandle);

    app.delete('/:id', {
        schema: {
            tags: ["Specialty routes"],
            description: "Delete specialty",
            params: $ref("specialtyParamsSchema")
        },
    }, deleteSpecialtyHandle);
}