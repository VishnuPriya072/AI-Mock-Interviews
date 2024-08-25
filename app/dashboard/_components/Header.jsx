"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
  const path=usePathname();
  useEffect(()=>{
    console.log(path)
  },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/logo.svg'}width={160} height={100} alt='logo'/>
      <ul className='flex gap-6'>
        <li className={`hover:text-pink-500 hover:font-bold transition-all cursor-pointer
        ${path==='/dashboard'&&'text-pink-500'}
        `}
        >Dashboard</li>
        <li className={`hover:text-pink-500 hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/question'&&'text-pink-500'}`}>Question</li>
        <li className={`hover:text-pink-500 hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/upgrade'&&'text-pink-500'}`}> Upgrade</li>
        <li className={`hover:text-pink-500 hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/how'&& 'text-pink-500'
          }`}>
          How its Work?
        </li>
      </ul>
        
      
      <UserButton/>
    </div>
  )
}

export default Header