"use client"

import React from 'react'
import BrandLogo from '../blocks/brand-logo';
import Link from 'next/link';
import { NavItems } from '../navigation/navigation';
import { Route } from 'next';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/tailwind/tailwind-cn'

export default function Footer() {
    const year = new Date().getFullYear();
    const pathname = usePathname();

    return (
        <footer className="h-full text-gray-400 bg-gray-800 px-4 md:px-10 py-6 mt-4 flex flex-col justify-between gap-6 md:gap-16 border-t-4 border-lime-400">
            <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center justify-center">
                    <BrandLogo width="10rem" height="10rem" />
                </div>
                <ul className="flex flex-row items-center justify-center gap-4 md:gap-6">
                    {NavItems.map((nav) => (
                        <li
                            key={nav.title}
                            className={cn(
                                "hover:text-lime-400 underline underline-offset-2",
                                pathname === nav.href && "text-lime-400 font-bold"
                            )}
                        >
                            <Link href={nav.href as Route}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                <p>&copy; {year} <span className="text-white font-caacupe text-2xl">Adrian Adams</span> Portfolio.</p>
                <div className="text-center md:text-start">
                    <p className="inline">Site design taken from community Figma: </p>
                    <Link
                        href="https://www.figma.com/design/dpZns8D1z3fSqPqv4FgROT/Portfolio--Community-?node-id=1-734&t=bnA1Xd7QdAOL0Mye-0"
                        target="_blank"
                        className="text-lime-400 underline underline-offset-8 hover:font-bold"
                    >
                        Community Figma
                    </Link>
                </div>
            </section>
        </footer>
    )
}
