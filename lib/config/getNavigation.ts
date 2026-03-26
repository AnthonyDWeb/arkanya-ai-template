import navigationJson from "@/config/navigation.json"
import { NavigationItem } from "@/types/navigation"

const navigation = navigationJson as NavigationItem[]

export function getNavigation() {

    const main = navigation.filter(
        (item) => item.type !== "legal" && item.visible !== false
    )

    const legal = navigation.filter(
        (item) => item.type === "legal"
    )

    return {
        main,
        legal,
        all: navigation
    }
}

// SEO / sitemap
export function getSitemapNavigation(): NavigationItem[] {
    return navigation.filter((p) => p.sitemap !== false)
}