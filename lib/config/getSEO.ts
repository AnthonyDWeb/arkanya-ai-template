import seo from "@/config/seo.json"
import {getSite} from "./getSite"

export function getSEO() {

    const site = getSite()

    return {
        title: seo.title || site.name,
        description: seo.description || site.description,
        image: seo.image || site.ogImage,
        index: seo.index ?? true
    }
}