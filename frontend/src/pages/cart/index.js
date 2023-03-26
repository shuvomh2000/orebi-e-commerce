import React from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Image from "../../components/layout/Image";
import Button from "../../components/layout/Button";
import {ImCross} from 'react-icons/im'

const Cart = () => {
  return (
    <Container>
      <Breadcrumb />
      <Flex className="bg-[#F5F5F3] py-8 px-5">
        <div className="w-[30%]">
          <h3 className="font-dm text-base font-bold capitalize text-bl">
            Product
          </h3>
        </div>
        <div className="w-[20%]">
          <h3 className="font-dm text-base font-bold capitalize text-bl">
            Price
          </h3>
        </div>
        <div className="w-[20%]">
          <h3 className="font-dm text-base font-bold capitalize text-bl">
            Quantity
          </h3>
        </div>
        <div className="w-[30%]">
          <h3 className="font-dm text-base font-bold capitalize text-bl">
            {" "}
            Total
          </h3>
        </div>
      </Flex>
      <Flex className="items-center py-8 px-5 border border-[#F0F0F0]">
        <div className="w-[30%]">
          <Flex className="items-center gap-x-5">
            <div className="h-[100px] w-[100px]">
              <Image src="images/cartProduct.png" />
            </div>
            <h3 className="font-dm text-base font-bold capitalize text-bl">
              Product
            </h3>
          </Flex>
        </div>
        <div className="w-[20%]">
          <h3 className="font-dm text-[20px] font-bold capitalize text-bl">
            $44.00
          </h3>
        </div>
        <div className="w-[20%]">
          <Flex className="relative w-[140px] justify-center border border-[#767676] py-[8px]">
            <div>
              <h5 className="font-regular font-dm text-base capitalize text-[#767676]">
                33
              </h5>
            </div>
            <div>
              <button className="font-regular absolute top-0 left-[6px] p-2 font-dm text-base capitalize text-[#767676]">
                -
              </button>
            </div>
            <div>
              <button className="font-regular absolute top-0 right-[6px] p-2 font-dm text-base capitalize text-[#767676]">
                +
              </button>
            </div>
          </Flex>
        </div>
        <div className="w-[30%] relative">
          <h3 className="font-dm text-[20px] font-bold capitalize text-bl">
            $44.00
          </h3>
          <button className="p-1.5 absolute top-[50%] right-5 translate-y-[-50%] cursor-pointer text-sm text-bl">
          <ImCross />
          </button>
          
        </div>
      </Flex>
      <Flex className="gap-x-3 border border-[#F0F0F0] p-5">
        <input type="text" className="w-[255px] py-1.5 px-3 font-dm font-bold text-base text-bl placeholder:font-dm placeholder:font-regular placeholder:text-sm placeholder:text-[#767676] border border-[#F0F0F0]" placeholder="Apply Coupon"/>
        <button className="py-1.5 px-5 font-dm font-regular text-sm text-white bg-bl capitalize">apply</button>
      </Flex>
      <div className="w-[646px] ml-auto text-right">
        <h3 className="font-dm font-bold text-[20px] text-bl capitalize mt-[55px] mb-6">cart totals</h3>
        <Flex className="text-left">
            <div className="w-2/4"><h3 className="font-dm font-bold text-base text-bl capitalize py-4 px-5 border border-[#F0F0F0]">Subtotal</h3></div>
            <div className="w-2/4"><h4 className="font-dm font-bold text-base text-[#767676] py-4 px-5 border border-[#F0F0F0]">389.99 $</h4></div>
        </Flex>
        <Flex className="text-left">
            <div className="w-2/4"><h3 className="font-dm font-bold text-base text-bl capitalize py-4 px-5 border border-[#F0F0F0]">coupon</h3></div>
            <div className="w-2/4"><h4 className="font-dm font-bold text-base text-[#767676] py-4 px-5 border border-[#F0F0F0]">89.99 $</h4></div>
        </Flex>
        <Flex className="mb-[30px] text-left">
            <div className="w-2/4"><h3 className="font-dm font-bold text-base text-bl capitalize py-4 px-5 border border-[#F0F0F0]">Total</h3></div>
            <div className="w-2/4"><h4 className="font-dm font-bold text-base text-[#767676] py-4 px-5 border border-[#F0F0F0]">389.99 $</h4></div>
        </Flex>
        <Button title="Proceed to Checkout"/>
      </div>
    </Container>
  );
};

export default Cart;
