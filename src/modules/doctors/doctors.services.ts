import { getCreatedAt } from "../../libs/getCreatedAt";
import { prisma } from "../../libs/prisma";
import { CreateDoctorInput } from "./doctors.schema";

export async function listDoctors() {
    const doctors = await prisma.doctor.findMany({
        include: {
            specialty: true,
            crm: true
        },
        orderBy: {
            name: "asc"
        }
    });
    return doctors;
}

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
        },
        include: {
            phones: true,
            crm: true
        }
    })
    return doctor;
}

export async function showDoctorById(id: number) {
    const doctor = await prisma.doctor.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            crm: true,
            phones: true,
            specialty: true
        }
    })
    return doctor;
}

export async function updateDoctor(id: number, input: CreateDoctorInput) {
    const { phones, crm, ...rest } = input;
    const doctor_id = Number(id);

    const doctor = await prisma.doctor.update({
        where: {
            id: doctor_id
        },
        data: {
            ...rest,
            crm: {
                update: {
                    data: {
                        ...crm
                    }
                }
            },
        },
        include: {
            crm: true,
            phones: true,
            specialty: true
        }
    })
    return doctor;
}

export async function deleteDoctor(id: number) {
    await prisma.doctor.delete({
        where: {
            id: Number(id)
        }
    })
}