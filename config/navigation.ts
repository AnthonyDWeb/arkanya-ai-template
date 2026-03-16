import type {NavigationItem} from "../types/navigation"

export const navigation: NavigationItem[] = [
    {
        name: "Accueil",
        href: "/",
        title: "Accueil",
        description: "Page d'accueil du site",
        index: true,
    },

    {
        name: "Services",
        href: "/services",
        title: "Nos services",
        description: "Découvrez nos services",
        index: true,
    },

    {
        name: "Solutions",
        href: "/solutions",
        title: "Nos solutions",
        description: "Solutions adaptées à votre entreprise",
        index: true,
    },

    {
        name: "Réalisations",
        href: "/realisations",
        title: "Nos réalisations",
        description: "Découvrez nos projets",
        index: true,
    },

    {
        name: "Contact",
        href: "/contact",
        title: "Contact",
        description: "Contactez-nous",
        index: true,
    },
];

export const legalNavigation: NavigationItem[] = [
    {
        name: "Mentions légales",
        href: "/mentions-legales",
        index: true,
    },
    {
        name: "Politique de confidentialité",
        href: "/politique-confidentialite",
        index: true,
    },
    {
        name: "CGV",
        href: "/cgv",
        index: true,
    },
];