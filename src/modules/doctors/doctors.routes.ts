import { FastifyInstance } from "fastify";
import { createDoctorHandle, deleteDoctorHandle, listDoctorsHandle, searchDorctorHandle, showDoctorHandle } from "./doctors.controller";

export async function doctorsRoutes(app: FastifyInstance) {
    app.get('/', listDoctorsHandle);
    app.post('/', createDoctorHandle);
    app.get('/:id', showDoctorHandle);
    app.delete('/:id', deleteDoctorHandle);
    app.get('/search/:test', searchDorctorHandle);
}