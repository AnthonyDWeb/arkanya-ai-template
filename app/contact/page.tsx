import {generateMetadataFromPath} from "@/lib/seo/generate-metadata"
import Contact from "@/components/sections/contact"

export const metadata = generateMetadataFromPath("/contact")

export default function Page() {
    return (
        <>
            <Contact />
        </>
    )
}
