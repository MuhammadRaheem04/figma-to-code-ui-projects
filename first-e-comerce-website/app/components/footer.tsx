
import React from 'react'
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className='bg-black text-white grid grid-cols-2 px-6 py-6 gap-3 md:flex h-full md:h-[440px] mt-20 justify-evenly items-center w-full'>
   
        <div>
        <h1 className='text-lg font-bold'>Exclusive</h1>
        <ul>
            <li className='mt-5'>Subscribe</li>
            <li className='mt-4'>Get 10% off your first order</li>
            <button className='text-sm border-2 px-3 py-2 flex items-center rounded mt-4'>Enter your email
            <VscSend className='ml-5 w-6 h-6'/>
            </button>
        </ul>
        </div>
      <div className='w-[175px]'>
      <h1 className='font-bold'>Support</h1>
        <ul>
            <li className='mt-5'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
            <li className='mt-4'>exclusive@gmail.com</li>
            <li className='mt-4'>+88015-88888-9999</li>
        </ul>
      </div>

        <div>
      <h1 className='font-bold mt-10'>Account</h1>
        <ul>
            <li className='mt-6'>My Accoun</li>
            <li className='mt-3'>Login / Registe</li>
            <li className='mt-3'>Cart</li>
            <li className='mt-3'>Wishlist</li>
            <li className='mt-3'>Shop</li>
        </ul>
      </div>
      <div>
      <h1 className='font-bold'>Quick Link</h1>
        <ul>
            <li className='mt-6'>Privacy Policy</li>
            <li className='mt-3'>Terms Of Use</li>
            <li className='mt-3'>FAQ</li>
            <li className='mt-3'>Contact</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
