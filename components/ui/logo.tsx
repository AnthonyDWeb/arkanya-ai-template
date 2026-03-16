import Image from "next/image"
import Link from "next/link"

import {siteConfig} from "../../config/site"

type Props = {
    variant?: "dark" | "light"
}

export default function Logo({ variant = "dark" }: Props) {

    const src =
        variant === "light"
            ? siteConfig.logoMono ?? siteConfig.logo
            : siteConfig.logo

    const size = siteConfig.logoSize ?? 36

    return (
        <Link href="/" className="navbar-brand">

            <Image
                src={src}
                alt={siteConfig.name}
                width={size}
                height={size}
                priority
            />

            <span className="navbar-name">
        {siteConfig.name}
      </span>

        </Link>
    )
}