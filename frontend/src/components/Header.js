import React, { useEffect, useRef, useState } from "react";
import Container from "./layout/Container";
import DropDown from "./layout/DropDown";
import Flex from "./layout/Flex";
import { BiCategory } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import List from "./layout/List";
import Listitem from "./layout/Listitem";
import Search from "./layout/Search";

const Header = () => {
  let [categoryDrpoDownShow, setCategoryDrpoDownShow] = useState(false);
  let [userDrpoDownShow, setUserDrpoDownShow] = useState(false);
  let [cartDrpoDownShow, setCartDrpoDownShow] = useState(false);
  let Categoryref = useRef();
  let Userref = useRef();
  let Cartref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (Categoryref.current.contains(e.target)) {
        setCategoryDrpoDownShow(true);
      } else {
        setCategoryDrpoDownShow(false);
      }
      if (Userref.current.contains(e.target)) {
        setUserDrpoDownShow(true);
      } else {
        setUserDrpoDownShow(false);
      }
      if (Cartref.current.contains(e.target)) {
        setCartDrpoDownShow(true);
      } else {
        setCartDrpoDownShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#f5f5f3] py-4">
      <Container>
        <Flex className="items-center justify-between">
          {/* category part */}
          <div>
            <DropDown
              dropref={Categoryref}
            //   onClick={() => setCategoryDrpoDownShow(!categoryDrpoDownShow)}
              className="relative cursor-pointer"
            >
              <Flex className="items-center gap-x-2.5">
                <BiCategory className="text-[18px] text-bl " />
                <h4 className="font-dm text-sm font-bold text-bl">
                  Shop by Category
                </h4>
              </Flex>
              {categoryDrpoDownShow && (
                <List className="absolute top-[30px] left-0 w-[263px] cursor-pointer bg-bl">
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white"
                    itemName="Accesories"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white"
                    itemName="Furniture"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white"
                    itemName="Electronics"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white"
                    itemName="Clothes"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white"
                    itemName="Bags"
                  />
                  <Listitem
                    className="py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white"
                    itemName="Home appliances"
                  />
                </List>
              )}
            </DropDown>
          </div>
          {/* search */}
          <div>
            <div className="relative font-dm ">
              <Search
                className="font-regular w-[600px] py-4 pl-5 pr-10 text-base text-black placeholder:font-dm placeholder:text-base placeholder:text-[#c4c4c4]"
                placeholder="Search Products..."
              />
              <FaSearch className="absolute right-4 top-[50%] translate-y-[-50%] text-base" />
            </div>
          </div>
          {/* user & cart */}
          <div className="flex gap-x-5">
            <DropDown
              dropref={Userref}
            //   onClick={() => setUserDrpoDownShow(!userDrpoDownShow)}
              className="relative flex"
            >
              <FaUserAlt className="cursor-pointer" />
              <BsFillCaretDownFill className="cursor-pointer" />
              {userDrpoDownShow && (
                <List className="absolute top-[30px] right-0 w-[200px] cursor-pointer border border-[#F0F0F0] bg-white">
                  <Listitem
                    className="border-b border-[#F0F0F0] py-4 px-5 font-dm text-sm font-bold capitalize text-black hover:bg-black hover:text-white"
                    itemName="My Account"
                  />
                  <Listitem
                    className="py-4 px-5 font-dm text-sm font-bold capitalize text-black hover:bg-black hover:text-white"
                    itemName="Log Out"
                  />
                </List>
              )}
            </DropDown>
            <div>
            <DropDown
              dropref={Cartref}
            //   onClick={() => setCartDrpoDownShow(!cartDrpoDownShow)}
              className="relative flex"
            >
              <FaShoppingCart className="cursor-pointer" />
              {cartDrpoDownShow && (
                <>
                <div className="flex">
<div>
    <Image src/>
</div>
<div></div>
                </div>
                <div></div>
                </>
              )}
            </DropDown>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
