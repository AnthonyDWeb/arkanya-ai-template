import Link from "next/link"

import {getSite} from "@/lib/config/getSite"
import {getNavigation} from "@/lib/config/getNavigation"

export default function Hero() {

    const site = getSite()
    const { main } = getNavigation()

    const primary = main.find(p => p.href === "/contact") || main[0]
    const secondary = main.find(p => p.href !== primary?.href)

    return (
        <section className="section hero">

            <div className="container-main hero-inner">

                <div className="hero-content">

                    <h1 className="hero-title">
                        {site.name}
                    </h1>

                    <p className="hero-subtitle">
                        {site.description}
                    </p>

                    <div className="hero-actions">

                        {primary && (
                            <Link href={primary.href} className="hero-button-primary">
                                {primary.name}
                            </Link>
                        )}

                        {secondary && (
                            <Link href={secondary.href} className="hero-button-secondary">
                                {secondary.name}
                            </Link>
                        )}

                    </div>

                </div>

            </div>

        </section>
    )
}