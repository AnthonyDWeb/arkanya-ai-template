import type {MetadataRoute} from "next"

import {legalNavigation, navigation} from "../config/navigation"
import {siteConfig} from "../config/site"

export default function sitemap(): MetadataRoute.Sitemap {

    const pages = [...navigation, ...legalNavigation]

    const indexablePages = pages.filter((p) => p.index !== false)

    return indexablePages.map((page) => ({
        url: `${siteConfig.url}${page.href}`,
        lastModified: new Date(),
    }))
}