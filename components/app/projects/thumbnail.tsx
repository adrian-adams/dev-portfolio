"use client"

import React, { useState } from 'react'
import type { LucideIcon } from "lucide-react";
import Marquee from 'react-fast-marquee';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Thumbnail({ children, showControls = true }: { children: React.ReactNode, showControls?: boolean }) {
    const [playIcons, setPlayIons] = useState<boolean>(false);
    const iconPath = '/projects/thumbnail/';

    return (
        <div className="h-full flex items-center justify-center bg-gray-200 rounded-md relative">
            <div className="flex flex-col justify-evenly items-center gap-4 overflow-hidden h-full">
                <MarqueeThumbnail src={`${iconPath}code.png`} play={playIcons} />
                <MarqueeThumbnail src={`${iconPath}braces.png`} play={playIcons} dir="left" />
                <MarqueeThumbnail src={`${iconPath}bug.png`} play={playIcons} />
                <MarqueeThumbnail src={`${iconPath}square-terminal.png`} play={playIcons} dir="left" />
                <MarqueeThumbnail src={`${iconPath}git-branch.png`} play={playIcons} />
                <MarqueeThumbnail src={`${iconPath}code-xml.png`} play={playIcons} dir="left" />
            </div>
            {children}
            {showControls && (
                <Button
                    onClick={() => setPlayIons(!playIcons)}
                    className="z-30 absolute bottom-0 right-0 m-5"
                    size="lg"
                >
                    {playIcons ? "Pause" : "Play"}
                </Button>
            )}
        </div>
    )
}

function MarqueeThumbnail({ icon: Icon, dir = "right", play, src }: {
    icon?: LucideIcon,
    dir?: "right" | "left" | "up" | "down"
    play?: boolean
    src: string
}) {

    return (
        <Marquee autoFill play={play} direction={dir}>
            <Image
                src={src}
                alt="Icon"
                width={25}
                height={25}
                className="mx-2 object-fill"
            />
            {Icon && (
                <Icon className="mx-2 size-[clamp(1rem,5vw,2.5rem)]" />
            )}
        </Marquee>
    )
}
