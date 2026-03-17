import type {MetadataRoute} from "next"

import {getNavigation} from "@/lib/config/getNavigation"
import {getSite} from "@/lib/config/getSite"

export default function sitemap(): MetadataRoute.Sitemap {

    const navigation = getNavigation()
    const site = getSite()

    return navigation.map((page) => ({
        url: `${site.url}${page.href}`,
        lastModified: new Date(),
    }))
}
