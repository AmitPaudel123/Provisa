"use client";
import React from "react";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";

const Description = () => {
  return (
    <div className=" my-5">
      <div className=" bg-white text-slate-600 text-center px-2 lg:px-[9rem] my-16">
        <h1 className=" text-[#8b37d8] font-semibold text-2xl mb-2">
          PROFESSIONAL VISA AND EDUCATION SERVICES
        </h1>
        <p className=" h-fit">
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

      <div className=" flex flex-col  items-center justify-center">
        <div className="relative w-full h-[35rem] lg:h-96">
          {/* Background Image */}
          <Image
            src="/sliderimg2.webp"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
            className="absolute z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0  bg-gradient-to-tr from-blue-500 to-red-500 opacity-60 z-10"></div>

          {/* Foreground Content */}
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full text-white gap-2 lg:px-[18rem]">
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <div>
                  <FaUniversity />{" "}
                </div>
              </div>
              <div className=" text-xl font-bold text-center">
                <p>200+</p>
                <p>College & Universities</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <div>
                  <BsGlobeAsiaAustralia />{" "}
                </div>{" "}
              </div>
              <div className=" text-xl font-bold text-center">
                <p>5+</p>
                <p>Countries</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <div>
                  <PiStudentBold />{" "}
                </div>{" "}
              </div>
              <div className=" text-xl font-bold text-center">
                <p>1500+</p>
                <p> Happy Students</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl">
                <div>
                  <SiBookstack />{" "}
                </div>{" "}
              </div>
              <div className=" text-xl font-bold text-center">
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
