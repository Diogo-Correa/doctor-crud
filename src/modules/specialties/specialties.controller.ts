import { FastifyReply, FastifyRequest } from "fastify";
import { createSpecialty, deleteSpecialty, listSpecialties } from "./specialties.services";
import { CreateSpecialtyInput, SpecialtyParams } from "./specialties.schema";

export async function listSpecialtyHandle() {
    const specialties = await listSpecialties();
    return specialties;
}

export async function createSpecialtyHandle(
    request: FastifyRequest<{ Body: CreateSpecialtyInput }>,
    reply: FastifyReply
) {
    try {
        const specialty = await createSpecialty(request.body);
        return reply.code(201).send(specialty);
    } catch (e) {
        return reply.code(500).send((e as Error).message);
    }
}

export async function deleteSpecialtyHandle(
    request: FastifyRequest<{ Params: SpecialtyParams }>,
    reply: FastifyReply
) {
    try {
        await deleteSpecialty(Number(request.params.id));
        return reply.code(200).send([]);
    } catch (e) {
        return reply.code(500).send((e as Error).message);
    }
}