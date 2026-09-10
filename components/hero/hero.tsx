import React from 'react'
import Marquee from 'react-fast-marquee'

interface HeroMarqueeProps {
    stack: string
    className?: string
}

interface HeroMarqueeData {
    data: HeroMarqueeProps[]
    direction?: "left" | "right" | "up" | "down";
    className?: string
    sliceStart?: number
    sliceEnd?: number
}

export default function Hero() {
    const MarqueeEl: HeroMarqueeProps[] = [
        { stack: "React" },
        { stack: "Nextjs" },
        { stack: "Tailwind" },
        { stack: "Shadcn" },
        { stack: "Zod" },
        { stack: "Zustand" },
        { stack: "Github" },
        { stack: "Swiper" },
        { stack: "GSAP" },
        { stack: "MongoDB" },
        { stack: "Mongoose" },
        { stack: "Firebase" },
        { stack: "Google" },
        { stack: "Bootstrap" },
        { stack: "Figma" },
        { stack: "Hygraph" },
        { stack: "Sanity.io" },
        { stack: "Next Auth" },
        { stack: "Next-Intl" },
        { stack: "Vite" }
    ];

    return (
        <div className="h-[calc(100vh-7.5vw)] flex flex-col items-center justify-between py-10 overflow-hidden">
            <HeroMarquee
                data={MarqueeEl}
                sliceStart={0}
                sliceEnd={Math.ceil(MarqueeEl.length / 2)}
                className="rotate-6"
            />
            <div className="text-lime-400 text-center w-full">
                <h1 className="text-[clamp(4rem,20vw,12rem)] leading-16 sm:leading-20 md:leading-26">
                    <span className="block text-[clamp(2rem,20vw,3rem)]">Hello! I'm</span> Adrian
                </h1>
                <p className="text-xl pt-6">Frontend React Developer</p>
            </div>
            <HeroMarquee
                data={MarqueeEl}
                sliceStart={Math.ceil(MarqueeEl.length / 2)}
                direction="right"
                className="-rotate-6"
            />
        </div>
    )
}

function HeroMarquee({ data, direction, className, sliceStart, sliceEnd }: HeroMarqueeData) {
    return (
        <Marquee autoFill direction={direction} className={`${className} overflow-visible h-20`}>
            {data.sort((a, b) => a.stack.localeCompare(b.stack)).slice(sliceStart, sliceEnd).map((item) => (
                <p
                    key={item.stack}
                    className={`${item.className} font-dosis font-bold text-lime-50 text-5xl mx-4 text-shadow-lime-200`}
                >
                    {item.stack}
                </p>
            ))}
        </Marquee>
    )
}
