import React from 'react'
import DesktopMenu from './desktop-menu';
import { routes } from '@/lib/routes/routes';
import MobileMenu from './mobile-menu';
import BrandLogo from '../blocks/brand-logo';

export const NavItems: { title: string, href: string }[] = [
    { title: "Home", href: routes.home() },
    { title: "About", href: routes.about() },
    { title: "Projects", href: routes.projects() },
    { title: "Contact", href: routes.contact() }
]

export default function Navigation() {
    return (
        <header className="container mx-auto pb-20 pt-5 md:px-10 md:py-5">
            <nav className="flex items-center">
                <DesktopMenu data={NavItems} />
                <MobileMenu data={NavItems} />
            </nav>
        </header>
    )
}
