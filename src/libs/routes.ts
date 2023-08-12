import { FastifyInstance } from "fastify";
import { doctorsRoutes } from "../modules/doctors/doctors.routes";
import { specialtyRoutes } from "../modules/specialties/specialties.routes";

export async function appRoutes(app: FastifyInstance) {
    app.register(doctorsRoutes, { prefix: '/doctors' });
    app.register(specialtyRoutes, { prefix: '/specialties' });
}