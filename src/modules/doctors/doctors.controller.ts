import { FastifyReply, FastifyRequest } from "fastify";
import { CreateDoctorInput, DoctorParams } from "./doctors.schema";
import { createDoctor, deleteDoctor, listDoctors, showDoctorById, updateDoctor } from "./doctors.services";
import { createPhone, deletePhone } from "../phones/phones.services";
import { CreateManyPhoneInput } from "../phones/phones.schema";

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
        return reply.code(201).send(doctor);

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
        return reply.code(201).send(doctor);
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
        return reply.code(201).send([]);
    } catch (e) {
        return reply.code(500).send(e);
    }
}

export async function createManyPhones(
    request: FastifyRequest<{ Body: CreateManyPhoneInput }>,
    reply: FastifyReply
) {
    try {
        const phones = await createPhone(request.body);
        return reply.code(201).send(phones);
    } catch (e) {
        return reply.code(500).send(e);
    }
}

export async function deletePhoneHandle(
    request: FastifyRequest<{ Params: DoctorParams }>,
    reply: FastifyReply
) {
    try {
        await deletePhone(request.params.id);
        return reply.code(201).send([]);
    } catch (e) {
        return reply.code(500).send(e);
    }
}