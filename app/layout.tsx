import "./globals.css"

import type {Metadata} from "next"

import Providers from "@/providers/providers"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

import {getSite} from "@/lib/config/getSite"

const site = getSite()

export const metadata: Metadata = {
    title: {
        default: site.name,
        template: `%s | ${site.name}`,
    },

    description: site.description,

    metadataBase: new URL(site.url),

    openGraph: {
        title: site.name,
        description: site.description,
        url: site.url,
        siteName: site.name,
        locale: site.locale,
        type: "website",
        images: [
            {
                url: site.ogImage ?? "",
            },
        ],
    },

    authors: [
        {
            name: site.author,
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
