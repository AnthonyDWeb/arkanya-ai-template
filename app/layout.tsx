import "./globals.css"

import type {Metadata} from "next"

import Providers from "../providers/providers"

import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"

import {siteConfig} from "../config/site"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    metadataBase: new URL(siteConfig.url),

    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: "website",
        images: [
            {
                url: siteConfig.ogImage ?? "",
            },
        ],
    },

    authors: [
        {
            name: siteConfig.author,
        },
    ],

    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="fr">
        <body>

        <Providers>

            <header>
                <Navbar/>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>

        </Providers>

        </body>
        </html>
    )
}