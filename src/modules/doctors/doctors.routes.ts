import { FastifyInstance } from "fastify";
import { createDoctorHandle, deleteDoctorHandle, listDoctorsHandle, searchDorctorHandle, showDoctorHandle, updateDoctorHandle } from "./doctors.controller";

export async function doctorsRoutes(app: FastifyInstance) {
    app.get('/', listDoctorsHandle);
    app.post('/', createDoctorHandle);
    app.get('/:id', showDoctorHandle);
    app.put('/:id', updateDoctorHandle);
    app.delete('/:id', deleteDoctorHandle);
    app.get('/search/:test', searchDorctorHandle);
}