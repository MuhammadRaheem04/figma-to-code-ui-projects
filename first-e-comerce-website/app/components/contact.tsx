import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactMain = () => {
  return (
    <div className='w-full h-full overflow-x-hidden px-4'>
      {/* Breadcrumb Links */}
      <div className='flex flex-wrap space-x-2 mt-10 mb-10'>
        <span className='text-[14px] font-normal opacity-50'>
          <Link href="/">Home</Link>
        </span>
        <span>/</span>
        <span className='text-[14px] font-normal text-black'>
          <Link href="/contact">Contact</Link>
        </span>
      </div>

      <div className='w-full flex flex-col md:flex-row md:justify-center items-center gap-6 mb-10'>
        {/* Left Section */}
        <div className='w-full max-w-sm bg-white shadow-lg p-6 space-y-8'>
          {/* Phone */}
          <div>
            <div className='flex items-center space-x-3'>
              <Image src="/images/icons-phone.png" alt='phone-icon' width={40} height={40} />
              <h1 className='font-semibold'>Call To Us</h1>
            </div>
            <div className='space-y-2 mt-3 text-sm'>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <div className='flex items-center space-x-3'>
              <Image src="/images/icons-mail.png" alt='email-icon' width={40} height={40} />
              <h1 className='font-semibold'>Write To Us</h1>
            </div>
            <div className='space-y-2 mt-3 text-sm'>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className='w-full max-w-2xl bg-white shadow-lg p-6'>
          <div className='w-full flex flex-col space-y-4'>
            {/* Input Fields */}
            <div className='flex flex-col md:flex-row gap-4'>
              <input
                type="text"
                className='w-full h-[50px] bg-gray-200 rounded-md px-3'
                placeholder='Your Name *'
              />
              <input
                type="text"
                className='w-full h-[50px] bg-gray-200 rounded-md px-3'
                placeholder='Your Email *'
              />
              <input
                type="text"
                className='w-full h-[50px] bg-gray-200 rounded-md px-3'
                placeholder='Your Phone *'
              />
            </div>

            {/* Textarea */}
            <textarea
              className='w-full h-[200px] bg-gray-200 text-black rounded-md px-3 py-2'
              placeholder='Your message'
            ></textarea>

            {/* Button */}
            <button className='w-full md:w-[215px] h-[56px] text-white bg-red-600 rounded-lg hover:bg-red-700'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMain

