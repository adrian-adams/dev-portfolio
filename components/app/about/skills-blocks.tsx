"use client"

import * as React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { TooltipContent, TooltipTrigger, Tooltip } from '@/components/ui/tooltip';
import { stackImages } from '@/lib/content/stack';
import Socials from '@/components/blocks/socials';

export const skillsImage = (src: string) => (
    <div>
        <Image
            src={src}
            alt={src ?? "Skill Stack"}
            width={50}
            height={50}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
        />
    </div>
);

export function SkillsImage({ src, title, tooltip = true }: { src: string, title: string, tooltip?: boolean }) {
    return (
        <>
            {tooltip ?
                <Tooltip>
                    <TooltipTrigger>
                        {skillsImage(src)}
                    </TooltipTrigger>
                    <TooltipContent>
                        {title}
                    </TooltipContent>
                </Tooltip>
                :
                <>
                    {skillsImage(src)}
                </>
            }
        </>
    )
}

export function SkillsStack() {
    const [showSkills, setShowSkills] = React.useState(false);

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div className='utility-content-block utility-outline-lime md:col-span-2'>
                <div className='flex flex-row items-center justify-between pb-2'>
                    <h3 className="text-[clamp(1.5rem,5vw,3rem)] flex-1">Skills</h3>
                    <Button
                        variant="limeTransparent"
                        onClick={() => setShowSkills(!showSkills)}
                    >
                        {
                            showSkills
                                ?
                                <>Hide All Skills</>
                                :
                                <>View All Skills</>
                        }
                    </Button>
                </div>
                <div>
                    {!showSkills ? <SkillsMarquee /> : <SkillsBlock />}
                </div>
            </div>
            <div className='flex items-center justify-center utility-content-block utility-outline-lime'>
                <Socials fill='limeGreen' />
            </div>
        </div>
    )
}

export function SkillsMarquee() {
    return (
        <Marquee autoFill>
            {stackImages.sort((a, b) => a.alt.localeCompare(b.alt)).map((f) => (
                <div key={f.alt} className='mx-2'>
                    <SkillsImage src={f.src} title={f.alt} />
                </div>
            ))}
        </Marquee>
    )
}

export function SkillsBlock() {
    return (
        <ul className='flex flex-wrap items-center justify-center gap-9'>
            {stackImages.sort((a, b) => a.alt.localeCompare(b.alt)).map((f) => (
                <li key={f.alt}>
                    <SkillsImage src={f.src} title={f.alt} />
                </li>
            ))}
        </ul>

    )
}
