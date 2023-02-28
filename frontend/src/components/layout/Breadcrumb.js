import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

const Breadcrumb = ({title}) => {
    // console.log(window.location.pathname.split("/")[1])
  return (
    <div>
        <h2 className='font-dm font-bold text-5xl text-bl mt-28 mb-2 capitalize'>{title}</h2>
        <p className='font-dm font-regular text-xs text-[#767676] flex items-center gap-x-1 capitalize'>home<AiOutlineRight/><span>{window.location.pathname.split("/")[1]}</span></p>
    </div>
  )
}

export default Breadcrumb