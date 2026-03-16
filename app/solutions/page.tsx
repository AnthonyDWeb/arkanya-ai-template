import {generateMetadataFromPath} from "../../lib/seo/generate-metadata"

export const metadata = generateMetadataFromPath("/solutions")

export default function Page() {
    return (
        <section className="section">
            <div className="container-main">
                <h1>Solutions</h1>
            </div>
        </section>
    )
}