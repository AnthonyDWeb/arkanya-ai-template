export type NavigationItem = {
    name: string
    href: string
    title?: string
    description?: string
    image?: string
    index?: boolean
    sitemap?: boolean
    visible?: boolean
    type?: "main" | "legal"
};