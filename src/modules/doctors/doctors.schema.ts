import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const crmCore = {
    number: z.string().min(11).max(11)
}

const phonesCore = {
    number: z.string().min(11).max(11)
}

const doctorCore = {
    name: z.string().min(3),
    crm: z.object({
        ...crmCore
    }),
    phones: z.array(
        z.object({
            ...phonesCore
        })
    ),
    specialty_id: z.number().int().positive(),
}

const doctorCreateSchema = z.object({
    ...doctorCore
})

const searchParamsSchema = z.object({
    name: z.string().optional(),
    crm: z.string().optional()
})

const doctorParamsSchema = z.object({
    id: z.number().int().positive(),
})

export const { schemas: doctorSchemas, $ref } = buildJsonSchemas(
    {
        doctorCreateSchema,
        doctorParamsSchema,
        searchParamsSchema
    },
    { $id: "doctorSchemas" }
);

export type CreateDoctorInput = z.infer<typeof doctorCreateSchema>;
export type DoctorParams = z.infer<typeof doctorParamsSchema>;
export type SearchParams = z.infer<typeof searchParamsSchema>;