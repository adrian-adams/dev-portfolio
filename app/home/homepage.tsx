import React from 'react';
import Container from '@/components/blocks/container';
import ContentBlock from '@/components/blocks/content-block';
import Heading from '@/components/blocks/heading';
import ProjectCard from '@/components/blocks/project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { routes } from '@/lib/routes/routes';
import { PROJECT_CARDS } from '@/lib/content/project-cards';

export default function Homepage() {
    return (
        <Container as="div">
            <ContentBlock title="About">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="flex md:justify-end w-full">
                    <Link href={routes.about()} className="">
                        <Button>
                            More...
                        </Button>
                    </Link>
                </div>
            </ContentBlock>
            <Heading
                title="Recent Projects"
                cta
                ctaText="See All"
                href={routes.housewine()}
                target="_blank"
            />
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROJECT_CARDS.filter(t => t.tag.includes("Featured")).map((card) => (
                    <ProjectCard
                        key={card.title}
                        background={card.background}
                        thumbnail={card.thumbnail}
                        title={card.title}
                        devType={card.devType}
                        desc={card.desc}
                        images={card.images}
                        cta
                        href={card.href}
                    />
                ))}
            </section>
            <section className="bg-lime-400 flex flex-col md:flex-row items-center justify-between p-6 rounded-md">
                <div className="max-w-1/4">
                    <h2 className="text-[clamp(3rem,5vw,6rem)]">Get in Touch</h2>
                    <p>If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                    <p>You can find me on Github</p>
                    <Link href={routes.contact()}>
                        <Button>
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </section>
        </Container>
    )
}
