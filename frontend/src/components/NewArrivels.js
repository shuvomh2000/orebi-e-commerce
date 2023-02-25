import React from "react";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Heading from "./layout/Heading";
import Products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivels = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
              <div>
                <Products badge={false} />
              </div>
              <div>
                <Products />
              </div>
              <div>
                <Products />
              </div>
              <div>
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
