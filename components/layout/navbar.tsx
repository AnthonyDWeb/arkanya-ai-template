import Link from "next/link"

import {navigation} from "../../config/navigation"

import Logo from "../ui/logo"
import NavbarToggle from "../ui/navbar-toggle"

export default function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-inner">

                <div className="navbar-left">
                    <Logo />
                </div>

                <div className="navbar-right">

                    <ul className="navbar-links">

                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                    </ul>

                    <NavbarToggle navigation={navigation} />

                </div>

            </div>

        </nav>
    )
}