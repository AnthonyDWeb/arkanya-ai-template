import {getSitemapNavigation} from "@/lib/config/getNavigation"
import {getSite} from "@/lib/config/getSite"

type SitemapFprops = {url: string, lastModified: Date};

export default function sitemap(): SitemapFprops[] {

    const site = getSite()

    const pages = getSitemapNavigation();

    return pages.map((page): SitemapFprops => ({

        url: `${site.url}${page.href}`,
        lastModified: new Date(),

    }))
}
