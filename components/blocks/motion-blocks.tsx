"use client"

import React from 'react'
import { cn } from '@/lib/tailwind/tailwind-cn'
import { motion, Variants } from 'motion/react'

interface MotionProps {
    children: React.ReactNode
    className?: string
    variants?: Variants
    viewportOnce?: boolean
    viewportAmount?: number
    as?: keyof typeof motion;
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
    const MotionTag = motion[as] as React.ElementType;

    return (
        <MotionTag
            className={cn("space-y-6", className)}
            variants={variants}
            // initial="hidden"
            whileInView="show"
            viewport={{ once: viewportOnce, amount: viewportAmount }}
        >
            {children}
        </MotionTag>
    )
}

// Child

/**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */

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
    id,
    viewportOnce = true,
    viewportAmount
}: MotionProps) {
    const MotionTag = motion[as] as React.ElementType;

    return (
        <MotionTag
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: viewportOnce, amount: viewportAmount }}
            className={cn(className)}
            id={id}
        >
            {children}
        </MotionTag>
    )
}