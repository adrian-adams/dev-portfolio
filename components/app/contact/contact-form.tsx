"use client"

import React, { useActionState, useEffect, useRef, useState } from 'react'
import Form from 'next/form';
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { submitContactForm, type ContactFormState } from '@/lib/actions/contactForm';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactForm() {
    const intitialState: ContactFormState = { status: "idle" };
    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        intitialState
    );

    const formRef = useRef<HTMLFormElement>(null);
    const [showMessage, setShowMessage] = useState<boolean>(false);

    useEffect(() => {
        if (state.status === "success") {
            formRef.current?.reset();
        }

        if (state.status !== "idle") {
            setShowMessage(true);
            const timer = setTimeout(() => setShowMessage(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [state.status]);

    useEffect(() => {
        if (isPending) setShowMessage(false);
    }, [isPending]);

    return (
        <Form action={formAction} noValidate ref={formRef}>
            <motion.div layout className="overflow-hidden bg-transparent rounded-md shadow shadow-lime-400 border-2 border-white">
                <FieldGroup className="p-4">
                    <Field data-invalid={!!state.errors?.name}>
                        <FieldLabel htmlFor="name" className="font-bold text-lime-400">Name</FieldLabel>
                        <Input id="name" name="name" type="text" className="bg-white" aria-invalid={!!state.errors?.name} />
                        <FieldError errors={state.errors?.name?.map((message) => ({ message }))} />
                    </Field>
                    <Field data-invalid={!!state.errors?.email}>
                        <FieldLabel htmlFor="email" className="font-bold text-lime-400">Email</FieldLabel>
                        <Input id="email" name="email" type="email" className="bg-white" aria-invalid={!!state.errors?.email} />
                        <FieldError errors={state.errors?.email?.map((message) => ({ message }))} />
                    </Field>
                    <Field data-invalid={!!state.errors?.message}>
                        <FieldLabel htmlFor="message" className="font-bold text-lime-400">Message</FieldLabel>
                        <Textarea id="message" name="message" className="bg-white" aria-invalid={!!state.errors?.message} />
                        <FieldError errors={state.errors?.message?.map((message) => ({ message }))} />
                    </Field>
                    <AnimatePresence mode="popLayout">
                        {showMessage && state.message && (
                            <motion.p
                                key="form-message"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.2 }}
                                role="status"
                                className={state.status === "success"
                                    ? "text-sm font-medium text-lime-400"
                                    : "text-sm-font-medium text-destructive"
                                }
                            >
                                {state.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                    <Button type="submit" variant="lime" size="lg" className="text-md font-bold py-6" disabled={isPending}>
                        {isPending ? "Sending..." : "Send"}
                    </Button>
                </FieldGroup>
            </motion.div>
        </Form>
    )
}
