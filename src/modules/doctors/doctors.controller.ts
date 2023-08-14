import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../libs/prisma";
import { CreateDoctorInput, DoctorParams, SearchParams } from "./doctors.schema";
import { createDoctor, deleteDoctor, listDoctors, showDoctorByCRM, showDoctorById, showDoctorByName, updateDoctor } from "./doctors.services";

export async function listDoctorsHandle() {
    const doctors = await listDoctors();
    return doctors;
}

export async function createDoctorHandle(
    request: FastifyRequest<{ Body: CreateDoctorInput }>,
    reply: FastifyReply
) {
    try {
        const doctor = await createDoctor(request.body);
        return reply.code(201).send(doctor);
    } catch (e) {
        return reply.code(500).send(e);
    }
}


export async function showDoctorHandle(
    request: FastifyRequest<{ Params: DoctorParams }>,
    reply: FastifyReply
) {
    try {
        const doctor = await showDoctorById(request.params.id);
        return reply.code(200).send(doctor);

    } catch (e) {
        return reply.code(500).send(e);
    }
}

export async function updateDoctorHandle(
    request: FastifyRequest<{
        Params: DoctorParams;
        Body: CreateDoctorInput;
    }>,
    reply: FastifyReply
) {
    const body = request.body;
    const id = request.params.id;

    try {
        const doctor = await updateDoctor(id, body);
        return reply.code(200).send(doctor);
    } catch (e) {
        return reply.code(500).send(e);
    }
}

export async function deleteDoctorHandle(
    request: FastifyRequest<{ Params: DoctorParams }>,
    reply: FastifyReply
) {
    try {
        await deleteDoctor(request.params.id);
        return reply.code(200).send([]);
    } catch (e) {
        return reply.code(500).send(e);
    }
}


export async function searchDorctorHandle(
    request: FastifyRequest<{ Params: SearchParams }>,
    reply: FastifyReply
) {
    try {

        let result;

        result = await showDoctorByCRM(request.params.key);

        if (!result) result = await showDoctorByName(request.params.key);

        return reply.code(200).send(result);

    } catch (e) {
        return reply.code(500).send(e);
    }
}