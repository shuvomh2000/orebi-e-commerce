import React, { useState } from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const SubCategoryItem = ( props) => {
  let [show, setShow] = useState(false);
  return (
    <div>
      {props.subItem ? (
        <div
          onClick={() => setShow(!show)}
          className="flex py-4 border-b border-[#f0f0f0] cursor-pointer items-center justify-between font-dm text-base font-regular text-[#767676]"
        >
           <h4><span className="inline-block w-[11px] h-[11px] rounded-full mr-2" style={{background:props.color}}></span> 
          {props.title}</h4>
          {show ? <HiMinusSm /> : <HiPlusSm />}
        </div>
      ) : (
        <h4 className="flex py-4 border-b border-[#f0f0f0] cursor-pointer items-center justify-between font-dm text-xl font-regular text-[#767676]">
          {props.title}
        </h4>
      )}
      {show && (
        <>
          <div>{props.children}</div>
        </>
      )}
    </div>
  );
};

export default SubCategoryItem;
