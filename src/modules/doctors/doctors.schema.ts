import { z } from "zod";

const doctorCore = {
    name: z.string().min(3),
    crm: z.string().min(6).max(6),

}