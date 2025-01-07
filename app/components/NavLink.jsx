"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ label, href, preImg, lstImg }) {
    const pathname = usePathname();

    return <Link href={href} className={`nav-link ${pathname === href ? 'active' : ''}`}>
        <Image src={preImg} width='24' height='24' alt="user" className='xl:hidden' />
        <span className="grow">
            {label}
        </span>
        <Image src={lstImg} width='24' height='24' alt="chevronleft" className='xl:hidden' />
    </Link>;
}
