"use client"

import React from 'react'
import { cn } from '@/lib/tailwind/tailwind-cn'
import { motion, Variants } from 'motion/react'

type MotionElements = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'table' | 'header' | 'main'

interface MotionProps {
    children: React.ReactNode
    className?: string
    variants?: Variants
    viewportOnce?: boolean
    viewportAmount?: number
    as?: MotionElements
    id?: string
}

// Parent

const defaultContainerVar: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
            ease: "easeIn"
        }
    }
}

export function MotionContainer({
    as = 'div',
    children,
    className,
    variants = defaultContainerVar,
    viewportOnce = false,
    viewportAmount = 0.3
}: MotionProps) {
    const MotionTag = motion[as];

    return (
        <MotionTag
            className={cn("space-y-6", className)}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: viewportOnce, amount: viewportAmount }}
        >
            {children}
        </MotionTag>
    )
}

// Child

const defaultBlockVar: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 100
        }
    }
}

export function MotionBlock({
    children,
    variants = defaultBlockVar,
    as = 'section',
    className,
    id
}: MotionProps) {
    const MotionTag = motion[as];

    return (
        <MotionTag
            variants={variants}
            initial="hidden"
            whileInView="show"
            className={className}
            id={id}
        >
            {children}
        </MotionTag>
    )
}