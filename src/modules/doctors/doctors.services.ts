import { getCreatedAt } from "../../libs/getCreatedAt";
import { prisma } from "../../libs/prisma";

export async function createDoctor(input: any) {
    const today = getCreatedAt();
    const doctor = await prisma.doctor.create({
        data: {
            ...input,
            created_at: today
        }
    })

    return doctor;
}

export async function showDoctorById(id: number) {
    const doctor = await prisma.doctor.findUnique({
        where: {
            id
        }
    })
    return doctor;
}

export async function showDoctorByCRM(crm: string) {
    const doctor = await prisma.cRM.findUnique({
        where: {
            number: crm
        },
        include: {
            doctor: true
        }
    });
    return doctor;
}

export async function deleteDoctor(id: number) {
    await prisma.doctor.delete({
        where: {
            id
        }
    })
}