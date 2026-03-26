
import {getNavigation} from "@/lib/config/getNavigation"
import {getSite} from "@/lib/config/getSite"

export default function sitemap() {

    const { all } = getNavigation()
    const site = getSite()

    const pages = all.filter(p => p.sitemap !== false)

    return pages.map((page) => ({

        url: `${site.url}${page.href}`,
        lastModified: new Date(),

    }))
}
