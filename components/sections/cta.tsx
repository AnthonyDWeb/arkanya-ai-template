"use client"

import Link from "next/link"
import {getNavigation} from "@/lib/config/getNavigation"

export default function CTA() {

    const navigation = getNavigation()

    const { main } = getNavigation()
    const contact = main.find(p => p.href === "/contact")

    return (
        <section className="section">

            <div className="container-main text-center">

                <h2>
                    Prêt à démarrer votre projet ?
                </h2>

                <p className="mt-4 text-neutral-600">
                    Contactez-nous dès aujourd’hui pour donner vie à votre projet.
                </p>

                {contact && (
                    <div className="mt-6">
                        <Link href={contact.href} className="btn btn-primary">
                            {contact.name}
                        </Link>
                    </div>
                )}

            </div>

        </section>
    )
}