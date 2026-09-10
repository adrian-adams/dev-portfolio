import { routes } from '@/lib/routes/routes'

type DevTypeList = "Frontend" | "Backend" | "Full Stack";
type Tag = "Recent" | "Featured" | "All" | "Projects"
 
interface ProjectCards {
    background?: string
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
    slug?: string
    demo?: string
    github?: string
    features?: {
        title: string
        desc: string
    }[]
}

export const PROJECT_CARDS: ProjectCards[] = [
    { 
        title: "Shared Wines Clone",
        slug: "shared-wines-clone",
        background: "bg-gray-500",
        thumbnail: "/projects/house-wine-1.webp",
        devType: "Full Stack",
        desc: "House Wine (currently Shared Wines) is a clone of a wine collecter/seller site. It features a marketplace where users can send a purchase request, a sign up page, and the option to switch language from English to Nederlands. A combination of Sanity.io & MongoDB helps manage content and user data.",
        tag: ["Featured", "Projects"],
        images: [
            { src: "/stack/zustand.webp", alt: "Zustand" },
            { src: "/stack/nextjs.webp", alt: "Nextjs" },
            { src: "/stack/motion.webp", alt: "Motion" },
            { src: "/stack/shadcn-white.webp", alt: "Shadcn" },
            { src: "/stack/sanity.svg", alt: "Sanity" },
            { src: "/stack/mongodb.svg", alt: "MongoDB" },
            { src: "/stack/zod.svg", alt: "Zod" },
            { src: "/stack/react-email.svg", alt: "React Email" },
            { src: "/stack/next-auth.png", alt: "Next Auth" },
            { src: "/stack/resend-mailer.svg", alt: "Resend" },
            { src: "/stack/next-intl.png", alt: "Next-Intl" },
            { src: "/stack/swiper.webp", alt: "Swiper" },
            { src: "/stack/typescript.webp", alt: "Typescript" },
            { src: "/stack/vscode.webp", alt: "VS Code" }
        ],
        href: routes.housewine()
    },
    { 
        title: "Secret Garden Clone",
        slug: "secret-garden-clone",
        background: "bg-green-100",
        thumbnail: "/projects/sg-clone-1.webp",
        devType: "Frontend",
        desc: "A NextJS clone of a weblow site. This Secret Garden clone feaures a garden store that includes a dummy shopping cart system, store locator and newsletter signup.",
        tag: ["Featured", "Projects"],
        images: [
            { src: "/stack/Hygraph.webp", alt: "Hygraph" },
            { src: "/stack/zustand.webp", alt: "Zustand" },
            { src: "/stack/formspree.webp", alt: "Formspree" },
            { src: "/stack/gsap-green.webp", alt: "GSAP" },
            { src: "/stack/shadcn-white.webp", alt: "Shadcn" },
            { src: "/stack/nextjs.webp", alt: "Nextjs" },
            { src: "/stack/swiper.webp", alt: "Swiper" },
            { src: "/stack/typescript.webp", alt: "Typescript" },
            { src: "/stack/vscode.webp", alt: "VS Code" }
        ],
        href: routes.sgclone()
    },
    {
        title: "Firebase Dashboard",
        slug: "firebase-dashbaord",
        background: "bg-black/50", 
        thumbnail: "/projects/dashboard-1.webp",
        devType: "Full Stack",
        desc: "A dashboard that serves as an alternative to browser bookmarks. Resources can be added, updated and deleted. Resources are divided into different sections/pages, and editing resources is locked behind a role-based login screen.",
        tag: ["Featured", "Projects"],
        images: [
            { src: "/stack/firebase.webp", alt: "Firebase" },
            { src: "/stack/shadcn-white.webp", alt: "Shadcn" },
            { src: "/stack/nextjs.webp", alt: "Nextjs" },
            { src: "/stack/motion.webp", alt: "Motion" },
            { src: "/stack/typescript.webp", alt: "Typescript" },
            { src: "/stack/vscode.webp", alt: "VS Code" }
        ],
        href: routes.dashboard()
    },
    {
        title: "MJML Mailer",
        slug: "mjml-mailer",
        background: "bg-red-500/80", 
        thumbnail: "/projects/dashboard-1.webp",
        devType: "Frontend",
        desc: "A dashboard that serves as an alternative to browser bookmarks. Resources can be added, updated and deleted. Resources are divided into different sections/pages, and editing resources is locked behind a role-based login screen.",
        tag: ["Projects"],
        images: [
            { src: "/stack/mjml-logo.png", alt: "MJML" },
            { src: "/stack/vscode.webp", alt: "VS Code" }
        ],
        href: routes.dashboard()
    },
    {
        title: "GSAP Protfolio",
        slug: "gsap-portfolio",
        background: "bg-green-500", 
        thumbnail: "/projects/dashboard-1.webp",
        devType: "Frontend",
        desc: "A dashboard that serves as an alternative to browser bookmarks. Resources can be added, updated and deleted. Resources are divided into different sections/pages, and editing resources is locked behind a role-based login screen.",
        tag: ["Projects"],
        images: [
            { src: "/stack/shadcn-white.webp", alt: "Shadcn" },
            { src: "/stack/nextjs.webp", alt: "Nextjs" },
            { src: "/stack/typescript.webp", alt: "Typescript" },
            { src: "/stack/vscode.webp", alt: "VS Code" },
            { src: "/stack/Hygraph.webp", alt: "Hygraph" },
            { src: "/stack/gsap-green.webp", alt: "GSAP" },
        ],
        href: routes.dashboard()
    }
]