import React from 'react';
import type { Metadata } from "next";
import ContentBlock from '@/components/blocks/content-block';
import { MotionContainer, MotionBlock } from '@/components/blocks/motion-blocks';
import Socials from '@/components/blocks/socials';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/routes/routes';
import { Route } from 'next';
import Marquee from 'react-fast-marquee';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
    title: "About Me",
    description: "Hello! My name is Adrian, a React developer."
}

export default function About() {
    return (
        <MotionContainer as="div">
            <MotionBlock>
                <ContentBlock title="About" element="h1" />
            </MotionBlock>
            <MotionBlock className="grid grid-cols-1 lg:grid-cols-5 gap-6 utility-content-block utility-outline-lime">
                <AboutIntro />
            </MotionBlock>
            <MotionBlock className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4">
                <div className="utility-content-block utility-outline-lime py-2 lg:col-span-2">
                    <h3 className="text-[clamp(1.5rem,5vw,3rem)]">Skills</h3>
                    <SkillsMarquee />
                </div>
                <div className="utility-content-block utility-outline-lime h-full flex items-center justify-center">
                    <Socials fill="limeGreen" />
                </div>
            </MotionBlock>
        </MotionContainer>
    )
}

function AboutIntro() {

    return (
        <>
            <div className="w-auto h-fit my-auto md:col-span-2 rounded-md border-4 border-lime-400 overflow-hidden">
                <Image
                    src="/content/about-me.gif"
                    alt="About Me"
                    width={1000}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-fill"
                    loading='eager'
                />
            </div>
            <div className="md:col-span-3 flex flex-col justify-evenly gap-4">
                <p className="text-white/80">
                    <span className="font-caacupe text-4xl">HELLO!</span> My working journey didn't begin with &lt;<span className="text-blue-400">h1</span>&gt;<b>Hello World</b>&lt;/<span className="text-blue-400">h1</span>&gt;, but in retail. Whilst collecting experience in staff, inventory & warehouse management, production timelines, logistics and even client management, I was a tiny cat looking for the treat sitting in front of my face.
                    <br /> <br />
                    Discovering the labyrinth of coding and its very inclusive community gave me the nudge I needed to expand my skills and build projects that, after many hours and much balding, made me proud.
                    <br /> <br />
                    I now focus on growing my frontend skills and technical stack, with the goal of contributing what I have to wherever I happen to go.
                </p>
                <Link href={routes.resume() as Route ?? routes.home()} target="_blank">
                    <Button variant="limeTransparent">
                        View Resume
                    </Button>
                </Link>
            </div>
        </>
    )
}

function SkillsMarquee() {
    const imagesDirectory = path.join(process.cwd(), 'public/stack');
    const filenames = fs.readdirSync(imagesDirectory);
    const imageFiles = filenames.filter(file =>
        /\.(pe?g|png|gif|webp|svg)$/i.test(file)
    );

    return (
        <div className="container">
            <Marquee autoFill>
                {imageFiles.sort((a, b) => a.localeCompare(b)).map((filename) => (
                    <div className="mx-2">
                        <Image
                            src={`/stack/${filename}`}
                            alt={filename}
                            width={50}
                            height={50}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}
