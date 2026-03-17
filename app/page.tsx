import Hero from "@/components/sections/hero"
import {generateMetadataFromPath} from "@/lib/seo/generate-metadata"

export const metadata = generateMetadataFromPath("/")

export default function Home() {
    return (
        <>
            <Hero />
        </>
    )
}
