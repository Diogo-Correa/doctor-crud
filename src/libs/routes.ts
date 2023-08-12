import { FastifyInstance } from "fastify";
import { doctorsRoutes } from "../modules/doctors/doctors.routes";

export async function appRoutes(app: FastifyInstance) {
    app.register(doctorsRoutes, { prefix: '/doctors' })
}