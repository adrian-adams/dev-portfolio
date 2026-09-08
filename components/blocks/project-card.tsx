import React from 'react';
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
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';
import { Route } from 'next';
import { routes } from '@/lib/routes/routes';
import { MoveRight } from 'lucide-react';

interface ProjectCardProps {
    background?: string
    thumbnail: string
    devType: string
    title: string
    desc: string
    images: {
        src: string
        alt: string
    }[]
    cta: boolean
    href?: string
}

export default function ProjectCard({
    background = "bg-black",
    thumbnail,
    devType,
    title,
    desc,
    images,
    cta = false,
    href
}: ProjectCardProps) {
    return (
        <Card className="bg-gray-800 pt-0 rounded-md hover:-translate-y-1 transition ease-in-out duration-200">
            {thumbnail && (
                <div className={`${background} h-50 relative bg-[url('/content/skills-bg.webp')] bg-cover bg-center`}>
                    <Image
                        src={thumbnail ?? "/next.svg"}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover p-4"
                    />
                </div>
            )}
            <CardHeader className="flex flex-col items-center justify-center flex-1 gap-4">
                <div className="flex flex-row-reverse items-center justify-between w-full">
                    <Badge className="text-lime-400">{devType}</Badge>
                    <CardTitle className="font-caacupe text-white text-[clamp(1rem,5vw,1.5rem)]">{title}</CardTitle>
                </div>
                <CardDescription className="text-white/80 col-span-2 flex-1">{desc}</CardDescription>
            </CardHeader>
            <CardContent className="w-full bg-gray-600 py-2">
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
                <CardFooter className="bg-lime-400">
                    <Link href={href as Route ?? routes.home()} target="_blank">
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
