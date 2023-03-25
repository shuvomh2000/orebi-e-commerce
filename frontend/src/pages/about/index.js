import React from 'react'
import Breadcrumb from '../../components/layout/Breadcrumb'
import Container from '../../components/layout/Container'
import Flex from '../../components/layout/Flex'
import Image from '../../components/layout/Image'

const About = () => {
  return (
    <Container>
        <Breadcrumb/>
        <Flex className="gap-x-10 mt-12 md:mt-[136px]">
            <div>
                <Image src="images/about.png"/>
            </div>
            <div>
                <Image src="images/about.png"/>
            </div>
        </Flex>
        <h2 className='font-dm text-2xl md:text-[39px] font-regular text-bl my-16 md:my-[118px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
        <div className="block md:flex gap-x-10">
            <div className='w-full md:w-[31%] mb-5 md:mb-0'>
                <h4 className='font-dm text-[25px] font-bold text-bl capitalize mb-3'>Our Vision</h4>
                <p className='font-dm text-base font-regular text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full md:w-[31%] mb-5 md:mb-0'>
                <h4 className='font-dm text-[25px] font-bold text-bl capitalize mb-3'>Our Story</h4>
                <p className='font-dm text-base font-regular text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className='w-full md:w-[31%] mb-5 md:mb-0'>
                <h4 className='font-dm text-[25px] font-bold text-bl capitalize mb-3'>Our Brands</h4>
                <p className='font-dm text-base font-regular text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </div>
    </Container>
  )
}

export default About