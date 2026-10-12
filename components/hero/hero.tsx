import React from 'react'
import Marquee from 'react-fast-marquee'
import { stackImages, StackImagesProps } from '@/lib/content/stack'

interface HeroMarqueeeProps {
    data: Pick<StackImagesProps, 'alt'>[]
    direction?: "left" | "right" | "up" | "down";
    className?: string
    sliceStart?: number
    sliceEnd?: number
}

const marqueeText = stackImages.filter(i => i.alt);

export default function Hero() {
    // const MarqueeEl: HeroMarqueeProps[] = [
    //     { stack: "React" },
    //     { stack: "Nextjs" },
    //     { stack: "Tailwind" },
    //     { stack: "Shadcn" },
    //     { stack: "Zod" },
    //     { stack: "Zustand" },
    //     { stack: "Github" },
    //     { stack: "Swiper" },
    //     { stack: "GSAP" },
    //     { stack: "MongoDB" },
    //     { stack: "Mongoose" },
    //     { stack: "Firebase" },
    //     { stack: "Google" },
    //     { stack: "Bootstrap" },
    //     { stack: "Figma" },
    //     { stack: "Hygraph" },
    //     { stack: "Sanity.io" },
    //     { stack: "Next Auth" },
    //     { stack: "Next-Intl" },
    //     { stack: "Vite" }
    // ];

    return (
        <div className="h-[calc(100vh-75vw)] md:h-[calc(100vh-7.5vw)] flex flex-col items-center justify-between pb-10 overflow-hidden">
            <HeroMarquee
                data={marqueeText}
                sliceStart={0}
                sliceEnd={Math.ceil(marqueeText.length / 2)}
                className="rotate-6"
            />
            <div className="w-full text-center text-lime-400">
                <h1 className="text-[clamp(4rem,20vw,12rem)] leading-16 sm:leading-20 md:leading-26 antialiased">
                    <span className="block text-[clamp(2rem,20vw,3rem)] text-lime-400">Hello! I'm</span> Adrian
                </h1>
                <p className="pt-6 text-xl">Frontend React Developer</p>
            </div>
            <HeroMarquee
                data={marqueeText}
                sliceStart={Math.ceil(marqueeText.length / 2)}
                direction="right"
                className="-rotate-6"
            />
        </div>
    )
}

function HeroMarquee({ data, direction, className, sliceStart, sliceEnd }: HeroMarqueeeProps) {
    return (
        <Marquee autoFill direction={direction} className={`${className} h-20`}>
            {data.sort((a, b) => a.alt.localeCompare(b.alt)).slice(sliceStart, sliceEnd).map((item) => (
                <p
                    key={item.alt}
                    className="mx-4 text-5xl font-bold font-dosis text-lime-50 text-shadow-lime-200"
                >
                    {item.alt}
                </p>
            ))}
        </Marquee>
    )
}
