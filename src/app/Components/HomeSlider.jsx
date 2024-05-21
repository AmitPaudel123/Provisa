"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] flex justify-center items-center right-2 lg:right-8 bg-white h-12 w-12 text-xl rounded-full z-10"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] flex justify-center items-center left-2 lg:left-8 bg-white h-12 w-12 text-xl rounded-full z-10"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

const HomeSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Slider {...settings}>
        <div className="relative h-screen w-screen">
          <Image
            src="/sliderimg1.webp"
            alt="slider"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="relative h-screen w-screen">
          <Image
            src="/sliderimg2.webp"
            alt="slider"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="relative h-screen w-screen">
          <Image
            src="/sliderimg3.jpg"
            alt="slider"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
