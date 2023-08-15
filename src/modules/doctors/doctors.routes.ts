import { FastifyInstance } from "fastify";
import { createDoctorHandle, createManyPhones, deleteDoctorHandle, deletePhoneHandle, listDoctorsHandle, showDoctorHandle, updateDoctorHandle } from "./doctors.controller";
import { $ref } from "./doctors.schema";
import { $ref as $phoneRef } from "../phones/phones.schema";

export async function doctorsRoutes(app: FastifyInstance) {
    app.get('/', {
        schema: {
            tags: ["Doctors routes"],
            description: "List of doctors",
            response: {
                201: $ref("doctorShowSchema"),
            },
        },
    }, listDoctorsHandle);

    app.post('/', {
        schema: {
            tags: ["Doctors routes"],
            description: "Create doctors",
            body: $ref("doctorCreateSchema"),
            response: {
                201: $ref("doctorCreateSchema"),
            },
        },
    }, createDoctorHandle);

    app.get('/:id', {
        schema: {
            tags: ["Doctors routes"],
            description: "Show doctors by id",
            params: $ref("doctorParamsSchema"),
            response: {
                201: $ref("doctorShowSchema"),
            },
        },
    }, showDoctorHandle);

    app.put('/:id', {
        schema: {
            tags: ["Doctors routes"],
            description: "Update doctors",
            body: $ref("doctorUpdateSchema"),
            params: $ref("doctorParamsSchema"),
            response: {
                201: $ref("doctorCreateSchema"),
            },
        },
    }, updateDoctorHandle);

    app.delete('/:id', {
        schema: {
            tags: ["Doctors routes"],
            description: "Delete doctors by id",
            params: $ref("doctorParamsSchema")
        },
    }, deleteDoctorHandle);
}