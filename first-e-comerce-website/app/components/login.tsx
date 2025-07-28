
'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const LogIn = () => {
  return (
    <div className='w-full flex justify-start mt-10'>
      <div className='w-[90%] h-[781px] flex my-auto'>
        {/* left side image  */}
        <div className='w-[70%]'>
            <Image src={'/images/Signup/Side Image-1.png'} alt='Img' height={781} width={805}/>
        </div>

            {/* right side text  */}
            <div className='w-[30%] flex flex-col justify-center'>

                {/* headind div  */}
            <div className='space-y-4 mb-4'>
                <h1 className='text-[36px] text-black font-[Inter] font-medium'>Log in to Exclusive</h1>
                <p className='text-[16px] text-black font-[Poppins] font-normal' >Enter your details below</p>
            </div>
                {/* detail div  */}
                <div className='space-y-8'>
                   <input type="email" placeholder='Email or Phone Number' className=' py-2 px-3 border-b-2 border-gray-200 w-[80%]' />
                   <input type="password" placeholder='Password' className='border-b-2 border-gray-200 w-[80%] py-2 px-3' />
                </div>

                {/* button div  */}
                <div className='space-y-4 mt-8 flex justify-between items-center '>
                <button className="bg-[#DB4444] text-white text-[16px] font-medium p-2 rounded-md hover:bg-red-700 w-1/3">Log In</button>
                <Link href={''}><p>Forget Password?</p></Link> 
                </div>
            </div>

      </div>
    </div>
  )
}

export default LogIn