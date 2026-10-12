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
        <Card className="py-0 transition duration-200 ease-in bg-gray-800 rounded-md hover:outline-2 outline-lime-400">

            <div className="relative h-50">
                {thumbnail && (
                    <Suspense fallback={<Loading color="lime" />}>
                        <Image
                            src={thumbnail ?? "/next.svg"}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="z-20 object-cover p-4"
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
                <CardDescription className="flex-1 col-span-2 text-white/80 line-clamp-5 text-balance">
                    {desc}
                </CardDescription>
            </CardHeader>

            <CardContent className="w-full py-4 bg-gray-600">
                <Marquee pauseOnHover pauseOnClick>
                    {images.sort((a, b) => a.alt.localeCompare(b.alt)).map((img) => (
                        <Tooltip key={img.alt}>
                            <span className="flex items-center justify-center p-2 mx-2 overflow-hidden bg-gray-700 border-2 h-15 w-15 rounded-2xl border-lime-400">
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
                                <TooltipContent className="font-bold text-lime-400 outline-2 outline-white">
                                    {img.alt}
                                </TooltipContent>
                            </span>
                        </Tooltip>
                    ))}
                </Marquee>
            </CardContent>

            {cta && (
                <CardFooter className="rounded-none bg-lime-400">
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