"use client";
import React from "react";
import Blogs from "./Blogs";
import ImageCard from "../Components/ImageCard";
import Appointmentform from "../appointment/Appointmentform";
import Recent_blog from "./Recent_blog";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <>
      <ImageCard imgsrc="/blog1.png" topic="Blogs" />
      <div
        className=" flex flex-col lg:flex-row lg:justify-center my-[7rem] lg:gap-12 lg:h-[98rem] overflow-y-scroll"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          className=" w-[90%] mx-auto lg:mx-0 lg:w-[40%]"
          data-aos="fade-down"
        >
          {" "}
          <Blogs />
        </div>{" "}
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[30%]" data-aos="fade-up">
          <Recent_blog />
          <div className=" mt-[-2rem]">
            {" "}
            <Appointmentform />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default page;
