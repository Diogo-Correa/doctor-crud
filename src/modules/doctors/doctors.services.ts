import { getCreatedAt } from "../../libs/getCreatedAt";
import { prisma } from "../../libs/prisma";
import { CreateDoctorInput } from "./doctors.schema";

export async function createDoctor(input: CreateDoctorInput) {
    const today = getCreatedAt();
    const { phones, crm, ...rest } = input;

    const doctor = await prisma.doctor.create({
        data: {
            ...rest,
            created_at: today,
            phones: {
                createMany: {
                    data: [
                        ...phones
                    ]
                }
            },
            crm: {
                create: {
                    ...crm,
                    created_at: today
                }
            }
        }
    })
    return doctor;
}

export async function showDoctorById(id: number) {
    const doctor = await prisma.doctor.findUnique({
        where: {
            id
        },
        include: {
            crm: true,
            phones: true,
            specialty: true
        }
    })
    return doctor;
}

export async function showDoctorByName(name: string) {
    const doctor = await prisma.doctor.findMany({
        where: {
            name
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