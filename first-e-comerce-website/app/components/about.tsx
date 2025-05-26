'use client'
import React from 'react'
import Image from 'next/image'
import Services from './about/services'
import Persons from './about/persons'

const AboutPage = () => {
    return (
        <div>
        
            <section
                className="h-screen flex flex-col md:flex-row text-center justify-center items-center md:text-start mt-8 mb-8"
            >
                <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">

                    <div className='w-[525px] h-[336px] flex flex-col justify-center '>
                        <h1 className="text-[54px] font-[Inter] font-semibold my-2">Our Story</h1>
                        <p className='my-5'>
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </p>

                        <p>
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <Image
                        src={require('../../public/images/Signup/about image.png')}
                        alt="Profile picture"
                        width={705}
                        height={609}
                        className="m-auto"
                    />
                </div>
            </section>
             
             {/* sevices boxes  */}
             <Services/>
             <Persons/>
        </div>
    )
}

export default AboutPage
