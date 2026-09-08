import { routes } from '@/lib/routes/routes'

type DevTypeList = "Frontend" | "Backend" | "Full Stack";
type Tag = "Recent" | "Featured" | "All"
 
interface ProjectCards {
    thumbnail: string
    title: string
    devType: DevTypeList
    desc: string
    tag: Tag[]
    images: {
        src: string
        alt: string
    }[]
    href: string
}

export const PROJECT_CARDS: ProjectCards[] = [
    { 
        thumbnail: "/projects/house-wine-1.webp",
        title: "Shared Wines Clone",
        devType: "Full Stack",
        desc: "House Wine (currently Shared Wines) is a clone of a wine collecter/seller site. It features a marketplace where users can send a purchase request, a sign up page, and the option to switch language from English to Nederlands. A combination of Sanity.io & MongoDB helps manage content and user data.",
        tag: ["Featured"],
        images: [
            { src: "/stack/zustand.webp", alt: "Zustand" },
            { src: "/stack/nextjs.webp", alt: "Nextjs" },
            { src: "/stack/motion.webp", alt: "Motion" },
            { src: "/stack/shadcn-white.webp", alt: "Shadcn" }
        ],
        href: routes.housewine()
    },
    { 
        thumbnail: "/projects/sg-clone-1.webp",
        title: "Secret Garden Clone",
        devType: "Full Stack",
        desc: "A NextJS clone of a weblow site. This Secret Garden clone feaures a garden store that includes a dummy shopping cart system, store locator and newsletter signup.",
        tag: ["Featured"],
        images: [
            { src: "/stack/zustand.webp", alt: "zustand-3" },
            { src: "/stack/zustand.webp", alt: "zustand-4" }
        ],
        href: routes.sgclone()
    },
    { 
        thumbnail: "/projects/sg-clone-1.webp",
        title: "Dashboard",
        devType: "Full Stack",
        desc: "A NextJS clone of a weblow site. This Secret Garden clone feaures a garden store that includes a dummy shopping cart system, store locator and newsletter signup.",
        tag: ["Featured"],
        images: [
            { src: "/stack/zustand.webp", alt: "zustand-3" },
            { src: "/stack/zustand.webp", alt: "zustand-4" }
        ],
        href: routes.dashboard()
    }
]