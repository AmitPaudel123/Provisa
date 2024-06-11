"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom Arrow Components
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-[-3rem] right-0 text-black bg-white h-9 w-14 text-xl rounded-md flex justify-center items-center cursor-pointer"
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
      className="absolute bottom-[-3rem] left-0 text-black bg-white h-9 w-14 text-xl rounded-md flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

const Testimonials = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" pt-[1rem]">
      <div className="bg-[#2d1d54] py-16 px-4 relative gapping w-full">
        <h2 className="text-center text-white text-3xl font-semibold mb-8">
          {`Student's Testimonial`}{" "}
        </h2>
        <div className=" max-w-screen-lg lg:w-[60rem] mx-auto">
          <Slider {...settings}>
            <div className="p-4 bg-white rounded-lg shadow-lg text-center ">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/aboutbanner.webp"
                  alt="Person 1"
                  width={80}
                  height={80}
                  className="w-[5rem] h-[5rem] rounded-full "
                />
              </div>
              <p className=" text-black mb-2">
                PROVISA provided me great assistance on my student visa
                approval. I really appreciate your efforts, consultation and
                customer services. Thank you PROVISA for guiding me throug the
                right path in my life. You helped me with my life changing
                decision. I will be forever grateful for your help and great
                assistance.
              </p>
              <p className="text-slate-700 text-lg">- David Herioc</p>
              <p className=" text-slate-700 ">The University of Australia</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/aboutbanner.webp"
                  alt="Person 2"
                  width={80}
                  height={800}
                  className=" w-[5rem] h-[5rem] rounded-full"
                />
              </div>
              <p className="  text-black mb-2">
                I feel very lucky to be part of PROVISA. I got perfect
                counselling during my test preparation, documentation
                preparation, visa application and SOP writing writing which
                helped me in visa approval. I would recommend PROVISA as a
                perfect education partner to everyone out there tryinh for
                international study
              </p>
              <p className="text-slate-700 text-lg">- Suman Shrestha</p>
              <p className=" text-slate-700">The University of Australia</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
