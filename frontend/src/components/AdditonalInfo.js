import React from 'react'
import Container from './layout/Container'
import Flex from './layout/Flex'
import {RiNumber2} from 'react-icons/ri'
import {ImTruck} from 'react-icons/im'
import {FaUndoAlt} from 'react-icons/fa'

const AdditonalInfo = () => {
  return (
    <div className='border-b border-[#f0f0f0]'>
        <Container>
            <Flex className="justify-between py-3 md:py-7">
                <Flex className="gap-x-1 md:gap-x-4 items-center">
                    <RiNumber2 className='text-lg'/>
                    <h3 className='font-dm text-[#6d6d6d] text-[10px] md:text-base'>Two years warranty</h3>
                </Flex>
                <Flex className="gap-x-1 md:gap-x-4 items-center">
                    <ImTruck className='text-lg'/>
                    <h3 className='font-dm text-[#6d6d6d] text-[10px] md:text-base'>Free shipping</h3>
                </Flex>
                <Flex className="gap-x-1 md:gap-x-4 items-center">
                    <FaUndoAlt className='text-lg'/>
                    <h3 className='font-dm text-[#6d6d6d] text-[10px] md:text-base'>Return policy in 30 days</h3>
                </Flex>
            </Flex>
        </Container>
    </div>
  )
}

export default AdditonalInfo