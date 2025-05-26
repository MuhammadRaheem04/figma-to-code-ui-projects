
import React from 'react'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { GrCart } from "react-icons/gr";

const Header = () => {
  return (
    <div className='w-full h-[80px] flex justify-center items-center border-b-2'>
     <div className='w-[80%] h-full flex justify-between items-center'>
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
             <Link href={"/signup"}><li>Sign Up</li></Link>
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
  )
}

export default Header
