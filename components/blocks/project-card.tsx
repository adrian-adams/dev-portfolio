import React, { Suspense } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Loading from '@/components/blocks/loading'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';
import { Route } from 'next';
import { routes } from '@/lib/routes/routes';
import { MoveRight } from 'lucide-react';

interface ProjectCardProps {
    thumbnail: string
    devType: string
    title: string
    desc: string
    images: {
        src: string
        alt: string
    }[]
    cta?: boolean
    href?: string
    slug: string
}

export default function ProjectCard({
    thumbnail,
    devType,
    title,
    desc,
    images,
    cta = false,
    slug
}: ProjectCardProps) {
    return (
        <Card className="bg-gray-800 py-0 rounded-md hover:outline-2 outline-lime-400 transition duration-200 ease-in">

            <div className="relative h-50">
                {thumbnail && (
                    <Suspense fallback={<Loading color="lime" />}>
                        <Image
                            src={thumbnail ?? "/next.svg"}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover p-4 z-20"
                            loading='eager'
                        />
                    </Suspense>
                )}
            </div>

            <CardHeader className="flex flex-col items-center justify-center flex-1 gap-4">
                <div className="flex flex-row-reverse items-center justify-between w-full">
                    <Badge className="text-lime-400">{devType}</Badge>
                    <CardTitle className="font-caacupe text-white text-[clamp(1rem,5vw,1.5rem)]">{title}</CardTitle>
                </div>
                <CardDescription className="text-white/80 col-span-2 flex-1 line-clamp-5 text-balance">
                    {desc}
                </CardDescription>
            </CardHeader>

            <CardContent className="w-full bg-gray-600 py-4">
                <Marquee pauseOnHover pauseOnClick>
                    {images.sort((a, b) => a.alt.localeCompare(b.alt)).map((img) => (
                        <Tooltip key={img.alt}>
                            <span className="flex items-center justify-center bg-gray-400 p-2 mx-2 h-15 w-15 rounded-2xl border-2 border-lime-400 overflow-hidden">
                                {img.src && (
                                    <TooltipTrigger>
                                        <Image
                                            src={img.src ?? "/next.svg"}
                                            alt={img.alt ?? "House Wine Clone"}
                                            width={50}
                                            height={50}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                            loading='eager'
                                        />
                                    </TooltipTrigger>
                                )}
                                <TooltipContent className="text-lime-400 font-bold outline-2 outline-white">
                                    {img.alt}
                                </TooltipContent>
                            </span>
                        </Tooltip>
                    ))}
                </Marquee>
            </CardContent>

            {cta && (
                <CardFooter className="bg-lime-400 rounded-none">
                    <Link href={routes.projectpage(slug) as Route}>
                        <Button>
                            Veiw Project
                            <MoveRight />
                        </Button>
                    </Link>
                </CardFooter>
            )}

        </Card>
    )
}