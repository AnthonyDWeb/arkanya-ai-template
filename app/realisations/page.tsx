import {generateMetadataFromPath} from "../../lib/seo/generate-metadata"

export const metadata = generateMetadataFromPath("/realisations")

export default function Page() {
    return (
        <section className="section">
            <div className="container-main">
                <h1>Réalisations</h1>
            </div>
        </section>
    )
}