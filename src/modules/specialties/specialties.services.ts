import { getCreatedAt } from "../../libs/getCreatedAt";
import { prisma } from "../../libs/prisma";
import { CreateSpecialtyInput } from "./specialties.schema";

export async function listSpecialties() {
    const specialties = await prisma.specialty.findMany({});
    return specialties;
}

export async function createSpecialty(input: CreateSpecialtyInput) {
    const today = getCreatedAt();
    const specialty = await prisma.specialty.create({
        data: {
            ...input,
            created_at: today
        }
    });

    return specialty;
}

export async function deleteSpecialty(id: number) {
    await prisma.specialty.delete({
        where: {
            id
        }
    })
}