import React from 'react'

const SelectedOption = ({value,className,title}) => {
  return (
    <option value={value} className={className}>{title}</option>
  )
}

export default SelectedOption