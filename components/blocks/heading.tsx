import React from 'react'
import { cn } from '@/lib/tailwind/tailwind-cn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from 'next';
import { HrefTarget } from '@/lib/types/custom-types';
import { MoveRight } from 'lucide-react';

interface HeadingBlockProps {
    element?: React.ElementType
    className?: string
    title?: string
    cta?: boolean
    href?: string
    ctaText?: string
    target?: HrefTarget
}

export default function Heading({ element: Heading = "h2", title, className, cta = false, href, ctaText, target = "_self" }: HeadingBlockProps) {
    return (
        <div className={cn(
            "bg-gray-800 rounded-md flex justify-center p-6",
            cta && "flex-col md:flex-row items-center justify-between gap-4",
            className
        )}>
            <Heading className="font-caacupe text-white text-[clamp(2rem,5vw,2.5rem)]">
                {title}
            </Heading>
            {cta && (
                <Link href={href as Route ?? "/"} target={target}>
                    <Button>
                        {ctaText}
                        <MoveRight />
                    </Button>
                </Link>
            )}
        </div>
    )
}
