import Image from "next/image"
import Link from "next/link"

import {getSite} from "@/lib/config/getSite"

type Props = {
    variant?: "dark" | "light"
}

export default function Logo({ variant = "dark" }: Props) {

    const site = getSite()

    const src =
        variant === "light"
            ? site.logoMono ?? site.logo
            : site.logo

    const size = site.logoSize ?? 36

    return (
        <Link href="/" className="navbar-brand">

            <Image
                src={src}
                alt={site.name}
                width={size}
                height={size}
                priority
            />

            <span className="navbar-name">
                {site.name}
            </span>

        </Link>
    )
}