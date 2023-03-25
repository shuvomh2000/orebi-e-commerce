import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

const Breadcrumb = ({title}) => {
    // console.log(window.location.pathname.split("/")[1])
  return (
    <div className='mb-12 md:mb-32 mt-12 md:mt-28'>
        <h2 className='font-dm font-bold text-5xl text-bl mb-2 capitalize'>{window.location.pathname.split("/")[1]}</h2>
        <p className='font-dm font-regular text-xs text-[#767676] flex items-center gap-x-1 capitalize'>home<AiOutlineRight/><span>{window.location.pathname.split("/")[1]}</span></p>
    </div>
  )
}

export default Breadcrumb