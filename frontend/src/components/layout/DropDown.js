import React from 'react'

const DropDown = ({className,children,onClick,dropref}) => {
  return (
    <div onClick={onClick} ref={dropref} className={className}>{children}</div>
  )
}

export default DropDown