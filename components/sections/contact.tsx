"use client"

import {getLegal} from "@/lib/config/getLegal"

export default function Contact() {

    const legal = getLegal()

    return (
        <section className="section">

            <div className="container-main">

                <h2>Contact</h2>

                <div className="mt-6 flex flex-col gap-3">

                    {legal.email && (
                        <p>Email : {legal.email}</p>
                    )}

                    {legal.phone && (
                        <p>Téléphone : {legal.phone}</p>
                    )}

                    {legal.address && (
                        <p>Adresse : {legal.address}</p>
                    )}

                </div>

            </div>

        </section>
    )
}