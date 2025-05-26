'use client'
import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";

const Persons = () => {
  return (
    <div className='w-full h-[560px] my-28'>
       {/* images section 01  */}
       <div className='w-full h-[560px] my-10'>
                {/* cataogory Boxes  */}
                <div className='flex justify-evenly mt-10 mx-auto items-center '>

                    {/* catagory 01  */}

                    <div>
                        <div className='w-[370px] h-[430px] flex flex-col  justify-center items-center border-2 border-black/20 rounded-md bg-[#F5F5F5] mb-4'>
                            <Image src={require('../../../public/images/about/person-1.png')} alt='img' height={391} width={236} />                 
                        </div>
                        <h1 className='text-[32px] font-[Inter] font-bold mb-2'>Tom Cruise</h1>
                        <h2 className='text-[16px] font-[Poppins] font-normal mb-2'>Founder & Chairman</h2>
                        <div className='flex w-[104px] justify-between mt-4'>
                        <CiTwitter className='h-[24px] w-[24px]' />
                        <FaInstagram className='h-[24px] w-[24px]'/>
                        <BiLogoLinkedin className='h-[24px] w-[24px]'/>
                        </div>
                    </div>

                    {/* catagory 02  */}

                    <div>
                        <div className='w-[370px] h-[430px] flex flex-col justify-center items-center border-2 border-black/20 rounded-md bg-[#F5F5F5] mb-4'>
                            <Image src={require('../../../public/images/about/person-2.png')} alt='img' height={397} width={294} />
                        </div>
                        <h1 className='text-[32px] font-[Inter] font-bold mb-2'>Emma Watson</h1>
                        <h2 className='text-[16px] font-[Poppins] font-normal mb-2'>Managing Director</h2>
                        <div className='flex w-[104px] justify-between mt-4'>
                        <CiTwitter className='h-[24px] w-[24px]' />
                        <FaInstagram className='h-[24px] w-[24px]'/>
                        <BiLogoLinkedin className='h-[24px] w-[24px]'/>
                        </div>
                    </div>

                    {/* catagory 04  */}
                    <div>
                        <div className='w-[370px] h-[430px] flex flex-col justify-center items-center border-2 border-black/20 rounded-md bg-[#F5F5F5] mb-4'>
                            <Image src={require('../../../public/images/about/person-3.png')} alt='img' height={392} width={326} />
                        </div>
                        <h1 className='text-[32px] font-[Inter] font-bold mb-2'>Will Smith</h1>
                         <h2 className='text-[16px] font-[Poppins] font-normal mb-2'>Product Designer</h2>
                         <div className='flex w-[104px] justify-between mt-4'>
                        <CiTwitter className='h-[24px] w-[24px]' />
                        <FaInstagram className='h-[24px] w-[24px]'/>
                        <BiLogoLinkedin className='h-[24px] w-[24px]'/>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Persons
