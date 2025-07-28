'use client'
import React from 'react'
// import { Inter } from 'next/font/google'
import Image from 'next/image'

// const inter = Inter({ subsets: ['latin'] })

const Music = () => {
  return (
    <div className=' w-full h-full flex justify-center md:mb-16 mt-10'>
    <div className='w-full md:w-[1170px] h-auto md:h-[500px] flex flex-col md:flex-row justify-center items-center bg-black '>

      {/* text div  */}
    
       <div className='w-full md:w-[50%] h-full p-4 ml-5 flex flex-col justify-center'>

          <h1 className='text-[16px] text-green-500 font-[Tittle] font-semibold mt-3'>Categories</h1>
          <h1 className='text-[48px] text-white font-[Inter] font-semibold '>Enhance Your</h1>
          <h1 className='text-[48px] text-white font-[Inter] font-semibold'>Music Experience</h1>

             {/* Timer  */}
             <div className='flex sm:flex-wrap justify-start gap-5 pt-5 pb-4 mt-3'>
                {/* First timer  */}
                <div className='bg-white w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center '>
                      <span className='font-[Poppins] font-semibold text-[16px]' >23</span>
                      <span className='font-[Poppins] font-normal text-[11px]'>Hours</span>
                </div>
                   {/* 2nd timer  */}
                <div className='bg-white w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center '>
                      <span className='font-[Poppins] font-semibold text-[16px]' >05</span>
                      <span className='font-[Poppins] font-normal text-[11px]'>Days</span>
                </div>
                {/* 3rd Timer  */}
                <div className='bg-white w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center '>
                      <span className='font-[Poppins] font-semibold text-[16px]' >59</span>
                      <span className='font-[Poppins] font-normal text-[11px]'>Minutes</span>
                </div>
                  {/* 4th timer  */}
                  <div className='bg-white w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center '>
                      <span className='font-[Poppins] font-semibold text-[16px]' >35</span>
                      <span className='font-[Poppins] font-normal text-[11px]'>Seconds</span>
                </div>
                     
             </div>
             {/* timer ended  */} 

                     {/* Button  */}
            <div className='my-5'>
                <button className='bg-green-500 text-white text-[16px] font-[Poppins] font-medium w-[171px] h-[56px] rounded-md hover:bg-green-600 mt-4'>Buy Now!</button>
            </div>

            </div> 
      {/* text div ended here  */}
             
             {/* Image div  */}

             <div className='w-[50%] h-[330px] flex justify-center items-center mr-16 '>
                <Image src={'/images/music/music.png'} alt='music' width={558} height={330} className='h-[250px] w-[400px] md:h-[330] md:w-[550] mb-6 md:mb-0'/>
             </div>
    </div>
    </div>
    
  )
}

export default Music
