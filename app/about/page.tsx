import React from 'react'
import ContentBlock from '@/components/blocks/content-block';
import Heading from '@/components/blocks/heading';
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

export default function About() {
    return (
        <MotionContainer as="div">
            <MotionBlock>
                <ContentBlock title="About" />
            </MotionBlock>
            <MotionBlock className="grid grid-cols-1 md:grid-cols-5 gap-6 utility-content-block utility-outline-lime">
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
            <div className="w-auto h-full md:col-span-2 rounded-md border-4 border-lime-400 overflow-hidden">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
