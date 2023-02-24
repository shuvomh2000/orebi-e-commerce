import React from 'react'

const Listitem = ({className,itemName}) => {
  return (
    <li className={className}>{itemName}</li>
  )
}

export default Listitem