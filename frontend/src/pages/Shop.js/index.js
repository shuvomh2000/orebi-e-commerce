import React from "react";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Pagination from "../../components/Pagination";

const Shop = () => {
  return (
    <div>
      <Container>
        <Breadcrumb title="products" />
        <Flex>
          <div className="w-[25%]">bfd</div>
          <div className="w-[75%]">
            <Pagination itemsPerPage={12} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
