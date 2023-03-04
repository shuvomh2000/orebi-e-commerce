import React, { useState } from "react";
import SidebarCategory from "./SidebarCategory";
import { AiFillCaretDown } from "react-icons/ai";

const Sidebar = ({ fixed, children }) => {
  return (
    <>
      <SidebarCategory title="Shop by Category"/>
      <SidebarCategory title="Shop by Color"fixed={true}/>
      <SidebarCategory title="Shop by Brand" fixed={true}/>
      <SidebarCategory title="Shop by Price"/> 
    </>
  );
};

export default Sidebar;
