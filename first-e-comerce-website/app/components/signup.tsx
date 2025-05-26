'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className='w-full flex justify-start mt-10'>
      <div className='w-[90%] h-[781px] flex my-auto'>
        {/* left side image  */}
        <div className='w-[70%]'>
            <Image src={require('../../public/images/Signup/Side Image-1.png')} alt='Img' height={781} width={805}/>
        </div>

            {/* right side text  */}
            <div className='w-[30%] flex flex-col justify-center ml-16'>

                {/* headind div  */}
            <div className='space-y-4 mb-4'>
                <h1 className='text-[36px] text-black font-[Inter] font-medium'>Create an account</h1>
                <p className='text-[16px] text-black font-[Poppins] font-normal' >Enter your details below</p>
            </div>
                {/* detail div  */}
                <div className='space-y-8'>
                   <input type="text" placeholder='Name' className=' py-2 px-3 border-b-2  border-gray-200 w-full '  />
                   <input type="email" placeholder='Email or Phone Number' className=' py-2 px-3 border-b-2 border-gray-200 w-full' />
                   <input type="password" placeholder='Password' className='border-b-2 border-gray-200 w-full py-2 px-3' />
                </div>

                {/* button div  */}
                <div className='space-y-4 mt-4'>
                <button className="bg-[#DB4444] text-white text-[16px] font-medium p-2 rounded-md hover:bg-red-700 w-full my-8">Create Account</button>
                <button className="text-black text-[16px] font-medium p-2 outline outline-gray-200 rounded-md flex items-center justify-center w-full"> 
                    <FcGoogle /> 
                   Sign up with Google
                </button>
                </div>

                  {/* bottom text line  */}

                  <div className='flex justify-center mt-8'>
                    <p className='text-[16px] font-[Poppins] font-normal'>Already have account?</p>
                    <p className='text-[16px] font-[Poppins] font-medium ml-4 border-b-2 border-gray-300'><Link href={'/login'}>Log in</Link></p>
                  </div>
                


            </div>

      </div>
    </div>
  )
}

export default Signup
