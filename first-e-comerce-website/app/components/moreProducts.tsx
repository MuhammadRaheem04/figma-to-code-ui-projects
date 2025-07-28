'use client'
import React from 'react'
import Image from 'next/image'

const MoreProducts = () => {
    return (
        <div className='w-full h-full md:h-[1000px] flex flex-col items-center justify-center mt-8 '>
            <div className=' w-[90%] h-full md:h-[900px]'>
                {/* Top side  */}
                <div>
                    <span className='border-l-8 border-red-500 text-red-400 pl-3 mb-5 font-bold'>Our Products</span>
                    <div className='flex justify-between'>
                        <h2 className='text-3xl font-bold mt-6'>Explore Our Products</h2>
                    </div>
                </div>
                {/* products Boxes  */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:ml-10 mt-16 w-full h-full md:h-[711px]'>

                    {/* product 01 */}
                    <div className=''>
                        <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center'>
                            <Image src={'/images/products-images/Frame 605-1.png'} alt='Product Image' width={150} height={100} />
                        </div>
                        {/* title  */}
                        <div>
                            <h2 className=' font-bold'>The north coat</h2>
                            <span className='text-red-500'>$260</span> <span className='ml-2'>$360</span>
                            <div className='flex'>
                                <span>
                                    <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100} />
                                </span>
                                <span className='ml-1'>(65)</span>
                            </div>
                        </div>

                    </div>

                    {/* product 02 */}
                    <div>
                        <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center'>
                            <Image src={'/images/products-images/Frame 605-2.png'} alt='Product Image' width={150} height={100} />
                        </div>
                        {/* title  */}
                        <div>
                            <h2 className=' font-bold'>Gucci duffle bag</h2>
                            <span className='text-red-500'>$960</span> <span className='ml-2'>$1160</span>
                            <div className='flex'>
                                <span>
                                    <Image alt='stars' src={'/images/products-images/Four Half Star.png'} width={100} height={100} />
                                </span>
                                <span className='ml-1'>(65)</span>
                            </div>
                        </div>
                    </div>

                    {/* product 03 */}
                    <div>
                        <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center'>
                            <Image src={'/images/products-images/Frame 605-3.png'} alt='Product Image' width={150} height={100} />
                        </div>
                        {/* title  */}
                        <div>
                            <h2 className=' font-bold'>RGB liquid CPU Cooler</h2>
                            <span className='text-red-500'>$160</span> <span className='ml-2'>$170</span>
                            <div className='flex'>
                                <span>
                                    <Image alt='stars' src={'/images/products-images/Four Half Star.png'} width={100} height={100} />
                                </span>
                                <span className='ml-1'>(65)</span>
                            </div>
                        </div>
                    </div>

                    {/* product 04 */}
                    <div>
                        <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center '>
                            <Image src={'/images/products-images/Frame 605-4.png'} alt='Product Image' width={150} height={100} />
                        </div>
                        {/* title  */}
                        <div>
                            <h2 className=' font-bold'>Small BookSelf</h2>
                            <span className='text-red-500'>$360</span>
                            <div className='flex'>
                                <span>
                                    <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100} />
                                </span>
                                <span className='ml-1'>(65)</span>
                            </div>
                        </div>
                    </div>
                      
                      
                    {/* product 05 */}
                     <div>
                        <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center '>
                            <Image src={'/images/products-images/Frame 605-4.png'} alt='Product Image' width={150} height={100} />
                        </div>
                        {/* title  */}
                        <div>
                            <h2 className=' font-bold'>Small BookSelf</h2>
                            <span className='text-red-500'>$360</span>
                            <div className='flex'>
                                <span>
                                    <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100} />
                                </span>
                                <span className='ml-1'>(65)</span>
                            </div>
                        </div>
                    </div> 

                    {/* product 06 */}
                    <div>
                        <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center '>
                            <Image src={'/images/products-images/Frame 605-4.png'} alt='Product Image' width={150} height={100} />
                        </div>
                        {/* title  */}
                        <div>
                            <h2 className=' font-bold'>Small BookSelf</h2>
                            <span className='text-red-500'>$360</span>
                            <div className='flex'>
                                <span>
                                    <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100} />
                                </span>
                                <span className='ml-1'>(65)</span>
                            </div>
                        </div>
                    </div>

                   {/* product 07 */}
                    <div>
                            <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center '>
                                <Image src={'/images/products-images/Frame 605-4.png'} alt='Product Image' width={150} height={100} />
                            </div>
                            {/* title  */}
                            <div>
                                <h2 className=' font-bold'>Small BookSelf</h2>
                                <span className='text-red-500'>$360</span>
                                <div className='flex'>
                                    <span>
                                        <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100} />
                                    </span>
                                    <span className='ml-1'>(65)</span>
                                </div>
                            </div>
                        </div>
                
                 {/* product 08 */}
                 <div>
                            <div className='w-[170px] md:w-[200px] h-[150px] md:h-[170px] bg-gray-200 flex justify-center items-center '>
                                <Image src={'/images/products-images/Frame 605-4.png'} alt='Product Image' width={150} height={100} />
                            </div>
                            {/* title  */}
                            <div>
                                <h2 className=' font-bold'>Small BookSelf</h2>
                                <span className='text-red-500'>$360</span>
                                <div className='flex'>
                                    <span>
                                        <Image alt='stars' src={'/images/products-images/Five star.png'} width={100} height={100} />
                                    </span>
                                    <span className='ml-1'>(65)</span>
                                </div>
                            </div>
                        </div> 

                </div>
            </div>
            <button className='bg-red-500 w-[234px] h-[56px] text-[16px] font-medium font-[Poppins] rounded text-white mt-10'>View All Products</button>
        </div>
    )
}

export default MoreProducts
