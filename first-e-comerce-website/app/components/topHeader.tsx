
import React from 'react'
import Image from 'next/image'



const TopHeader = () => {
  return (
    <div>
      <div className='w-full h-[48px] bg-[#000000] flex justify-center items-center'>
        {/* left side  */}
        <div className='w-[859px] h-[24px] flex justify-center items-center'>
            <h1 className='w-[474px] h-[18px] text-white text-[14px] font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
            <p className='w-[68px] h-[24px] text-white text-[14px] font-semibold mt-1 underline'>ShopNow</p>
        </div>
        {/* right side  */}
          <div className='w-[78px] h-[24px] flex justify-center items-center'>
            <p className='w-[49px] h-[21px] text-white text-[14px] font-normal'>English</p>
            <Image src={'/images/dropdown/Vector.png'} alt='dropdown' height={8} width={13} className=' ml-2'/>
          </div>

      </div>
    </div>
  )
}

export default TopHeader

