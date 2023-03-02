import React, { useState } from "react";
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'

const SidebarCategory = ({ title, icon, fixed }) => {
  let [show, setShow] = useState(true);
  return (
    <div>
      {/* onClick={()=>setShow(!show)} */}
      {/* <h1 className="flex items-center justify-between font-dm text-xl font-bold text-bl">
        {title}
        {icon}
      </h1> */}
      {fixed ? (
        <h4
          onClick={() => setShow(!show)}
          className="flex items-center justify-between font-dm text-xl font-bold text-bl cursor-pointer"
        >
          {title}
          {show?
          <AiFillCaretUp/>
          :
          <AiFillCaretDown/>
          }
        </h4>
      ) : (
        <h4 className="flex items-center justify-between font-dm text-xl font-bold text-bl cursor-pointer">
          {title}
          {/* {icon} */}
        </h4>
      )}
      {show && (
        <>
          <p>cvdsv</p>
          <p>cvdsv</p>
          <p>cvdsv</p>
          <p>cvdsv</p>
        </>
      )}
    </div>
  );
};

export default SidebarCategory;
