'use client'
import React from 'react'
import Image from 'next/image'
import { PiCameraThin } from "react-icons/pi";

const Catagory = () => {
  return (
    <div className='w-full sm:h-full md:h-[313px] flex justify-center items-center mt-16 border-b-2 border-gray-200'>
      <div className=' w-[80%] h-full'>
           {/* Top side  */}
           <div>
            <span className='border-l-8 border-red-500 text-red-400 pl-3 mb-5 font-bold'>Categories</span>
            <div className='flex justify-between'>
            <h2 className='text-3xl font-bold mt-6'>Browse By Category</h2>
            </div>
           </div>

           {/* cataogory Boxes  */}
           <div className='grid grid-cols-2 md:flex md:justify-between mt-10 gap-6'>

                {/* catagory 01  */}
              <div>
            <div className='w-[150px] md:w-[170px] h-[130px] md:h-[145px] flex justify-center items-center border-2 border-black/20 rounded-md'> 
                <Image src={'/images/catagory/Category-CellPhone.png'} alt='img' height={56} width={56}/>
            </div>
              </div>

                {/* catagory 02  */}
              <div>
              <div className='w-[150px] md:w-[170px] h-[130px] md:h-[145px] flex justify-center items-center border-2 border-black/20 rounded-md'> 
              <Image src={'/images/catagory/Category-Computer.png'} alt='img' height={56} width={56}/>
            </div>
              </div>

              {/* catagory 03  */}

               <div>
               <div className='w-[150px] md:w-[170px] h-[130px] md:h-[145px] flex justify-center items-center border-2 border-black/20 rounded-md'> 
               <Image src={'/images/catagory/Category-SmartWatch.png'} alt='img' height={56} width={56}/>
            </div>
               </div>

               {/* catagory 04  */}

               <div>
               <div className='w-[150px] md:w-[170px] h-[130px] md:h-[145px] flex justify-center items-center border-2 border-black/20 rounded-md bg-red-600'> 
               <Image src={'/images/catagory/Category-Camera.png'} alt='img' height={56} width={56}/>
            </div>
               </div>

               {/* catagory 05  */}
               <div>
               <div className='w-[150px] md:w-[170px] h-[130px] md:h-[145px] flex justify-center items-center border-2 border-black/20 rounded-md'> 
               <Image src={'/images/catagory/Category-Headphone.png'} alt='img' height={56} width={56}/>
            </div>
               </div>

                {/* catagory 06  */}
                <div>
               <div className='w-[150px] md:w-[170px] h-[130px] md:h-[145px] flex justify-center items-center border-2 border-black/20 rounded-md'> 
               <Image src={'/images/catagory/Category-Gamepad.png'} alt='img' height={56} width={56}/>
            </div>
               </div>

           </div>
      </div>
    </div>
  )
}

export default Catagory
