'use client'
import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
   
    <div className='w-full sm:h-full md:h-[518px] flex justify-center items-center mt-12'>
      <div className='w-[80%] h-full md:h-full'>
           {/* Top side  */}
           <div className='ml-[60px] md:ml-0'>
            <span className='border-l-8 border-red-500 text-red-400 pl-3 mb-5 font-bold'>This Month</span>
            <div className='flex flex-col md:flex-row md:justify-between'>
            <h2 className='text-3xl font-bold mt-6'>Best Selling Products</h2>
            <button className='bg-red-500 px-12 rounded text-white w-[200px] he-[200px]'>View All</button>
            </div>
           </div>
           {/* products Boxes  */}
           <div className='w-full grid grid-cols-2 gap-4 md:flex md:justify-between mt-7'>
            {/* box 01  */}
              <div>
            <div className='w-[150px] md:w-[200px] h-[130px] md:h-[170px] bg-gray-200 flex justify-center items-center'> 
                <Image src={'/images/products-images/Frame 605-1.png'} alt='Product Image' width={150} height={100} />
            </div>
                  {/* title  */}
            <div>
                 <h2 className=' font-bold'>The north coat</h2>
                 <span className='text-red-500'>$260</span> <span className='ml-2'>$360</span>
                 <div className='flex'>
                 <span>
                    <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100}/>
                 </span>
                 <span className='ml-1'>(65)</span>
                 </div>
            </div>

              </div>
                {/* box 02  */}
              <div>
            <div className='w-[150px] md:w-[200px] h-[130px] md:h-[170px] bg-gray-200 flex justify-center items-center'> 
            <Image src={'/images/products-images/Frame 605-2.png'} alt='Product Image' width={150} height={100} />
            </div>
             {/* title  */}
             <div>
                 <h2 className=' font-bold'>Gucci duffle bag</h2>
                 <span className='text-red-500'>$960</span> <span className='ml-2'>$1160</span>
                 <div className='flex'>
                 <span>
                    <Image alt='stars' src={'/images/products-images/Four Half Star.png'} width={100} height={100}/>
                 </span>
                 <span className='ml-1'>(65)</span>
                 </div>
            </div>
              </div>
                 {/* box 03  */}
               <div>
            <div className='w-[150px] md:w-[200px] h-[130px] md:h-[170px] bg-gray-200 flex justify-center items-center'> 
            <Image src={'/images/products-images/Frame 605-3.png'} alt='Product Image' width={150} height={100} />
            </div>
             {/* title  */}
             <div>
                 <h2 className=' font-bold'>RGB liquid CPU Cooler</h2>
                 <span className='text-red-500'>$160</span> <span className='ml-2'>$170</span>
                 <div className='flex'>
                 <span>
                    <Image alt='stars' src={'/images/products-images/Four Half Star.png'} width={100} height={100}/>
                 </span>
                 <span className='ml-1'>(65)</span>
                 </div>
            </div>
               </div>
                   {/* box 04  */}
               <div>
            <div className='w-[150px] md:w-[200px] h-[130px] md:h-[170px] bg-gray-200 flex justify-center items-center '> 
            <Image src={'/images/products-images/Frame 605-4.png'} alt='Product Image' width={150} height={100} />
            </div>
             {/* title  */}
             <div>
                 <h2 className=' font-bold'>Small BookSelf</h2>
                 <span className='text-red-500'>$360</span>
                 <div className='flex'>
                 <span>
                    <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100}/>
                 </span>
                 <span className='ml-1'>(65)</span>
                 </div>
            </div>
               </div>

           </div>
      </div>
    </div>
  )
}

export default Products
