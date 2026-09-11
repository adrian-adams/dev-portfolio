"use client"

import React, { useState, useEffect } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { Route } from 'next';
import { NavigationProps } from '@/lib/types/custom-types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/tailwind/tailwind-cn';
import BrandLogo from '../blocks/brand-logo';

export default function MobileMenu({ data }: NavigationProps) {
    const pathname = usePathname();
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    useEffect(() => {

        setMenuToggle(false);

    }, [pathname]);

    return (
        <Drawer direction='right' open={menuToggle} onOpenChange={() => setMenuToggle(!menuToggle)}>
            <div className="fixed md:hidden top-0 right-0 backdrop-blur-2xl z-50 bg-black rounded-xl p-2 w-full border-b border-lime-400">
                <div className="flex items-center justify-between">
                    <BrandLogo width="4rem" height="4rem" />
                    <DrawerTrigger className="border-2 border-white rounded-md p-2">
                        <MenuIcon color='white' />
                    </DrawerTrigger>
                </div>
            </div>
            <DrawerContent>
                <DrawerClose className="w-full flex items-end justify-end p-4">
                    <X />
                </DrawerClose>
                <ul className="flex flex-col justify-center items-center gap-4 h-full">
                    {data.map((item) => (
                        <li
                            key={item.title}
                            className={cn(
                                "text-black text-3xl",
                                pathname === item.href && "text-lime-400 underline underline-offset-4 font-bold"
                            )}
                        >
                            <Link href={item.href as Route}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </DrawerContent>
        </Drawer>
    )
}
