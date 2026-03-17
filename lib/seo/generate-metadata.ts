import {getNavigation} from "@/lib/config/getNavigation"
import {getSite} from "@/lib/config/getSite"
import {getSEO} from "@/lib/config/getSEO"

export function generateMetadataFromPath(path: string) {

    const { all } = getNavigation()
    const site = getSite()
    const seo = getSEO()

    const page = all.find((p) => p.href === path)

    const title = page?.title || seo.title
    const description = page?.description || seo.description
    const index = page?.index ?? seo.index ?? true

    const url = `${site.url}${path}`

    return {
        title: {
            default: title,
            template: `%s | ${site.name}`,
        },

        description,

        metadataBase: new URL(site.url),

        openGraph: {
            title,
            description,
            url,
            siteName: site.name,
            locale: site.locale,
            type: "website",
            images: [
                {
                    url: seo.image || site.ogImage || "",
                },
            ],
        },

        robots: {
            index,
            follow: true,
        },

        authors: [
            {
                name: site.author,
            },
        ],
    }
}