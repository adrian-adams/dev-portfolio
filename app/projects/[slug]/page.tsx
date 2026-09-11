import React, { Suspense } from 'react'
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/content/projects';
import { MotionContainer, MotionBlock } from '@/components/blocks/motion-blocks';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { routes } from '@/lib/routes/routes';
import type { Route } from "next";
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import { Monitor, Dot } from 'lucide-react';
import { Github } from '@/components/blocks/socials';
import Thumbnail from '@/components/app/projects/thumbnail';
import Loading from '@/components/blocks/loading';

interface ProjectPageProps {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
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

export default async function Project({ params, searchParams }: ProjectPageProps) {
    const { slug } = await params;
    const { url } = await searchParams;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <MotionContainer>
            <MotionBlock>
                <Link href={routes.projects()}>
                    <Button variant="lime">
                        <MoveLeft />
                        Back
                    </Button>
                </Link>
            </MotionBlock>
            <p className="text-white">{url}</p>
            <MotionBlock as="article" className="space-y-4">
                <header className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6">
                    <Thumbnail>
                        <Suspense fallback={<Loading color="black" />}>
                            {project.thumbnail && (
                                <div className="rounded-md overflow-hidden">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        // width={1000}
                                        // height={1000}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain p-6 z-20"
                                        loading='eager'
                                    />
                                </div>
                            )
                            }
                        </Suspense>
                    </Thumbnail>
                    <div className="flex flex-col justify-center gap-6">
                        <div>
                            <h1 className="text-[clamp(2rem,5vw,2.5vw)]">{project.title}</h1>
                            <p className="text-lime-400">{project.devType}</p>
                        </div>
                        <p className="text-gray-400">{project.desc}</p>
                        <div className="grid grid-cols-2 gap-2 justify-center w-full md:w-fit">
                            <ProjectButtons text="Demo" href={project.demo as Route}>
                                <Monitor />
                            </ProjectButtons>
                            <ProjectButtons text="Github" href={project.github as Route}>
                                <Github fill="black" />
                            </ProjectButtons>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl text-center md:text-start">Tech Stack</h2>
                            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                {project.images.map((img) => (
                                    img.src && (
                                        <Tooltip key={img.alt}>
                                            <TooltipTrigger>
                                                <li className="flex items-center justify-center h-15 w-15 bg-gray-800 p-2.5 rounded-2xl overflow-hidden hover:border-2 hover:border-white transition duration-200 ease-in-out">
                                                    {img.src && (
                                                        <Image
                                                            src={img.src ?? "/next.svg"}
                                                            alt={img.alt ?? "House Wine Clone"}
                                                            width={50}
                                                            height={50}
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            className="object-cover"
                                                            loading='eager'
                                                        />
                                                    )}
                                                </li>
                                            </TooltipTrigger>
                                            <TooltipContent className="text-lime-400 font-bold outline-2 outline-white">
                                                {img.alt}
                                            </TooltipContent>
                                        </Tooltip>
                                    )
                                ))}
                            </ul>
                        </div>
                    </div>
                </header>
            </MotionBlock>
            <MotionBlock className="utility-content-block">
                <h2 className="text-lime-400 text-[clamp(2rem,5vw,3rem)] text-center md:text-start underline underline-offset-4">
                    Main Features
                </h2>
                <Table>
                    <TableBody>
                        {project.features?.map((f) => (
                            <TableRow key={f.title}>
                                <TableCell className="flex flex-row gap-4">
                                    <span className="hidden md:block">
                                        <Dot className="flex items-center justify-center text-white font-extrabold size-10" />
                                    </span>
                                    <div>
                                        <h3 className="text-[clamp(1rem,5vw,1.25rem)] text-lime-400 font-sans font-bold">{f.title}</h3>
                                        <p className="text-white/80 py-2 text-balance">{f.desc}</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </MotionBlock>
        </MotionContainer>
    )
}

function ProjectButtons({ text, href, children }: {
    text: string
    href: string
    children: React.ReactNode
}) {
    return (
        <>
            {href &&
                <Link href={href as Route} target="_blank" >
                    <Button variant="lime" size="lg" className="font-extrabold text-md w-full px-6 py-5">
                        {children}
                        {text}
                    </Button>
                </Link>
            }
        </>
    )
}

