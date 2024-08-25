import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex w-full justify-center items-center py-20'>
        <Image src="/hallal.png" alt='hallal' width={500} height={500}/>
    </div>
  )
}
