import * as z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is requred"),
    email: z.email().min(1),
    message: z.string().min(1, "A message is required")
});

export type contactFormPayload = z.infer<typeof contactFormSchema>