"use client";

import { navLinks } from "@/constants";
// import Image from 'next/image';
import React, { useState } from "react";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { Icons } from "./Icons"
import { MobileNav } from "./MobileNav";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      Danebes Logo
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          const Icon = Icons[nav.icon || "arrowRight"];
          return (
            <li
              key={index}
              className={`${poppins.className} items-baseline gap-x-1 flex cursor-pointer text-[16px] hover:opacity-70 ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              <Link href={`${nav.href}`}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex justify-end items-center">
        <button onClick={() => setShowMobileMenu((showMobileMenu) => !showMobileMenu)} className="flex gap-x-2">
          {showMobileMenu && <Icons.close />}
          <span className="font-bold">Menu</span>
        </button>
        {showMobileMenu && (
          <MobileNav items={navLinks} isActive={showMobileMenu} closeMenu={() =>  setShowMobileMenu((showMobileMenu) => !showMobileMenu)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <Image
        src='/assets/logo.svg'
        alt='logo'
        width={124}
        height={32}
        className=""
      /> */
}

{
  /* <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={showMobileMenu ? '/assets/close.svg' : '/assets/menu.svg'}
          alt="menu"
          width={28}
          height={28}
          className = "object-contain"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        <div className={`${showMobileMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {
          navLinks.map((nav, index) => (
            <li
              key={nav.title}
              className={`${poppins.className} cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
              <Link
                href={`#${nav.icon}`}
              >
                {nav.title}
              </Link>
            </li>
          ))
        }
      </ul>
        </div>
      </div> */
}
