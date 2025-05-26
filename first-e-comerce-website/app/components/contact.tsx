import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactMain = () => {
  return (
    <div>

        {/* links */}
      <div className='flex space-x-3 mt-10 mb-10 ml-10 md:ml-32'>
      <span className='text-[14px] font-normal opacity-50'><Link href="/">Home</Link></span>
      <span>/</span>
      <span className='text-[14px] font-normal text-black'><Link href="/contact">Contact</Link></span>
      </div>

<div className='w-full flex justify-center items-center '>
   
    {/* left div  */}
   <div className='w-[340px] h-[457px] bg-white shadow-lg flex flex-col items-center justify-evenly'>

         <div className='w-[262] h-[122px] -mt-14'>
            <div className='flex items-center space-x-3'>
            <Image src="/images/icons-phone.png" alt='phone-icon' width={40} height={40}/>
            <h1 className='font-semibold'>Call To Us</h1>
            </div>
            <div className='space-y-2 mt-3'>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            </div>
         </div>

   <div className='w-[262] h-[122px]'>
      <div className='flex items-center space-x-3'>
        <Image src="/images/icons-mail.png" alt='email-icon' width={40} height={40}/>
        <h1  className='font-semibold'>Write To US</h1>
      </div>
      <div className='space-y-2 mt-3'>
      <p>Fill out our form and we will contact you within 24 hours.</p>
      <p>Emails: customer@exclusive.com</p>
      <p>Emails: support@exclusive.com</p>
      </div>

   </div>

   </div>

{/* right div  */}
<div className='w-[800px] h-[457px] bg-white shadow-lg  flex flex-col justify-start items-center'>
    <div className='w-[737px] h-[430px] flex flex-col justify-between items-center space-y-3'>
        {/* upper inputs  */}
        <div className='flex space-x-3'>
            <input type="text" className='w-[235] h-[50px] bg-gray-200 rounded-md' placeholder='  Your Name *' />
            <input type="text" className='w-[235] h-[50px] bg-gray-200 rounded-md' placeholder='  Your Email *'/>
            <input type="text" className='w-[235] h-[50px] bg-gray-200 rounded-md' placeholder='  Your Phone *'/>
        </div>

        {/* lower textarea  */}
        <div>
            <textarea className='w-[737px] h-[200px] bg-gray-200 mt-3 text-white rounded-md' placeholder='  Your message'></textarea>
        </div>

        {/* button  */}
        <button className='w-[215px] h-[56px] text-white bg-red-600 rounded-lg'>Send Message</button>

    </div>

</div>

</div>
    </div>

  )
}

export default ContactMain
