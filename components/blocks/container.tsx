"use client"

import React from 'react'
import { cn } from '@/lib/tailwind/tailwind-cn'
import { motion, Variants } from 'motion/react'

type MotionElements = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'table' | 'header' | 'main'

interface ContainerProps {
    children: React.ReactNode
    // element: React.ElementType
    className?: string
    variants?: Variants
    viewportOnce?: boolean
    viewportAmount?: number
    as?: MotionElements
}

const defaultContainerVar: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.3
        }
    }
}

export default function Container({
    // element: Block = 'div', 
    as = 'section',
    children,
    className,
    variants = defaultContainerVar,
    viewportOnce = true,
    viewportAmount = 0.3
}: ContainerProps) {
    const MotionTag = motion[as];

    return (
        <MotionTag
            className={cn(
                "w-full space-y-4",
                className
            )}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: viewportOnce, amount: viewportAmount }}
        >
            {children}
        </MotionTag>
    )
}
