import React from 'react';
import Hero from '@/components/hero/hero';
import ContentBlock from '@/components/blocks/content-block';
import Heading from '@/components/blocks/heading';
import ProjectCard from '@/components/blocks/project-card';
import { MotionContainer, MotionBlock } from '@/components/blocks/motion-blocks';
import Socials from '@/components/blocks/socials';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { routes } from '@/lib/routes/routes';
import { PROJECTS } from '@/lib/content/projects';

export default function Homepage() {
    return (
        <MotionContainer as="div">
            <MotionBlock>
                <Hero />
            </MotionBlock>

            <MotionBlock>
                <ContentBlock title="About">
                    <p className="md:w-10/12 mx-auto text-pretty">
                        I'm a self-taught frontend web developer. My web development journey began with my Content Admin. role, where I managed websites using Adobe Experience Manager (AEM). Picking up HTML, CSS, JS & Bootstrap, I found myself wanting to do more. I chose React simply because I found it fun. I enjoyed how easy it is and how much control I have over a project. I enjoy coding -  both the successes and the faliures. But the successes a lot more for sure.
                    </p>
                    <div className="flex justify-center md:justify-end w-full">
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
                    ctaText="See All"
                    href={routes.projects()}
                />
            </MotionBlock>

            <MotionBlock as='section' className="utility-project-grid">
                {PROJECTS.filter(t => t.tag.includes("Featured")).map((card) => (
                    <ProjectCard
                        key={card.title}
                        thumbnail={card.thumbnail}
                        title={card.title}
                        devType={card.devType}
                        desc={card.desc}
                        images={card.images}
                        slug={card.slug}
                    />
                ))}
            </MotionBlock>

            <MotionBlock as="section" className="bg-lime-400 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-25 xl:gap-125 px-4 md:px-6 py-6 rounded-md">
                <div className="flex-1 text-center md:text-start">
                    <h2 className="text-[clamp(3rem,5vw,6rem)] text-gray-800">Get in Touch</h2>
                    <p>If you are interested in my work or want to provide feedback about this website, you're welcome to say hi!</p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-start">
                    <p>Why not reach out or chekc out my stuff?</p>
                    <Socials />
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
