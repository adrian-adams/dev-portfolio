"use client"

import React, { useState } from 'react';
import ContentBlock from '@/components/blocks/content-block';
import { MotionBlock, MotionContainer } from '@/components/blocks/motion-blocks';
import ContactForm from '@/components/app/contact/contact-form';

export default function Contact() {
    return (
        <MotionContainer>
            <MotionBlock>
                <ContentBlock title='Contact' element="h1" />
            </MotionBlock>
            <MotionBlock as="div" className="utility-content-block grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="text-center md:text-start">
                    <h2 className="text-[clamp(3rem,5vw,6rem)] text-white">Get in Touch</h2>
                    <p className="text-gray-400 md:max-w-xs">If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.</p>
                </section>
                <section>
                    <ContactForm />
                </section>
            </MotionBlock>
        </MotionContainer>
    )
}
