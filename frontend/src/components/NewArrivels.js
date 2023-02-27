import React from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Heading from "./layout/Heading";
import Products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const NewArrivels = () => {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay:true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            arrows:true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
            arrows:true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        }
      ]
  };
  return (
    <div>
      <Container>
        <Heading title="New Arrivals" />
        <div>
          <Slider {...settings}>
            {/* <Flex className="justify-between"> */}
              <div className="w-[20%] px-3">
                <Products badge={false} />
              </div>
              <div className="w-[20%] px-3">
                <Products />
              </div>
              <div className="w-[20%] px-3">
                <Products />
              </div>
              <div className="w-[20%] px-3">
                <Products />
              </div>
              <div className="w-[20%] px-3">
                <Products />
              </div>
            {/* </Flex> */}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivels;
