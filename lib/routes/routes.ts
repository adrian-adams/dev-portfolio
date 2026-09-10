import type { Route } from "next";

export const routes = {
    home: () => '/' as Route,
    about: () => '/about' as Route,
    projects: () => '/projects' as Route,
    projectpage: (slug: string) => `/projects/${slug}` as Route,
    contact: () => '/contact' as Route,
    github: () => 'https://github.com/adrian-adams',
    housewine: () => 'https://house-wine-bmka.vercel.app/en',
    housewineGit: () => 'https://github.com/adrian-adams/house-wine',
    dashboard: () => 'https://dashboard-v3-lovat.vercel.app/dashboard',
    dashboardGit: () => 'https://github.com/adrian-adams/dashboard-v3',
    gsapportfolio: () => 'https://portfolio-three-zeta-36.vercel.app',
    gsapportfolioGit: () => 'https://github.com/adrian-adams/Portfolio',
    sgclone: () => 'https://github.com/adrian-adams/secret-garden-clone',
    sgcloneGit: () => 'https://secret-garden-clone.vercel.app',
    sgmailer: () => 'https://github.com/adrian-adams/secret-garden-mailer',
    resume: () => 'https://res.cloudinary.com/uc6sqjh2/image/upload/v1788350833/CV-2026_Adrian_Adams_rwqfqi.pdf',
    gmail: () => 'mailto:a4adams4@gmail.com'
} as const;