import React from 'react';
import Hero from '@/components/hero/hero';
import ContentBlock from '@/components/blocks/content-block';
import Heading from '@/components/blocks/heading';
import ProjectCard from '@/components/blocks/project-card';
import { MotionContainer, MotionBlock } from '@/components/blocks/motion-blocks';
import Socials from '@/components/blocks/socials';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/lib/routes/routes';
import { Route } from 'next';
import { PROJECT_CARDS } from '@/lib/content/project-cards';

export default function Homepage() {
    return (
        <MotionContainer as="div">
            <MotionBlock>
                <Hero />
            </MotionBlock>

            <MotionBlock>
                <ContentBlock title="About">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="flex md:justify-end w-full">
                        <Link href={routes.about()}>
                            <Button variant="limeBlack">
                                More...
                            </Button>
                        </Link>
                    </div>
                </ContentBlock>
            </MotionBlock>

            <MotionBlock>
                <Heading
                    title="Recent Projects"
                    cta
                    ctaText="See All"
                    href={routes.housewine()}
                    target="_blank"
                />
            </MotionBlock>

            <MotionBlock as='section' className="utility-project-grid">
                {PROJECT_CARDS.filter(t => t.tag.includes("Featured")).map((card) => (
                    <ProjectCard
                        key={card.title}
                        background={card.background}
                        thumbnail={card.thumbnail}
                        title={card.title}
                        devType={card.devType}
                        desc={card.desc}
                        images={card.images}
                    />
                ))}
            </MotionBlock>

            <MotionBlock as="section" className="bg-lime-400 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-25 xl:gap-125 px-4 md:px-6 py-6 rounded-md">
                <div className="flex-1 text-center md:text-start">
                    <h2 className="text-[clamp(3rem,5vw,6rem)]">Get in Touch</h2>
                    <p>If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.</p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4 flex-1">
                    <p>You can find me on Github</p>
                    <Socials />
                    <ul>
                        <li>
                            <Link href={routes.github() as Route} target="_blank">
                                <Image
                                    src="/stack/github-black.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                />
                            </Link>
                        </li>
                    </ul>
                    <Link href={routes.contact()}>
                        <Button variant="limeWhite">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </MotionBlock>
        </MotionContainer>
    )
}
