'use client'
import React from 'react'
import Image from 'next/image'

const Music = () => {
  return (
    <div className='w-full h-full flex justify-center md:mb-16 mt-10 overflow-x-hidden px-4'>
      <div className='w-full max-w-screen-xl h-auto md:h-[500px] flex flex-col md:flex-row justify-center items-center bg-black rounded-lg'>

        {/* Text Section */}
        <div className='w-full md:w-1/2 h-full p-4 flex flex-col justify-center'>
          <h1 className='text-[16px] text-green-500 font-[Tittle] font-semibold mt-3'>Categories</h1>
          <h1 className='text-[36px] md:text-[48px] text-white font-[Inter] font-semibold'>Enhance Your</h1>
          <h1 className='text-[36px] md:text-[48px] text-white font-[Inter] font-semibold'>Music Experience</h1>

          {/* Timer */}
          <div className='flex flex-wrap justify-start gap-4 pt-5 pb-4 mt-3'>
            {['23|Hours', '05|Days', '59|Minutes', '35|Seconds'].map((item, idx) => {
              const [value, label] = item.split('|');
              return (
                <div key={idx} className='bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center'>
                  <span className='font-[Poppins] font-semibold text-[16px]'>{value}</span>
                  <span className='font-[Poppins] font-normal text-[11px]'>{label}</span>
                </div>
              );
            })}
          </div>

          {/* Button */}
          <div className='my-5'>
            <button className='bg-green-500 text-white text-[16px] font-[Poppins] font-medium w-[171px] h-[56px] rounded-md hover:bg-green-600 mt-4'>
              Buy Now!
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 h-auto flex justify-center items-center mb-6 md:mb-0'>
          <Image
            src='/images/music/music.png'
            alt='music'
            width={550}
            height={330}
            className='w-[90%] max-w-[400px] md:max-w-[550px] h-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default Music
