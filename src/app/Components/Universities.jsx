"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Universities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true, // Animation happens only once
    });
  }, []);
  return (
    <div className=" bg-color">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-[5rem]">
        <div className="flex flex-col items-center">
          <p className="text-[#2d1d54] font-bold text-2xl">Top Universities</p>
          <p className="h-[0.3rem] bg-[#cf2e2e] w-14"></p>
        </div>
        <div className="mt-6" data-aos="fade-up">
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            <div className="flex items-center">
              <div className="flex-shrink-0 ml-[2rem] mr-[2rem]">
                <Image
                  src="/university1.webp"
                  alt="university"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex-shrink-0 ml-[2rem] mr-[2rem]">
                <Image
                  src="/university2.webp"
                  alt="university"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex-shrink-0 ml-[2rem] mr-[2rem]">
                <Image
                  src="/university3.webp"
                  alt="university"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex-shrink-0 ml-[2rem] mr-[2rem]">
                <Image
                  src="/university4.webp"
                  alt="university"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex-shrink-0 ml-[2rem] mr-[2rem]">
                <Image
                  src="/university5.webp"
                  alt="university"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-shrink-0 ml-[2rem] mr-[2rem]">
                <Image
                  src="/university6.webp"
                  alt="university"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex-shrink-0 ml-[2rem] mr-[2rem]">
                <Image
                  src="/university7.webp"
                  alt="university"
                  width={300}
                  height={150}
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Universities;
