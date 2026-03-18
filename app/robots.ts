import type {MetadataRoute} from "next"

import {getSite} from "@/lib/config/getSite"

export default function robots(): MetadataRoute.Robots {

    const site = getSite()

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api"],
            },
        ],
        sitemap: `${site.url}/sitemap.xml`,
    }

}