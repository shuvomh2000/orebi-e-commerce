import React, { useEffect, useState } from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Image from "./layout/Image";
import List from "./layout/List";
import Listitem from "./layout/Listitem";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  let [show, setShow] = useState(false);
  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <div>
      <Container>
        <Flex className="justify-between py-2 items-center">
          <div className="w-full lg:w-2/12">
            <Image src="images/logo.png" />
          </div>
          <div>
            {show ? (
              <FaTimes
                className="block lg:hidden ml-auto text-lg"
                onClick={() => setShow(!show)}
              />
            ) : (
              <GoThreeBars
                className="block lg:hidden ml-auto text-lg"
                onClick={() => setShow(!show)}
              />
            )}
          </div>
          <div className="w-full lg:w-8/12 absolute z-[99999] top-10 left-0 lg:relative text-center lg:top-0 lg:left-0">
            {show && (
              <List className="lg:flex justify-end gap-x-10 bg-white">
                <Listitem
                  className="font-dm text-sm font-bold text-[#767676] py-2 capitalize hover:text-black"
                  itemName="Home"
                  to="/"
                />
                <Listitem
                  className="font-dm text-sm font-bold text-[#767676] py-2 capitalize hover:text-black"
                  itemName="shop"
                  to="/product"
                />
                <Listitem
                  className="font-dm text-sm font-bold text-[#767676] py-2 capitalize hover:text-black"
                  itemName="about"
                  to="/about"
                />
                <Listitem
                  className="font-dm text-sm font-bold text-[#767676] py-2 capitalize hover:text-black"
                  itemName="contacts"
                  to="/contacts"
                />
                <Listitem
                  className="font-dm text-sm font-bold text-[#767676] py-2 capitalize hover:text-black"
                  itemName="journal"
                  to="/#"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
