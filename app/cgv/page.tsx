import {generateMetadataFromPath} from "../../lib/seo/generate-metadata"
import {generateCGV} from "@/lib/legal/generate-cgv"

export const metadata = generateMetadataFromPath("/cgv")

export default function Page() {

    const content = generateCGV()

    return (
        <section className="section">

            <div className="container-main legal-container">

                <h1>Conditions générales de vente</h1>

                <div className="legal-text">
                    {content}
                </div>

            </div>

        </section>
    )
}