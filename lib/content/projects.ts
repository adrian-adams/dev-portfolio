import { routes } from '@/lib/routes/routes'
import { title } from 'process'

type DevTypeList = "Frontend" | "Backend" | "Full Stack" | "Mailer"
type Tag = "Recent" | "Featured" | "All" | "Projects"
 
interface Projects {
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
    slug: string
    demo?: string
    github?: string
    features?: {
        title: string
        desc: string
    }[]
}

function slugify(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

const rawProjects: Omit<Projects, 'slug'>[] = [
    { 
        title: "Shared Wines Clone",
        background: "bg-gray-500",
        thumbnail: "/projects/shared-wines-clone/house-wine-1.webp",
        devType: "Full Stack",
        desc: "House Wine (currently Shared Wines) is a full-stack wine marketplace clone inspired by housewine.nl. Users can browse and filter a wine catalog, submit purchase requests, sign up via credentials or Google, and switch between English and Nederlands. Sanity CMS powers content while MongoDB handles user and order data, with a CI/CD pipeline enforcing lint, type-check, and build gates on every pull request before deploying to Vercel.",
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
        demo: routes.housewine(),
        github: routes.housewineGit(),
        features: [
    {
        title: "URL-driven product filtering",
        desc: "Catalog filters (grape, region, price, etc.) are driven by searchParams rather than client state, keeping filtering server-rendered with results shareable via URL."
    },
    {
        title: "CI/CD with GitHub Actions",
        desc: "Every pull request runs lint, type-check, and build steps before merge, with branch protection on master and automatic deployment to Vercel."
    },
    {
        title: "Secure auth with NextAuth",
        desc: "Supports credentials and Google OAuth sign-in, with security-sensitive fields like auth provider always set server-side rather than trusted from client input."
    },
    {
        title: "CMS-driven content pipeline",
        desc: "Product data flows from Sanity CMS through a typed API-to-UI mapping layer, decoupling the CMS schema from how products are displayed in the app."
    },
    {
        title: "Transactional email with Resend",
        desc: "Order confirmation and notification emails are built with React Email and sent via Resend, using Promise.allSettled so one failed send doesn't block the other."
    },
    {
        title: "Next-Intl language toggle",
        desc: "Users can switch between English and Nederlands/Dutch, with English as the default locale."
    },
    {
        title: "Cart state with Zustand",
        desc: "Cart totals and item counts are derived from source data at read-time rather than stored in state."
    },
    {
        title: "CSV-driven data import pipeline",
        desc: "Product, store, and image data is imported via a scripted pipeline with deterministic IDs, enabling easy re-imports without duplicating records."
    }
]
    },
    { 
        title: "Secret Garden Clone",
        background: "bg-green-100",
        thumbnail: "/projects/sg-clone-1.webp",
        devType: "Frontend",
        desc: "Secret Garden is a frontend recreation of a modern garden retail experience, built with Next.js and a headless CMS. The project combines dynamic product content, a client-side shopping cart, responsive layouts, and GSAP-powered animation to recreate the feel of a production e-commerce site while exploring modern frontend architecture.",
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
        demo: routes.sgclone(),
        github: routes.sgcloneGit(),
        features: [
    {
        title: "Headless CMS Integration",
        desc: "Integrated Hygraph with GraphQL to manage products, page content, images, and reusable website content."
    },
    {
        title: "Product & Cart Experience",
        desc: "Built an interactive product selection and dummy shopping cart using Zustand, including product variations, quantities, and cart state."
    },
    {
        title: "GSAP Animations",
        desc: "Used GSAP to create smooth page transitions, scroll-based effects, and interactive animations throughout the site."
    },
    {
        title: "Responsive Frontend",
        desc: "Recreated the original site's visual experience with responsive layouts designed to work across desktop, tablet, and mobile."
    },
    {
        title: "Reusable Components",
        desc: "Built the interface from reusable Next.js and shadcn/ui components to keep the project modular and easier to maintain."
    },
    {
        title: "Interactive UI",
        desc: "Added interactive elements including product drawers, navigation, sliders, store locations, newsletter forms, and cart interactions."
    },
    {
        title: "Swiper Integration",
        desc: "Implemented Swiper for responsive product and content sliders, including touch-friendly interactions on smaller screens."
    },
    {
        title: "TypeScript",
        desc: "Used TypeScript to define component props, product data, cart state, and CMS-driven content throughout the project."
    }
]
    },
    {
        title: "Firebase Dashboard",
        background: "bg-black/50", 
        thumbnail: "/projects/firebase-dashboard/dashboard-1.webp",
        devType: "Full Stack",
        desc: "A custom resource management dashboard built with React, Firebase, shadcn/ui, and Motion. The application allows authenticated users to create, manage, search, and filter a collection of development resources through a responsive interface.",
        tag: ["Featured", "Projects"],
        images: [
            { src: "/stack/firebase.webp", alt: "Firebase" },
            { src: "/stack/shadcn-white.webp", alt: "Shadcn" },
            { src: "/stack/nextjs.webp", alt: "Nextjs" },
            { src: "/stack/motion.webp", alt: "Motion" },
            { src: "/stack/typescript.webp", alt: "Typescript" },
            { src: "/stack/vscode.webp", alt: "VS Code" }
        ],
        demo: routes.dashboard(),
        github: routes.dashboardGit(),
        features: [
            {
                title: "Firebase Firestore",
                desc: "Integrated Firestore as the project's backend database for storing and managing resource data."
            },
            {
                title: "CRUD Functionality",
                desc: "Built create, read, update, and delete functionality for managing resources directly through the dashboard."
            },
            {
                title: "Search & Filtering",
                desc: "Added dynamic search and tag-based filtering to make large collections of resources easier to navigate."
            },
            {
                title: "Authentication",
                desc: "Implemented authenticated access and role-based functionality to control access to dashboard features."
            },
            {
                title: "Reusable Components",
                desc: "Structured the dashboard around reusable React components and custom hooks to keep data handling and UI logic maintainable."
            },
            {
                title: "Animated UI",
                desc: "Used Motion to add subtle transitions and interactions throughout the dashboard, improving feedback and overall usability."
            },
            {
                title: "shadcn/ui",
                desc: "Used shadcn/ui components to build a consistent interface while retaining control over the underlying styling and component behaviour."
            }
        ]
    },
    {
        title: "MJML Mailer",
        background: "bg-red-500/80", 
        thumbnail: "/projects/mjml-mailer/mjml-mailer-1.webp",
        devType: "Mailer",
        desc: "A responsive HTML email template built with MJML, designed to produce consistent layouts across email clients while keeping the source code maintainable and component-based.",
        tag: ["Projects"],
        images: [
            { src: "/stack/mjml-logo.png", alt: "MJML" },
            { src: "/stack/vscode.webp", alt: "VS Code" }
        ],
        demo: routes.sgmailer(),
        github: routes.sgmailerGit(),
        features: [
            {
                title: "Responsive Email Design",
                desc: "Created responsive email layouts that adapt across desktop and mobile email clients."
            },
            {
                title: "MJML Components",
                desc: "Used MJML's component-based syntax to build reusable sections and simplify the development of complex email layouts."
            },
            {
                title: "Email Client Compatibility",
                desc: "Worked within the limitations of HTML email to create layouts that remain reliable across different email clients and rendering engines."
            },
            {
                title: "Reusable Sections",
                desc: "Structured common email elements into reusable sections to make future mailers easier to build and maintain."
            },
            {
                title: "HTML Email Output",
                desc: "Used MJML to generate production-ready HTML while handling the table-based layouts and inline styles required by many email clients."
            }
        ]
    },
    {
        title: "GSAP Protfolio",
        background: "bg-green-500", 
        thumbnail: "/projects/gsap-portfolio/gsap-port-1.webp",
        devType: "Frontend",
        desc: "A Next.js developer portfolio focused on advanced frontend animation, using GSAP and ScrollTrigger to create reusable, scroll-driven section transitions, interactive effects, and layered page reveals.",
        tag: ["Projects"],
        images: [
            { src: "/stack/shadcn-white.webp", alt: "Shadcn" },
            { src: "/stack/nextjs.webp", alt: "Nextjs" },
            { src: "/stack/typescript.webp", alt: "Typescript" },
            { src: "/stack/vscode.webp", alt: "VS Code" },
            { src: "/stack/Hygraph.webp", alt: "Hygraph" },
            { src: "/stack/gsap-green.webp", alt: "GSAP" }
        ],
        demo: routes.gsapportfolio(),
        github: routes.gsapportfolioGit(),
        features: [
            {
                title: "GSAP-Powered Transitions",
                desc: "Built the portfolio around GSAP-powered section transitions, creating a fluid visual journey between the Hero, Skills, Projects, and other sections."
            },
            {
                title: "Scroll-Driven Animation",
                desc: "Used GSAP ScrollTrigger to control animations based on scroll position, creating dynamic reveals, movement, and transitions throughout the site."
            },
            {
                title: "Pinned Sections",
                desc: "Used pinned sections to create controlled animation sequences, allowing content and transitions to unfold while the surrounding page remains fixed."
            },
            {
                title: "Reusable Animation Hooks",
                desc: "Created reusable React hooks for common GSAP behaviours such as fade-ins, from-to animations, scrolling effects, hover interactions, and click animations."
            },
            {
                title: "Layered Section Reveals",
                desc: "Combined overlapping elements, directional movement, and layered reveals to create cinematic transitions between major portfolio sections."
            }
        ]
    },
    
]

export const PROJECTS: Projects[] = rawProjects.map(p => ({
    ...p,
    slug: slugify(p.title)
}));