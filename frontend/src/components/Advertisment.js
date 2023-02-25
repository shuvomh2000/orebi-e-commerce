import React from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Image from "./layout/Image";

const Advertisment = () => {
  return (
    <div className="mt-8 lg:mt-[140px]">
      <Container>
        <Flex className="gap-x-3 md:gap-x-10">
          <div className="w-1/2">
            <Image src="images/Ad_1.png"/>
          </div>
          <div className="w-1/2">
            <div>
              <div className="mb-[10px] md:mb-[40px]">
                <Image src="images/Ad_3.png" />
              </div>
              <div >
                <Image src="images/Ad_2.png" />
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertisment;
