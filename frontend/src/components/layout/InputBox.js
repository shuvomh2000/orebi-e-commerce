import React from 'react'

const InputBox = ({title,type,placeholder}) => {
  return (
    <div>
        <h4 className='font-dm font-bold text-base text-bl capitalize mb-[10px]'>{title}</h4>
        <input className='w-full outline-0 py-4 font-dm font-regular text-sm text-bl placeholder:text-[#767676] border-b border-[#F0F0F0]' type={type} placeholder={placeholder}/>
    </div>
  )
}

export default InputBox