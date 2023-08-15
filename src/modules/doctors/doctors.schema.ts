import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const doctorCore = {
    name: z.string().min(3).nonempty("O nome é obrigatório.").regex(/^[A-Za-z\s]+$/i, "Apenas letras são permitidas."),
    specialty_id: z.number(),
    crm: z.object({
        number: z.string()
    }),
}

const doctorCreateSchema = z.object({
    ...doctorCore,
    phones: z.array(
        z.object({
            number: z.string().min(10).max(11).regex(/^\d+$/)
        })
    ),
})

const doctorShowSchema = z.object({
    ...doctorCore,
    id: z.number(),
    specialty: z.object({
        name: z.string()
    }),
    phones: z.array(
        z.object({
            id: z.number(),
            number: z.string()
        })
    ),
})

const doctorUpdateSchema = z.object({
    ...doctorCore,
})

const doctorParamsSchema = z.object({
    id: z.number(),
})

export const { schemas: doctorSchemas, $ref } = buildJsonSchemas(
    {
        doctorCreateSchema,
        doctorParamsSchema,
        doctorUpdateSchema,
        doctorShowSchema
    },
    { $id: "doctorSchemas" }
);

export type CreateDoctorInput = z.infer<typeof doctorCreateSchema>;
export type DoctorParams = z.infer<typeof doctorParamsSchema>;