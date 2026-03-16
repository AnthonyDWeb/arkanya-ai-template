import Link from "next/link"

import {legalNavigation, navigation} from "../../config/navigation"
import {siteConfig} from "../../config/site"

export default function Footer() {
    return (
        <div className="footer">

            <div className="container-main footer-top">

                <div className="footer-brand">

                    {siteConfig.logo && (
                        <img
                            src={siteConfig.logo}
                            alt={siteConfig.name}
                            width={44}
                            height={44}
                        />
                    )}

                    <p className="footer-name">
                        {siteConfig.name}
                    </p>

                    <p className="footer-desc">
                        {siteConfig.description}
                    </p>

                </div>

                <div className="footer-links">

                    <div>

                        <p className="footer-heading">
                            Navigation
                        </p>

                        <ul>
                            {navigation.map((item) => (
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
                            {legalNavigation.map((item) => (
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
                        © {new Date().getFullYear()} {siteConfig.name}
                    </p>

                    <p>
                        Créé par Arkanya
                    </p>

                </div>

            </div>

        </div>
    )
}