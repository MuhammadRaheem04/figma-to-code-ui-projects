'use client'
import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const Sale = () => {
  return (
    <main className='w-full h-[600px] border-b-2 border-gray-200 mb-8'>
    <div className='w-full sm:h-full md:h-[300px] flex justify-center items-center'>
      <div className='w-[90%]  h-full'>

           {/* Top side  */}
           <div>
            <span className='border-l-8 border-red-500 text-red-400 pl-3 mb-5 font-bold'>Today’s</span>
            </div>
            <div className='flex sm:flex-col md:flex-row items-center mb-10'>

            <h2 className='sm:text-[24px] md:text-[36px] font-semibold font-[Inter] mt-6 w-[400px]'>Flash Sales</h2>

            {/* Timer  */}
            <div className=' w-full md:w-[702px] h-[50px] relative flex md:left-24 top-3'>

              {/* day section */}
              <div className='left-0 top-0 absolute flex-col gap-1 inline-flex'>
               <div className='w-[31px] text-black text-[12px] font-medium font-["Poppins"] leading-[18px]'>
                  Days
               </div>
               <div className='w-[44px] h-7 text-[32px] text-black font-bold font-["Heading"] leadimg-[30px] tracking-wider'>03</div>
              </div>

              {/* hour section */}
              <div className='left-[60px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex'>
               <div className='w-[31px] text-black text-[12px] font-medium font-["Poppins"] leading-[18px]'>
                  Hours
               </div>
               <div className='w-[44px] h-7 text-[32px] text-black font-bold font-["Heading"] leadimg-[30px] tracking-wider'>23</div>
              </div>

              {/* Minutes section */}
              <div className='left-[120px] top-0 absolute flex-col gap-1 inline-flex'>
               <div className='w-[31px] text-black text-[12px] font-["Title"] font-medium leading-[18px]'>
                  Minutes
               </div>
               <div className='w-[44px] h-7 text-[32px] text-black font-bold font-["Heading"] leadimg-[30px] tracking-wider'>19</div>
              </div>

              {/* Seconds section */}
              <div className='left-[190px] top-0 absolute flex-col gap-1 inline-flex'>
               <div className='w-[31px] text-black text-[12px] font-medium font-["Poppins"] leading-[18px]'>
                  Seconds
               </div>
               <div className='w-[44px] h-7 text-[32px] text-black font-bold font-["Heading"] leadimg-[30px] tracking-wider'>56</div>
              </div>
             
            </div>
             {/* timer end */}

             {/* arrows  */}
             <div className='flex md:ml-[450px] mt-5 '>
               
               <FiArrowLeft className='w-[24px] h-[24px] bg-gray-100 mx-1 rounded-full' />
               <FiArrowRight className='w-[24px] h-[24px] bg-gray-100 mx-1 rounded-full' />
            
             </div>
            </div>

            {/* top side ended  */}
         

           {/* products Boxes  */}
           <div className='flex sm:flex-col sm:h-full md:flex-row justify-evenly mt-7 ml-16 '>
             {/* box 01  */}
              <div className="w-full sm:w-1/2 md:w-1/4">
            <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'> 
                <Image src={require('../../public/images/product-1.png')} alt='Product Image' width={150} height={100} />
            </div>
                  {/* title  */}
            <div>
                 <h2 className=' font-bold'>HAVIT HV-G92 Gamepad</h2>
                 <span className='text-red-500'>$120</span> <span className='ml-2'>$160</span>
                 <span>
                    <Image alt='stars' src={require('../../public/images/stars/Frame 566.png')} width={150} height={100}/>
                 </span>
            </div>

              </div>
               {/* box 02  */}
              <div className="w-full sm:w-1/2 md:w-1/4">
            <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'> 
            <Image src={require('../../public/images/product-2.png')} alt='Product Image' width={150} height={100} />
            </div>
             {/* title  */}
             <div>
                 <h2 className=' font-bold'>AK-900 Wired Keyboard</h2>
                 <span className='text-red-500'>$960</span> <span className='ml-2'>$1160</span>
                 <span>
                    <Image alt='stars' src={require('../../public/images/stars/Frame 566-1.png')} width={150} height={100}/>
                 </span>
            </div>
              </div>
                  {/* box 03  */}
               <div className="w-full sm:w-1/2 md:w-1/4">
            <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'> 
            <Image src={require('../../public/images/product-3.png')} alt='Product Image' width={150} height={100} />
            </div>
             {/* title  */}
             <div>
                 <h2 className=' font-bold'>IPS LCD Gaming Monitor</h2>
                 <span className='text-red-500'>$370</span> <span className='ml-2'>$400</span>
                 <span>
                    <Image alt='stars' src={require('../../public/images/stars/Frame 566-2.png')} width={150} height={100}/>
                 </span>
            </div>
               </div>
                  {/* box 04  */}
               <div className="w-full sm:w-1/2 md:w-1/4">
            <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center '> 
            <Image src={require('../../public/images/product-4.png')} alt='Product Image' width={150} height={100} />
            </div>
             {/* title  */}
             <div>
                 <h2 className=' font-bold'>S-Series Comfort Chair</h2>
                 <span className='text-red-500'>$375</span> <span className='ml-2'>$400</span>
                 <span>
                    <Image alt='stars' src={require('../../public/images/stars/Frame 566-3.png')} width={150} height={100}/>
                 </span>
            </div>
               </div>

           </div>
      </div>
    
    </div>
    <button className='bg-red-500 px-6 py-4 text-white ml-[580px] rounded-md mt-44'>View All Products</button>
    </main>
  )
}

export default Sale



