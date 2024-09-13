import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Logo() {
    const pathName = usePathname();
  return (
    <div>
                <Link
          href={`/${pathName.split("/")[1]}`}
          className="text-2xl font-bold text-gray-900 dark:text-white flex flex-row  "
        >
          <Image src={"/logo.png"} width={100} className="" height={70} alt="logo" />

        </Link>
    </div>
  )
}
