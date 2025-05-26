
import React from 'react'
import Link from 'next/link'
import { MdArrowForwardIos } from "react-icons/md";
import Description from '@/components/productDetail/description';
import RelatedProducts from '@/components/productDetail/relatedProducts';
import ProductDetailMain from '@/components/productDetail/productDetailMain';

const ProductDetail = () => {
    return (
        <div>
              {/* header  */}
              <div className='w-full h-[100px] flex items-center mt-[80px]'>
                <ul className='flex items-center gap-3 md:gap-5 ml-3 md:ml-20'>
                    <li className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins]'><Link href={'/'}>Home</Link></li>
                    <span><MdArrowForwardIos className='w-[15px] h-[15px] text-black' /></span>
                    <li className='text-[16px] text-[#9F9F9F] font-normal font-[Poppins]'><Link href={'/shop'}>Shop</Link></li>
                    <span><MdArrowForwardIos className='w-[15px] h-[15px] text-black' /></span>
                    <span>|</span>
                    <li className='text-[16px] text-black font-normal font-[Poppins]'>Asgaard sofa</li>
                </ul>
              </div>
              {/* main  */}
             <ProductDetailMain/>
              <Description/>
              <RelatedProducts/>


        </div>
    )
}

export default ProductDetail