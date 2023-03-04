import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SubCategoryItem from "./SubCategoryItem";

const SidebarCategory = ({ title, icon, fixed, children }) => {
  let [show, setShow] = useState(true);

  // let handleSubDropDown =()=>{
  // }
  return (
    <div>
      {fixed ? (
        <h4
          onClick={() => setShow(!show)}
          className="py-4 flex cursor-pointer items-center justify-between font-dm text-xl font-bold text-bl"
        >
          {title}
          {show ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </h4>
      ) : (
        <h4 className="py-4 flex cursor-pointer items-center justify-between font-dm text-xl font-bold text-bl">
          {title}
        </h4>
      )}
      {show && (
        <>
          <SubCategoryItem title="category" subItem={false} color="red">
            <p className="py-5 border-b border-[#f0f0f0] cursor-pointer items-center justify-between pl-5 font-dm text-base font-bold text-[#767676]">
              cvdsv
            </p>
          </SubCategoryItem>
          <SubCategoryItem title="category" subItem={true} color="red">
            <p className="py-5 border-b border-[#f0f0f0] cursor-pointer items-center justify-between pl-5 font-dm text-base font-bold text-[#767676]">
              cvdsv
            </p>
          </SubCategoryItem>
        </>
      )}
    </div>
  );
};

export default SidebarCategory;
