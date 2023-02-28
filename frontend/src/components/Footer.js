import React from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Image from "./layout/Image";
import List from "./layout/List";
import Listitem from "./layout/Listitem";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Home"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="About"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Contact"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 1"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 2"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 3"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 4"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Privacy Policy"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Terms & Conditions"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Special E-shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shipping"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[30%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <Image src="images/logo.png" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
