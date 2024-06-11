"use client";
import React from "react";
import Location from "../Components/Location";
import ImageCard from "../Components/ImageCard";
import Appointmentform from "./Appointmentform";

const Form = () => {
  const backgroundImageUrl = `/contactbanner.webp`;

  return (
    <div className=" bg-color">
      <ImageCard
        imgsrc={`/appointmentimg.webp`}
        topic={`Books for Counseling`}
      />
      <div className="lg:mx-auto mx-2 my-[4rem] py-3 w-full lg:w-[50%]">
        <Appointmentform />
      </div>

      <div className="my-[4rem]">
        <div className="bg-gray-100">
          {/* Full-screen section with fixed background image */}
          <div
            className="relative h-[25rem] lg:h-[20rem] bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="absolute inset-0 bg-primary-450 opacity-60"></div>
            {/* Semi-transparent overlay with #2d1d54 color */}
            <div className="absolute inset-0 bg-[#2d1d54] opacity-60"></div>
            {/* Content */}
            <div className="relative md:px-0 px-4 z-10 flex flex-col items-center justify-center h-full">
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="uppercase text-gray-300 z-40 text-xl md:text-2xl font-bold text-center"
              >
                {`Let's Connect`}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[4rem]">
        <Location />
      </div>
    </div>
  );
};

export default Form;
