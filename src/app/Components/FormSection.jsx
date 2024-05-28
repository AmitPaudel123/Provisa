"use client";
import React from "react";
import Image from "next/image";
import Form from "./Form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FormSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <div className=" flex flex-col lg:flex-row w-full justify-center gap-10 lg:gap-8 gapping">
      <div data-aos="fade-down" className="w-full lg:w-[40%]">
        <Image
          src="/formbanner.webp"
          alt="banner"
          height={300}
          width={600}
          className=" w-full "
        />
      </div>
      <div className=" w-full lg:w-[30%]" data-aos="fade-up">
        <Form />
      </div>
    </div>
  );
};

export default FormSection;
