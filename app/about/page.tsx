import type { Metadata } from "next";
import ContentBlock from '@/components/blocks/content-block';
import { MotionContainer, MotionBlock } from '@/components/blocks/motion-blocks';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/routes/routes';
import { Route } from 'next';
import * as Skills from '@/components/app/about/skills-blocks'

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
            <MotionBlock className="grid grid-cols-1 gap-6 lg:grid-cols-5 utility-content-block utility-outline-lime">
                <AboutIntro />
            </MotionBlock>
            <MotionBlock>
                <Skills.SkillsStack />
            </MotionBlock>
        </MotionContainer>
    )
}

function AboutIntro() {
    return (
        <>
            <div className="w-auto my-auto overflow-hidden border-4 rounded-md h-fit md:col-span-2 border-lime-400">
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
            <div className="flex flex-col gap-4 md:col-span-3 justify-evenly">
                <p className="text-white/80">
                    <span className="text-4xl font-caacupe">HELLO!</span> My working journey didn't begin with &lt;<span className="text-blue-400">h1</span>&gt;<b>Hello World</b>&lt;/<span className="text-blue-400">h1</span>&gt;, but in retail. Collecting experiencing in staff, inventory & warehouse management, production timelines, logistics and even client management, I was a tiny cat looking for the treat sitting in front of my face.
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
