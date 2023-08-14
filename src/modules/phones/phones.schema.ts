import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const phoneCore = {
    number: z.string().min(10).max(11)
}


const phoneCreateSchema = z.object({
    ...phoneCore
})

const phoneCreateManySchema = z.array(
    z.object({
        ...phoneCore,
        doctor_id: z.number()
    })
)

export const { schemas: phonesSchemas, $ref } = buildJsonSchemas(
    {
        phoneCreateSchema
    },
    { $id: "phonesSchemas" }
);

export type CreatePhoneInput = z.infer<typeof phoneCreateSchema>;
export type CreateManyPhoneInput = z.infer<typeof phoneCreateManySchema>;