import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const specialtyCore = {
    name: z.string().min(3)
};

const specialtyCreateSchema = z.object({
    ...specialtyCore
});

const specialtyParamsSchema = z.object({
    id: z.number(),
})

export const { schemas: specialtySchemas, $ref } = buildJsonSchemas(
    {
        specialtyCreateSchema,
        specialtyParamsSchema
    },
    { $id: "specialtySchemas" }
);

export type CreateSpecialtyInput = z.infer<typeof specialtyCreateSchema>;
export type SpecialtyParams = z.infer<typeof specialtyParamsSchema>;