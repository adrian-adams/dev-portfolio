"use server"

import { Resend } from "resend";
import { contactFormSchema } from "../zod/contactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
    status: "idle" | "success" | "error"
    message?: string
    errors?: Partial<Record<"name" | "email" | "message", string[]>>
}

export async function submitContactForm(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {

    const parsed = contactFormSchema.safeParse(Object.fromEntries(formData));

    if (!parsed.success) {
        return {
            status: "error",
            errors: parsed.error.flatten().fieldErrors,
        }
    }

    const { name, email, message } = parsed.data;

    const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "adrian.adamsgit@outlook.com",
        replyTo: email,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`
    });

    if (error) {
        console.error("Resend error: ", error);
        return {
            status:"error",
            message: "Something went wrong sending your message. Please try again."
        }
    }

    console.log("Contact form submission:", parsed.data);

    return {
        status: "success",
        message: "Thanks for reaching out - I'll get back to you soon."
    }

}