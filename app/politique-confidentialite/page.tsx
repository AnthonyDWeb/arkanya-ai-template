import {generateMetadataFromPath} from "../../lib/seo/generate-metadata"
import {generatePrivacyPolicy} from "@/lib/legal/generate-privacy"

export const metadata = generateMetadataFromPath("/politique-confidentialite")

export default function Page() {

    const content = generatePrivacyPolicy()

    return (
        <section className="section">

            <div className="container-main legal-container">

                <h1>Politique de confidentialité</h1>

                <div className="legal-text">
                    {content}
                </div>

            </div>

        </section>
    )
}