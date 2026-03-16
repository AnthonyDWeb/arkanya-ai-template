import {generateMetadataFromPath} from "../../lib/seo/generate-metadata"

export const metadata = generateMetadataFromPath("/services")

export default function Page() {
    return (
        <section className="section">
            <div className="container-main">
                <h1>Services</h1>
            </div>
        </section>
    )
}