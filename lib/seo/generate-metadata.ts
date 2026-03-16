import {legalNavigation, navigation} from "../../config/navigation"
import {siteConfig} from "../../config/site"
import {defaultSEO} from "../../config/seo"

export function generateMetadataFromPath(path: string) {

    const pages = [...navigation, ...legalNavigation]

    const page = pages.find((p) => p.href === path)

    const title = page?.title ?? defaultSEO.title
    const description = page?.description ?? defaultSEO.description
    const index = page?.index ?? true

    const url = `${siteConfig.url}${path}`

    return {
        title: {
            default: title,
            template: `%s | ${siteConfig.name}`,
        },

        description,

        metadataBase: new URL(siteConfig.url),

        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type: "website",
            images: [
                {
                    url: siteConfig.ogImage ?? "",
                },
            ],
        },

        robots: {
            index,
            follow: true,
        },

        authors: [
            {
                name: siteConfig.author,
            },
        ],
    }
}