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
      className="absolute top-[50%] flex justify-center text-black items-center right-5 lg:right-8 bg-white h-12 w-12 text-xl rounded-full z-10"
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
      className="absolute top-[50%] flex justify-center text-black items-center left-5 lg:left-8 bg-white h-12 w-12 text-xl rounded-full z-10"
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
    <div className=" overflow-hidden">
      <Slider {...settings}>
        <div className="relative h-screen w-screen  overflow-hidden">
          <Image
            src="/sliderimg1.webp"
            alt="slider"
            layout="fill"
            objectFit="cover"
            priority={true}
            className="  object-cover absolute"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className=" lg:px-[32rem] py-[24rem]">
              <p className=" text-white px-4 py-3 md:text-xl lg:text-3xl font-semibold text-center bg-black bg-opacity-70 border-white border-[2px]">
                Welcome to Professional Visa <br /> & Education Service
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-screen bg-cover ">
          <Image
            src="/sliderimg2.webp"
            alt="slider"
            layout="fill"
            objectFit="cover"
            priority={true}
            className="  object-cover absolute"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className=" lg:px-[32rem] py-[24rem]">
              <p className=" text-white md:text-xl lg:text-2xl text-center py-5 px-4 font-semibold bg-black bg-opacity-70 border-white border-[2px]">
                GRAB 50% OFF ON IELTS & PTE{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-screen bg-cover ">
          <Image
            src="/sliderimg3.jpg"
            alt="slider"
            layout="fill"
            objectFit="cover"
            priority={true}
            className="  object-cover absolute"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className=" px-[15px] lg:px-[32rem] py-[24rem] ">
              <p className=" text-white text-center hover:animate-bounce bg-black bg-opacity-70 px-1 border-white border-[2px] w-fit py-3 text-2xl font-semibold ">
                We can help you live the life you have been dreaming of
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
