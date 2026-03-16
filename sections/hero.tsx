import Link from "next/link"

export default function Hero() {
    return (
        <section className="section hero">

            <div className="container-main hero-inner">

                <div className="hero-content">

                    <h1 className="hero-title">
                        Construisez un site web moderne et performant
                    </h1>

                    <p className="hero-subtitle">
                        Un template optimisé pour générer rapidement des sites professionnels avec Arkanya AI.
                    </p>

                    <div className="hero-actions">

                        <Link href="/contact" className="hero-button-primary">
                            Commencer
                        </Link>

                        <Link href="/services" className="hero-button-secondary">
                            Découvrir
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    )
}