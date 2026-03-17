import Link from "next/link"

import {getSite} from "@/lib/config/getSite"
import {getNavigation} from "@/lib/config/getNavigation"

export default function Footer() {

    const site = getSite()
    const { main, legal } = getNavigation()

    return (
        <div className="footer">

            <div className="container-main footer-top">

                <div className="footer-brand">

                    {site.logo && (
                        <img
                            src={site.logo}
                            alt={site.name}
                            width={44}
                            height={44}
                        />
                    )}

                    <p className="footer-name">
                        {site.name}
                    </p>

                    <p className="footer-desc">
                        {site.description}
                    </p>

                </div>

                <div className="footer-links">

                    <div>

                        <p className="footer-heading">
                            Navigation
                        </p>

                        <ul>
                            {main.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div>

                        <p className="footer-heading">
                            Légal
                        </p>

                        <ul>
                            {legal.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <div className="container-main footer-bottom-inner">

                    <p>
                        © {new Date().getFullYear()} {site.name}
                    </p>

                    <p>
                        Créé par Arkanya
                    </p>

                </div>

            </div>

        </div>
    )
}