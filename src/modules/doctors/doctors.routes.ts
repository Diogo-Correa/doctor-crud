import { FastifyInstance } from "fastify";
import { createDoctorHandle, createManyPhones, deleteDoctorHandle, deletePhoneHandle, listDoctorsHandle, showDoctorHandle, updateDoctorHandle } from "./doctors.controller";

export async function doctorsRoutes(app: FastifyInstance) {
    app.get('/', listDoctorsHandle);
    app.post('/', createDoctorHandle);
    app.get('/:id', showDoctorHandle);
    app.put('/:id', updateDoctorHandle);
    app.delete('/:id', deleteDoctorHandle);
    app.delete('/phones/:id', deletePhoneHandle);
    app.post('/phones', createManyPhones);
}