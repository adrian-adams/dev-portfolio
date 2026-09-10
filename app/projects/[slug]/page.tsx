import React from 'react'
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/content/projects';
import { MotionContainer, MotionBlock } from '@/components/blocks/motion-blocks';
import { Button } from '@/components/ui/button';
import { routes } from '@/lib/routes/routes';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) return {}

    return {
        title: project.title,
        description: project.desc,
        openGraph: {
            title: project.title,
            description: project.desc,
            images: [project.thumbnail]
        }
    }
}


export default async function Project({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <MotionContainer>
            <MotionBlock>
                <Link href={routes.projects()}>
                    <Button variant="limeBlack">
                        <MoveLeft />
                        Back
                    </Button>
                </Link>
            </MotionBlock>
            <MotionBlock className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
                    <div className="h-full flex items-center justify-center p-2 bg-white rounded-md">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            width={1000}
                            height={1000}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover rounded-md"
                            loading='eager'
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-6">
                        <div>
                            <h1 className="text-[clamp(2rem,5vw,2.5vw)]">{project.title}</h1>
                            <p className="text-lime-400">{project.devType}</p>
                        </div>
                        <p className="text-white/80">{project.desc}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl text-center md:text-start">Tech Stack</h2>
                    <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        {project.images.map((img) => (
                            <li key={img.alt} className="flex items-center justify-center bg-gray-500 p-1.5 h-12 w-12 rounded-md">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={40}
                                    height={40}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                    loading='eager'
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </MotionBlock>
            <MotionBlock>
                <h2 className="text-lime-400 text-[clamp(2rem,5vw,3rem)]">Main Features</h2>
            </MotionBlock>
        </MotionContainer>
    )
}
