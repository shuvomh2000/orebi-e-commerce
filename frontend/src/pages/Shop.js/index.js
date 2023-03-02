import React, { useState } from "react";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Pagination from "../../components/Pagination";
import SelectDropDown from "../../components/layout/SelectDropDown";
import SelectedOption from "../../components/layout/SelectedOption";
import Sidebar from "../../components/Sidebar";

const Shop = () => {
  let [showNumber,setShowNumber] = useState(12)

  return (
    <div>
      <Container>
        <Breadcrumb title="products" />
        <Flex>
          <div className="w-[25%]">
            <Sidebar/>
          </div>
          <div className="relative w-[75%]">
            <Flex>
              <div className="flex items-center gap-x-2">
                <div>
                  <h5>sort by:</h5>
                </div>
                <SelectDropDown className="font-regular w-[239px] border border-bl px-5 py-2 font-dm text-base capitalize">
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="feature"
                  />
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="men"
                  />
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="women"
                  />
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="kids"
                  />
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="toys"
                  />
                </SelectDropDown>
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <h5>show:</h5>
                </div>
                <SelectDropDown onChange={(e)=>setShowNumber(+e.target.value)} className="font-regular w-[239px] border border-bl px-5 py-2 font-dm text-base capitalize">
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="12"
                    // value="12"
                  />
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="24"
                    value="24"
                  />
                  <SelectedOption
                    className="font-regular bg-white font-dm text-sm text-bl hover:bg-bl hover:text-white"
                    title="48"
                    value="48"
                  />
                </SelectDropDown>
              </div>
            </Flex>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
