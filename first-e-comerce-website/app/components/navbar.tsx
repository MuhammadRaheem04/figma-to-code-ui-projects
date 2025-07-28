
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
        <div>

          {/* Top header  */}
    <div className='w-full md:h-[48px] bg-[#000000] flex flex-col md:flex-row justify-center items-center'>
    <div className='w-[859px] h-[24px] flex justify-center items-center'>
        <h1 className='w-[474px] h-[18px] text-white text-[14px] font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
        <p className='w-[68px] h-[24px] text-white text-[14px] font-semibold mt-1 underline'>ShopNow</p>
    </div>
      <div className='w-[78px] h-[24px] flex justify-end items-center'>
        <p className='w-[49px] h-[21px] text-white text-[14px] font-normal'>English</p>
        <Image src={'/images/dropdown/Vector.png'} alt='dropdown' height={8} width={13} className=' ml-2'/>
      </div>
  </div>
                 {/* header/ Navbar  */}
    <div className='w-full h-full md:h-[80px] flex justify-center items-center border-b-2 pb-4 md:pb-0'>
     <div className='w-[80%] h-full flex flex-col md:flex-row justify-between items-center'>
        {/* left side */}
        <div> 
            {/* logo  */}
            <h1 className='text-3xl font-bold'>Exclusive</h1>
        </div>

        {/* right side  */}
        <div>
            <ul className='flex gap-x-5 mr-4 '>
             <Link href={"/"}><li>Home</li></Link>
             <Link href={"/contact"}><li>Contact</li></Link>
             <Link href={"/about"}><li>About</li></Link>
             <Link href={"/signUp"}><li>Sign Up</li></Link>
            </ul>
        </div> 
              
              {/* search bar */}
        <div className='w-[347px] h-[38px] flex justify-between items-center '>
           <div className='flex items-center justify-between gap-3 bg-gray-100 px-5 py-1 ml-5 rounded'>
            <h1 className=' text-[12px] font-normal'>What are you looking for?</h1>
            <FiSearch className='h-[24px] w-[24px]' />
           </div>
           {/* Icons  */}
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