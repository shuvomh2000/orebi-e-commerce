import React from 'react'
import {AiOutlineLeft,} from 'react-icons/ai'

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-[-17%] xl:top-[-20%] right-[60px] xl:right-[80px] w-10 h-10 xl:w-16 xl:h-16 rounded-full bg-[rgba(0,0,0,.2)] !flex justify-center items-center z-[99] cursor-pointer"
        style={{ ...style }}
        onClick={onClick}
      >
        <AiOutlineLeft className="text-[20px] text-white"/>
      </div>
    );
}

export default SamplePrevArrow