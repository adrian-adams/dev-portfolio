import type { Route } from "next";

export const routes = {
    home: () =>'/' as Route,
    about: () => '/about' as Route,
    projects: () =>'/projects' as Route,
    contact: () =>'/contact' as Route,
    github: () =>'https://github.com/adrian-adams',
    housewine: () =>'https://github.com/adrian-adams/house-wine',
    dashboard: () =>'https://github.com/adrian-adams/dashboard-v3',
    gsapportfolio: () =>'https://github.com/adrian-adams/Portfolio',
    sgclone: () =>'https://github.com/adrian-adams/secret-garden-clone',
    sgmailer: () =>'https://github.com/adrian-adams/secret-garden-mailer'
} as const;