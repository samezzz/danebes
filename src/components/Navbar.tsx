'use client';

import { navLinks } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: "500" })

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      Danebes Logo 
      {/* <Image
        src='/assets/logo.svg'
        alt='logo'
        width={124}
        height={32}
        className=""
      /> */}

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${poppins.className} cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
              <Link
                href={`#${nav.id}`}
              >
                {nav.title}
              </Link>
            </li>
          ))
        }
      </ul>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? '/assets/close.svg' : '/assets/menu.svg'}
          alt="menu"
          width={28}
          height={28}
          className = "object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {
          navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${poppins.className} cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
              <Link
                href={`#${nav.id}`}
              >
                {nav.title}
              </Link>
            </li>
          ))
        }
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar