import React, { useState } from "react";
import SidebarCategory from "./SidebarCategory";
import {AiFillCaretDown} from 'react-icons/ai'

const Sidebar = ({fixed}) => {

  return (
    <>
      <SidebarCategory title="Shop by Category"/>
      <SidebarCategory title="Shop by Color"
      //  icon={<AiFillCaretDown/>}
        fixed={true}/>
      <SidebarCategory title="Shop by Brand"
      //  icon={<AiFillCaretDown/>}
        fixed={true}/>
      <SidebarCategory title="Shop by Price"/>
    </>
  );
};

export default Sidebar;
