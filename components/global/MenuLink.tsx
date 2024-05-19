'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

type MenuProps = {
    item?: any;
}

const MenuLink = ({ item }: MenuProps): React.ReactElement  => {
    const pasthname = usePathname();
    return (
        <Link href={item.path} className="flex items-center gap-2 p-4 mx-2 my-2 rounded-xl hover:bg-[#2e374a]">
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink