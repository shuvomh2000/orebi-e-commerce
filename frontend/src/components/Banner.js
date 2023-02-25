import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from './layout/Image';

const Banner = () => {

    let [active,setActive] = useState(0)

    let settings = {
        dots: true,
        beforeChange:(next)=>{
            setActive(next)
        },
        arrows:false,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                display:"inline-block",
                position:"absolute",
                top:"50%",
                left:"8%",
                transform:"translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px"}}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i=== active
                ?{
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0"
              }:{
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0",
              }
            }
            >
              0{i + 1}
            </div>
          ),responsive: [
            {
              breakpoint: 640,
              settings: {
                dots: false
              }
            },
          ]
      };
  return (
    <div className='mx-auto'>
        <Slider {...settings}>
      <div>
        <Link to='#'>
        <Image src="images/banner.png"/>
        </Link>
      </div>
      <div>
      <Link to='#'>
        <Image src="images/banner.png"/>
        </Link>
      </div>
      <div>
      <Link to='#'>
        <Image src="images/banner.png"/>
        </Link>
      </div>
    </Slider>
    </div>
  )
}

export default Banner