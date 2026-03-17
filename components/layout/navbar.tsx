import Link from "next/link"

import {getNavigation} from "@/lib/config/getNavigation"

import Logo from "../ui/logo"
import NavbarToggle from "../ui/navbar-toggle"

export default function Navbar() {

    const { main } = getNavigation()

    return (
        <nav className="navbar">

            <div className="navbar-inner">

                <div className="navbar-left">
                    <Logo />
                </div>

                <div className="navbar-right">

                    <ul className="navbar-links">

                        {main.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                    </ul>

                    <NavbarToggle navigation={main} />

                </div>

            </div>

        </nav>
    )
}