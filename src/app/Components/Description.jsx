"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FaUniversity } from "react-icons/fa";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdArrowDown } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";

const Description = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <div className="">
      <div className="bg-white  text-center px-2 lg:px-[11rem] my-16">
        <h1 className="text-[#2d1d54]  font-semibold text-2xl mb-4">
          PROFESSIONAL VISA AND EDUCATION SERVICES
        </h1>
        <p className="h-fit text mx-3 lg:mx-0" data-aos="fade-up">
          {` Professional Visa and Education Services Pvt. Ltd. (Pro-Visa) is a
          professional visa and educational consultancy authorized by the
          Ministry of Education (MOE) and offering free education to students
          interested in studying abroad. Our offices are in Kathmandu and
          Nepalgunj. We have a Learning Center that is fully equipped with
          ultra-modern facilities and provides students with our best advisors
          and tutors for Test Preparation Classes in order to provide better
          service to our students. We are proud of our students who have been
          successful in their careers as a result of our counseling and
          guidance, in addition to our high visa success rate. As a result, we
          may be Nepal's best education consultancy.`}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[35rem] lg:h-96 py-3">
          {/* Background Image */}
          <Image
            src="/sliderimg2.webp"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
            className="absolute z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          {/* Foreground Content */}
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full text-white gap-2 lg:px-[18rem]">
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <FaUniversity />
              </div>
              <div className="text-xl font-bold text-center">
                <p>200+</p>
                <p>College & Universities</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <BsGlobeAsiaAustralia />
              </div>
              <div className="text-xl font-bold text-center">
                <p>5+</p>
                <p>Countries</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <PiStudentBold />
              </div>
              <div className="text-xl font-bold text-center">
                <p>1500+</p>
                <p>Happy Students</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <SiBookstack />
              </div>
              <div className="text-xl font-bold text-center">
                <p>150+</p>
                <p>Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
