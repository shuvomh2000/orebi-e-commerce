import React from 'react'
import Flex from './layout/Flex'
import Image from './layout/Image'
import Badge from './layout/Badge'
import {AiFillHeart } from 'react-icons/ai'
import {FaBalanceScale,FaShoppingCart } from 'react-icons/fa'


const Products = () => {
  return (
    <div>
        <div className='relative overflow-hidden group'>
            <Image class src="images/product.png"/>
            {Badge &&
            <Badge/>
            }
            <div className='py-6 px-8 bg-white w-full absolute bottom-[-44%] left-0 group-hover:bottom-[0%] ease-in duration-100'>
                <Flex className='gap-x-4 items-center justify-end'>
                    <h3 className='font-dm font-bold text-base text-[#767676] hover:text-bl hover:font-bold cursor-pointer'>Add to Wish List</h3>
                    <AiFillHeart className='text-sm text-bl cursor-pointer'/>
                </Flex>
                <Flex className='gap-x-4 items-center justify-end my-5'>
                    <h3 className='font-dm font-bold text-base text-[#767676] hover:text-bl hover:font-bold cursor-pointer'>Compare</h3>
                    <FaBalanceScale className='text-sm text-bl cursor-pointer'/>
                </Flex>
                <Flex className='gap-x-4 items-center justify-end'>
                    <h3 className='font-dm font-bold text-base text-[#767676] hover:text-bl hover:font-bold cursor-pointer'>Add to Cart</h3>
                    <FaShoppingCart className='text-sm text-bl cursor-pointer'/>
                </Flex>
            </div>
        </div>
        <Flex className="gap-x-[115px] items-center pt-6 pb-4">
            <h3 className='font-dm font-bold text-xl text-bl'>Basic Crew Neck Tee</h3>
            <p className='font-dm font-regular text-base text-[#767676]'>$44.00</p>
        </Flex>
        <p className='font-dm font-regular text-base text-[#767676]'>Black</p>
    </div>
  )
}

export default Products