
import { FaApple } from "react-icons/fa";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[400pxpx] flex justify-center mt-14 mb-20">

      <div className="w-[80%] h-full flex flex-col-reverse md:flex-row md:justify-between items-center">

         {/* links  */}
      <div className="list-none flex flex-col space-y-3 mt-4 md:mt-0">
       <Link href={''}><li>Woman’s Fashion</li></Link>
       <Link href={''}><li>Men’s Fashion</li></Link> 
       <Link href={''}><li>Electronics</li></Link> 
       <Link href={''}><li>Home & Lifestyle</li></Link> 
       <Link href={''}><li>MMedicine</li></Link> 
       <Link href={''}><li>Sports & Outdoor</li></Link> 
       <Link href={''}><li>Baby’s & Toys</li></Link> 
       <Link href={''}><li>Groceries & Pets</li></Link> 
       <Link href={''}><li>Health & Beauty</li></Link> 
      </div>

        <div className="w-full md:w-[892px] h-full flex flex-col-reverse md:flex-row md:justify-between bg-black ">
      {/* left side  */}
             <div className="ml-4 mb-3 md:mb-0 md:ml-8 md:mt-12 text-white">
               <div className="flex justify-center items-center mb-4 mt-6">
               <FaApple className="w-[30px] h-12" />
              <span className="ml-3 mt-2">iPhone 14 Series</span>
                </div>

                <div className="w-[200px] ml-7">
                    <h1 className="text-3xl font-sans font-bold mb-4">Up to 10% off Voucher</h1>
                    <button className="underline underline-offset-8 mt-4">Shop Now </button>
                </div>

             </div>
      {/* right side  */}
   <div>
    <Image src={'/images/hero_image-01.png'} alt="hero" width={350} height={200} className="h-[240px] mt-10"/>
   </div>

      </div>

      </div>
    </div>
  )
}

export default Hero
