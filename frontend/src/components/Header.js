import React, { useEffect, useRef, useState } from "react";
import Container from "./layout/Container";
import DropDown from "./layout/DropDown";
import Flex from "./layout/Flex";
import { BiCategory } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import List from "./layout/List";
import Listitem from "./layout/Listitem";
import Search from "./layout/Search";
import Image from "./layout/Image";
import { Link } from "react-router-dom";

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
    <div className="bg-[#f5f5f3] py-3">
      <Container>
        <Flex className="items-center justify-between">
          {/* category part */}
          <div>
            <DropDown
              dropref={Categoryref}
              //   onClick={() => setCategoryDrpoDownShow(!categoryDrpoDownShow)}
              className="relative cursor-pointer z-[99]"
            >
              <Flex className="items-center gap-x-2.5">
                <BiCategory className="text-[18px] text-bl " />
                <h4 className="font-dm text-sm font-bold text-bl hidden lg:inline-block">
                  Shop by Category
                </h4>
              </Flex>
              {categoryDrpoDownShow && (
                <List className="absolute top-8 left-0 w-[263px] cursor-pointer bg-bl">
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white ease-in duration-300"
                    itemName="Accesories"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white ease-in duration-300"
                    itemName="Furniture"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white ease-in duration-300"
                    itemName="Electronics"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white ease-in duration-300"
                    itemName="Clothes"
                  />
                  <Listitem
                    className="border-b border-[#2D2D2D] py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white ease-in duration-300"
                    itemName="Bags"
                  />
                  <Listitem
                    className="py-4 px-5 font-dm text-sm text-wh_opacity hover:ml-2.5 hover:text-white ease-in duration-300"
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
                className="font-regular w-auto lg:w-[600px] py-2 lg:py-4 pl-5 pr-10 text-base text-black placeholder:font-dm placeholder:text-base placeholder:text-[#c4c4c4]"
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
              className="relative flex z-[99]"
            >
              <FaUserAlt className="cursor-pointer" />
              <BsFillCaretDownFill className="cursor-pointer" />
              {userDrpoDownShow && (
                <List className="absolute top-[30px] right-0 w-[200px] cursor-pointer border border-[#F0F0F0] bg-white">
                  <Listitem
                    className="border-b border-[#F0F0F0] py-4 px-5 font-dm text-sm font-bold capitalize text-black hover:bg-black hover:text-white"
                    itemName="My Account"
                    to="/login"
                  />
                  <Listitem
                    className="py-4 px-5 font-dm text-sm font-bold capitalize text-black hover:bg-black hover:text-white"
                    itemName="Log Out"
                    to="/registration"
                  />
                </List>
              )}
            </DropDown>
            <div>
              <DropDown
                dropref={Cartref}
                //   onClick={() => setCartDrpoDownShow(!cartDrpoDownShow)}
                className="relative flex z-[99]"
              >
                <FaShoppingCart className="cursor-pointer" />
                {cartDrpoDownShow && (
                  <div className="absolute top-[30px] right-0 w-[360px]">
                    {/*  */}
                    <div className="relative flex items-center gap-x-5 bg-[#c4c4c4] p-5">
                      <div>
                        <Image src="images/cartProduct.png" />
                      </div>
                      <div>
                        <h4 className="mb-2 font-dm text-sm font-bold text-bl">
                          Black Smart Watch
                        </h4>
                        <p className="font-dm text-sm font-bold text-bl">
                          $44.00
                        </p>
                      </div>
                      <ImCross className=" absolute top-[50%] right-5 translate-y-[-50%] cursor-pointer text-sm text-bl" />
                    </div>
                    
                    {/*  */}
                    <div className="border border-[#f3f3f5] p-5">
                      <h3 className="font-dm text-base text-[#767676]">
                        Subtotal:{" "}
                        <span className="!font-bold text-bl">$44.00</span>
                      </h3>
                      <div className="mt-3 flex justify-center gap-x-5">
                        <Link
                          to="#"
                          className="border border-bl py-4 px-10 font-dm text-sm font-bold text-bl"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className="bg-bl py-4 px-10 font-dm text-sm font-bold text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
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
