import Link from 'next/link'
import React from 'react'
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'

export default function SocilaMedia() {
  return (
    <div className='flex gap-x-4'>
        <p className="mb-4 text-3xl">
          <Link href={""}><CiFacebook />
          </Link>
        </p>
        <p className="mb-4 text-3xl">
        <Link href={""}><CiInstagram />
        </Link>        </p>
        <p className="mb-4 text-3xl">
        <Link href={""}><FaWhatsapp />
        </Link>        </p>
        <p className=" text-3xl">
        <Link href={""}><CiTwitter />
        </Link>        </p>
        </div>
  )
}
