"use client"

import Link from "next/link"
import {useState} from "react"

import {Menu, X} from "lucide-react"

type NavigationItem = {
    name: string
    href: string
}

type Props = {
    navigation: NavigationItem[]
}

export default function NavbarToggle({ navigation }: Props) {

    const [open, setOpen] = useState(false)

    return (
        <div className="navbar-mobile">

            <button
                className="navbar-toggle"
                onClick={() => setOpen(!open)}
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {open && (
                <ul className="navbar-mobile-menu">

                    {navigation.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>
            )}

        </div>
    )
}