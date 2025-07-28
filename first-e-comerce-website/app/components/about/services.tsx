'use client'
import Image from "next/image"

import React from 'react'

const Services = () => {
    return (

        <div>
            {/* images section 01  */}
            <div className='w-full'>
                {/* cataogory Boxes  */}
                <div className='flex flex-col md:flex-row md:justify-evenly mt-10 mx-auto items-center space-y-4'>

                    {/* catagory 01  */}

                    <div>
                        <div className='w-[270px] h-[230px] flex flex-col  justify-center items-center border-2 border-black/20 rounded-md'>
                            <Image src={'/images/about/Services-1.png'} alt='img' height={80} width={80} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>10.5k </h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Sallers active our site</h2>
                        </div>
                    </div>

                    {/* catagory 02  */}

                    <div>
                        <div className='w-[270px] h-[230px]  flex flex-col justify-center items-center border-2 border-black/20 rounded-md bg-red-600 text-white'>
                            <Image src={'/images/about/Services-1.png'} alt='img' height={80} width={80} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>33k </h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Mopnthly Produduct Sale</h2>
                        </div>
                    </div>

                    {/* catagory 03  */}
                    <div>
                        <div className='w-[270px] h-[230px] flex flex-col justify-center items-center border-2 border-black/20 rounded-md'>
                            <Image src={'/images/about/Services-1.png'} alt='img' height={80} width={80} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>45.5k</h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Customer active in our site</h2>
                        </div>
                    </div>

                    {/* catagory 04  */}
                    <div>
                        <div className='w-[270px] h-[230px] flex flex-col justify-center items-center border-2 border-black/20 rounded-md'>
                            <Image src={'/images/about/Services-1.png'} alt='img' height={80} width={80} />
                            <h1 className='text-[32px] font-[Inter] font-bold'>25k </h1>
                            <h2 className='text-[16px] font-[Poppins] font-normal'>Anual gross sale in our site</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Services




