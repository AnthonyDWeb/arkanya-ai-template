import {generateMetadataFromPath} from "../../lib/seo/generate-metadata"
import {generateMentionsLegales} from "@/lib/legal/generate-mentions"

export const metadata = generateMetadataFromPath("/mentions-legales")

export default function Page() {

    const content = generateMentionsLegales()

    return (
        <section className="section">

            <div className="container-main legal-container">

                <h1>Mentions légales</h1>

                <div className="legal-text">
                    {content}
                </div>

            </div>

        </section>
    )
}