import type { Route } from "next";

export const routes = {
    home: () => '/' as Route,
    about: () => '/about' as Route,
    projects: () => '/projects' as Route,
    projectpage: (slug: string) => `/projects/${slug}` as Route,
    contact: () => '/contact' as Route,
    github: () => 'https://github.com/adrian-adams' as Route,
    housewine: () => 'https://house-wine-bmka.vercel.app/en' as Route,
    housewineGit: () => 'https://github.com/adrian-adams/house-wine' as Route,
    dashboard: () => 'https://dashboard-v3-lovat.vercel.app/dashboard' as Route,
    dashboardGit: () => 'https://github.com/adrian-adams/dashboard-v3' as Route,
    gsapportfolio: () => 'https://portfolio-three-zeta-36.vercel.app' as Route,
    gsapportfolioGit: () => 'https://github.com/adrian-adams/Portfolio' as Route,
    sgclone: () => 'https://secret-garden-clone.vercel.app' as Route,
    sgcloneGit: () => 'https://github.com/adrian-adams/secret-garden-clone' as Route,
    sgmailer: () => 'https://adrian-adams.github.io/secret-garden-mailer/' as Route,
    sgmailerGit: () => 'https://github.com/adrian-adams/secret-garden-mailer' as Route,
    resume: () => 'https://res.cloudinary.com/uc6sqjh2/image/upload/v1788350833/CV-2026_Adrian_Adams_rwqfqi.pdf' as Route,
    gmail: () => 'mailto:a4adams4@gmail.com' as Route
} as const;