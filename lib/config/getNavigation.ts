import navigation from "@/config/navigation.json"

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
export function getSitemapNavigation() {
    return navigation.filter((p) => p.sitemap !== false)
}