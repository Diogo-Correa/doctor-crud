import { FastifyInstance } from "fastify";
import { createManyPhones, deletePhoneHandle } from "../doctors/doctors.controller";
import { $ref } from "../phones/phones.schema";

export async function phonesRoutes(app: FastifyInstance) {
    app.post('/phones', {
        schema: {
            tags: ["Phones routes"],
            description: "Create phones to doctor",
            body: $ref("phoneCreateManySchema")
        },
    }, createManyPhones);

    app.delete('/phones/:id', {
        schema: {
            tags: ["Phones routes"],
            description: "Delete phone from doctor",
            params: $ref("phoneParamsSchema")
        },
    }, deletePhoneHandle);
}