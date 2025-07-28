"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { GrCart } from 'react-icons/gr'
import { HiOutlineMenu } from 'react-icons/hi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='w-full overflow-x-hidden'>
      {/* Top Header */}
      <div className='w-full md:h-[48px] bg-[#000000] flex flex-col md:flex-row justify-between items-center px-4 py-2'>
        {/* Middle Text */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 text-center'>
          <h1 className='text-white text-[14px] font-normal text-center'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <p className='text-white text-[14px] font-semibold underline'>ShopNow</p>
        </div>

        {/* Right Side */}
        <div className='flex items-center mt-2 md:mt-0'>
          <p className='text-white text-[14px] font-normal'>English</p>
          <Image src='/images/dropdown/Vector.png' alt='dropdown' height={8} width={13} className='ml-2' />
        </div>
      </div>

      {/* Main Navbar */}
      <div className='w-full border-b-2'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 space-y-4 md:space-y-0'>
          {/* Logo & Mobile Toggle */}
          <div className='flex justify-between items-center w-full md:w-auto'>
            <h1 className='text-3xl font-bold'>Exclusive</h1>
            <button
              className='md:hidden text-2xl'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='Toggle Menu'
            >
              <HiOutlineMenu />
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`w-full md:w-auto flex-col md:flex-row md:flex items-center justify-center gap-4 ${
              menuOpen ? 'flex' : 'hidden'
            }`}
          >
            <ul className='flex flex-col md:flex-row items-center gap-4'>
              <Link href='/'><li>Home</li></Link>
              <Link href='/contact'><li>Contact</li></Link>
              <Link href='/about'><li>About</li></Link>
              <Link href='/signUp'><li>Sign Up</li></Link>
            </ul>
          </div>

          {/* Search & Icons */}
          <div className='w-full md:w-auto flex flex-col md:flex-row items-center gap-4'>
            <div className='flex items-center bg-gray-100 px-4 py-2 rounded w-full md:w-[250px] justify-between'>
              <span className='text-[12px] font-normal truncate'>What are you looking for?</span>
              <FiSearch className='h-[24px] w-[24px]' />
            </div>
            <div className='flex gap-4'>
              <FiHeart className='h-[32px] w-[32px]' />
              <GrCart className='h-[32px] w-[32px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

