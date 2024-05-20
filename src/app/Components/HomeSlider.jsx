"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" absolute top-[50%] flex justify-center items-center right-2 lg:right-8 bg-white h-12 w-12 text-xl rounded-full "
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" absolute top-[50%] flex justify-center items-center left-2 lg:left-8 bg-white h-12 w-12 text-xl rounded-full z-10"
      onClick={onClick}
    >
      <IoIosArrowBack />{" "}
    </div>
  );
}

const HomeSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <div className="absolute text-center border-[1px] z-10 top-5 left-5 w-full h-full flex justify-center items-center text-4xl">
            WELCOME TO <br /> PROFESSIONAL VISA AND APPLICATION SERVICE
          </div>
          <div className="relative h-[34rem]">
            <Image
              src="/sliderimg1.webp"
              alt="slider1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div>
          <Image
            src="/sliderimg2.webp"
            alt="slider2"
            width={1550}
            className=" h-[34rem]"
            height={100}
          />
        </div>
        <div>
          <Image
            src="/sliderimg3.jpg"
            alt="slider3"
            width={1550}
            className=" h-[34rem]"
            height={100}
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
