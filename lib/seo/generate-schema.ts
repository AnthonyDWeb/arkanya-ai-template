import {getSite} from "@/lib/config/getSite"

export function generateOrganizationSchema() {

    const site = getSite()

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: site.logo,
        sameAs: [],
    }
}