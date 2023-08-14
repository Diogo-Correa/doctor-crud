import { prisma } from "../../libs/prisma";
import { CreateManyPhoneInput } from "./phones.schema";

export async function createPhone(input: CreateManyPhoneInput) {
    const phones = await prisma.phone.createMany({
        data: [
            ...input
        ],
    })

    return phones;
}

export async function deletePhone(id: number) {
    await prisma.phone.delete({
        where: {
            id: Number(id)
        }
    })
}