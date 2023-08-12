import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../libs/prisma";
import { CreateDoctorInput, DoctorParams, SearchParams } from "./doctors.schema";
import { createDoctor, deleteDoctor, showDoctorByCRM, showDoctorById, showDoctorByName } from "./doctors.services";

export async function listDoctorsHandle() {
    const doctors = await prisma.doctor.findMany({});
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

        const crm = request.params.crm;
        const name = request.params.name;

        if (crm)
            return reply.code(200).send(
                await showDoctorByCRM(crm)
            )

        if (name)
            return reply.code(200).send(
                await showDoctorByName(name)
            )

        return reply.code(200).send([]);

    } catch (e) {
        return reply.code(500).send(e);
    }
}