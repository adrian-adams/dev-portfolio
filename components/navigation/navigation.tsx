import React from 'react'
import DesktopMenu from './desktop-menu'
import { routes } from '@/lib/routes/routes'

const NavMenu: { title: string, href: string }[] = [
    { title: "Home", href: routes.home() },
    { title: "About", href: routes.about() },
    { title: "Projects", href: routes.projects() },
    { title: "Contact", href: routes.contact() }
]

export default function Navigation() {
    return (
        <nav className="px-10 pt-10">
            <DesktopMenu data={NavMenu} />
        </nav>
    )
}
