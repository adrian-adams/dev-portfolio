import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Route } from 'next';
import { routes } from '@/lib/routes/routes';

interface ProjectCardProps {
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
    thumbnail,
    devType,
    title,
    desc,
    images,
    cta = false,
    href
}: ProjectCardProps) {
    return (
        <Card className="bg-gray-800 pt-0 rounded-md">
            {thumbnail && (
                <div className="h-50 relative bg-white">
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
            <CardContent className="bg-gray-600 py-2">
                <ul className="flex flex-row items-center gap-2">
                    {images.sort((a, b) => a.alt.localeCompare(b.alt)).map((img) => (
                        <li key={img.alt}>
                            {img.src && (
                                <Image
                                    src={img.src ?? ""}
                                    alt={title}
                                    width={50}
                                    height={50}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </CardContent>
            {cta && (
                <CardFooter className="bg-lime-400">
                    <Link href={href as Route ?? routes.home()} target="_blank">
                        <Button>
                            Veiw Project
                        </Button>
                    </Link>
                </CardFooter>
            )}
        </Card>
    )
}
