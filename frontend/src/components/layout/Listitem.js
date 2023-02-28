import React from "react";
import { Link } from "react-router-dom";

const Listitem = ({ className, itemName, to }) => {
  return (
    <li className={className}>
      <Link to={to}>{itemName}</Link>
    </li>
  );
};

export default Listitem;
