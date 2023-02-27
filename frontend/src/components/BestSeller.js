import React from 'react'
import Container from './layout/Container'
import Flex from './layout/Flex'
import Heading from './layout/Heading'
import Products from './Products'

const BestSeller = () => {
  return (
    <div>
      <Container>
        <Heading title="Our Bestsellers" />
        <div>
            <Flex className="justify-between flex-wrap">
              <div className='w-full sm:w-1/2 lg:w-[23%]'>
                <Products badge={false} />
              </div>
              <div className='w-full sm:w-1/2 lg:w-[23%]'>
                <Products />
              </div>
              <div className='w-full sm:w-1/2 lg:w-[23%]'>
                <Products />
              </div>
              <div className='w-full sm:w-1/2 lg:w-[23%]'>
                <Products />
              </div>
            </Flex>
        </div>
      </Container>
    </div>
  )
}

export default BestSeller