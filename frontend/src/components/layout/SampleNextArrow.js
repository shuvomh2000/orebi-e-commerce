import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-[-17%] xl:top-[-20%] right-[10px] w-10 h-10 xl:w-16 xl:h-16 rounded-full bg-[rgba(0,0,0,.2)] !flex justify-center items-center z-[99] cursor-pointer"
        style={{ ...style}}
        onClick={onClick}
      >
        <AiOutlineRight className="text-[20px] text-white"/>
      </div>
    );
}

export default SampleNextArrow