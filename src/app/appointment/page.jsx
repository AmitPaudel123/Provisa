"use client";
import React from "react";
import Location from "../Components/Location";
import ImageCard from "../Components/ImageCard";
import Appointmentform from "./Appointmentform";

const Form = () => {
  const backgroundImageUrl = `/contactbanner.webp`;

  return (
    <>
      <ImageCard
        imgsrc={`/appointmentimg.webp`}
        topic={`Books for Counseling`}
      />
      <Appointmentform />

      <div>
        <div className="bg-gray-100">
          {/* Full-screen section with fixed background image */}
          <div
            className="relative h-[20rem] bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="absolute inset-0 bg-primary-450 opacity-60"></div>
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            {/* Content */}
            <div className="relative md:px-0 px-4 z-10 flex flex-col items-center justify-center h-full">
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="uppercase text-accent-350 z-40 text-xl md:text-2xl font-bold text-white"
              >
                {`Let's Connect`}{" "}
              </h1>
            </div>
          </div>
        </div>{" "}
      </div>
      <Location />
    </>
  );
};

export default Form;
