"use client"

import React from 'react'
import { NavigationProps } from '@/lib/types/custom-types'
import Link from 'next/link'
import { Route } from 'next'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/tailwind/tailwind-cn'

export default function DesktopMenu({ data }: NavigationProps) {
    const pathname = usePathname();

    return (
        <div className="hidden md:block">
            <ul className="flex flex-row items-center justify-center gap-10">
                {data.map((item) => (
                    <li
                        key={item.title}
                        className={cn(
                            "text-white/80",
                            pathname === item.href && "text-lime-400 underline underline-offset-4"
                        )}
                    >
                        <Link href={item.href as Route}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
