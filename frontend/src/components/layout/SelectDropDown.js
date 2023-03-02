import React from 'react'

const SelectDropDown = ({children,className,onChange}) => {
  return (
    <select onChange={onChange} className={className}>{children}</select>
  )
}

export default SelectDropDown