type ProjectTag =   "Shared Wines" 
                    | "Secret Garden Web" 
                    | "Firebase Dashboard"
                    | "Secret Garden MJML Mailer" 
                    | "GSAP Portfolio"
                    | "Secret Graden React Native App"

export interface StackImagesProps {
    src: string
    alt: string
    projectTag?: ProjectTag[]
}

export const stackImages: StackImagesProps[] = [
    {
        src: "/stack/zustand.webp",
        alt: "Zustand",
        projectTag: ['Shared Wines', 'Secret Garden Web', 'Secret Graden React Native App']
    },
    {
        src: "/stack/nextjs.webp",
        alt: "Nextjs",
        projectTag: ['Shared Wines', 'Secret Garden Web', 'GSAP Portfolio']
    },
    {
        src: "/stack/shadcn-white.webp",
        alt: "Shadcn",
        projectTag: ['Shared Wines', 'Firebase Dashboard', 'GSAP Portfolio', 'Secret Garden Web']
    },
    {
        src: "/stack/sanity.svg",
        alt: "Sanity",
        projectTag: ['Shared Wines']
    },
    {
        src: "/stack/mongodb.svg",
        alt: "MongoDB",
        projectTag: ['Shared Wines']
    }, 
    {
        src: "/stack/zod.svg",
        alt: "Zod",
        projectTag: ['Shared Wines']
    },
    {
        src: "/stack/react-email.webp",
        alt: "React Email",
        projectTag: ['Shared Wines']
    },
    {
        src: "/stack/next-auth.png",
        alt: "Next Auth",
        projectTag: ['Shared Wines']
    }, 
    {
        src: "/stack/resend-mailer.svg",
        alt: "Resend",
        projectTag: ['Shared Wines']
    },
    {
        src: "/stack/next-intl.png",
        alt: "Next-Intl",
        projectTag: ['Shared Wines']
    },
    {
        src: "/stack/swiper.webp",
        alt: "Swiper",
        projectTag: ['Secret Garden Web', 'GSAP Portfolio', 'Shared Wines']
    },
    {
        src: "/stack/hygraph.webp",
        alt: "Hygraph",
        projectTag: ['Secret Garden Web', 'GSAP Portfolio']
    },
    {
        src: "/stack/formspree.webp",
        alt: "Formspree",
        projectTag: ['Secret Garden Web']
    },
    {
        src: "/stack/gsap-green.webp",
        alt: "GSAP",
        projectTag: ['Secret Garden Web', 'GSAP Portfolio']
    },
    {
        src: "/stack/firebase.webp",
        alt: "Firebase",
        projectTag: ['Firebase Dashboard']
    },
    {
        src: "/stack/motion.webp",
        alt: "Motion",
        projectTag: ['Firebase Dashboard', 'Shared Wines']
    },
    {
        src: "/stack/ts.svg",
        alt: "Typescript",
        projectTag: ['Shared Wines', 'GSAP Portfolio', 'Secret Graden React Native App']
    }, 
    {
        src: "/stack/vscode.webp",
        alt: "VS Code",
        projectTag: ['Firebase Dashboard', 'GSAP Portfolio', 'Secret Garden MJML Mailer', 'Secret Garden Web', 'Secret Graden React Native App', 'Shared Wines']
    },
    {
        src: "/stack/bootstrap.webp",
        alt: "Bootstrap",
    },
    {
        src: "/stack/canva.webp",
        alt: "Canva"
    },
    {
        src: "/stack/figma.webp",
        alt: "Figma"
    },
    {
        src: "/stack/github.png",
        alt: "Github",
        projectTag: ['Firebase Dashboard', 'GSAP Portfolio', 'Secret Garden MJML Mailer', 'Secret Garden Web', 'Secret Graden React Native App', 'Shared Wines']
    },
    {
        src: "/stack/google-suite.webp",
        alt: "Google Suite",
        projectTag: ['Firebase Dashboard', 'GSAP Portfolio', 'Secret Garden Web', 'Secret Graden React Native App', 'Shared Wines']
    },
    {
        src: "/stack/mailchimp.svg",
        alt: "Mailchimp"
    },
    {
        src: "/stack/microsoft.webp",
        alt: "Microsoft"
    },
    {
        src: "/stack/mjml-logo.png",
        alt: "MJML",
        projectTag: ['Secret Garden MJML Mailer']
    },
    {
        src: "/stack/mongoosedb.jpg",
        alt: "Mongoose",
        projectTag: ['Shared Wines']
    },
    {
        src: "/stack/react.svg",
        alt: "React",
        projectTag: ['Shared Wines', 'GSAP Portfolio', 'Firebase Dashboard', 'Secret Graden React Native App', 'Secret Garden Web']
    }, 
    {
        src: "/stack/tailwind.webp",
        alt: "Tailwind",
        projectTag: ['Firebase Dashboard', 'GSAP Portfolio', 'Secret Garden Web', 'Secret Graden React Native App', 'Shared Wines']
    },
    {
        src: "/stack/vercel.png",
        alt: "Vercel",
        projectTag: ['Firebase Dashboard', 'GSAP Portfolio', 'Secret Garden Web', 'Secret Graden React Native App', 'Shared Wines']
    },
    {
        src: "/stack/wordpress.webp",
        alt: "Wordpress",
    },
]