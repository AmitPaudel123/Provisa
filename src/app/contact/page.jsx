import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Form from "../Components/Form";
import Location from "../Components/Location";
import { RiMailOpenFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ImageCard from "../Components/ImageCard";

const Page = () => {
  const backgroundImageUrl = `/contactbanner.webp`;

  return (
    <div className="mt-[6rem]">
      <ImageCard
        imgsrc={"/contactbanner.webp"}
        topic={"Books For Counseling"}
      />
      <div className="lg:mx-auto mx-2 py-3 my-[4rem] w-full lg:w-[50%]">
        <Form />
      </div>
      <div className="my-[4rem]">
        <div className="bg-gray-100">
          {/* Full-screen section with fixed background image */}
          <div
            className="relative h-[40rem] lg:h-[25rem] bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="absolute inset-0 bg-primary-450 opacity-60"></div>
            {/* Semi-transparent overlay with #2d1d54 color */}
            <div className="absolute inset-0 bg-[#2d1d54] opacity-60"></div>
            {/* Content */}
            <div className="relative md:px-0 px-4 z-10 h-full flex flex-col items-center justify-center">
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="uppercase text-gray-300 z-40 text-xl md:text-2xl font-bold text-center pt-4"
              >
                {`Let's Connect`}
              </h1>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-gray-300 md:text-[19px] md:max-w-7xl text-[17px] md:mt-10 mt-5 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 lg:gap-8"
              >
                <div className="border-[#f4310a] border-2 p-3 rounded-md flex flex-col gap-2 h-[13rem] w-[25rem] bg-opacity-80 bg-gray-800">
                  <h1 className="underline mb-2 text-gray-300 text-3xl font-semibold">
                    Kathmandu Office
                  </h1>
                  <div className="flex gap-1 items-center text-gray-300">
                    <FaPhoneAlt />
                    <p>+9779851101782, 01-4531819</p>
                  </div>
                  <div className="flex gap-1 items-center text-gray-300">
                    <FaEnvelope />
                    <p>admin@provisa.com.np</p>
                  </div>
                  <div className="flex gap-1 items-center text-gray-300">
                    <FaMapMarkerAlt />
                    <p>
                      Laxmi Plaza, Putalisadak, Padmodaya <br /> Mode,
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>
                <div className="border-[#f4310a] border-2 p-3 rounded-md flex flex-col gap-2 h-[13rem] w-[25rem] bg-opacity-80 bg-gray-800">
                  <h1 className="underline mb-2 text-gray-300 text-3xl font-semibold text-center">
                    Nepalgunj Office
                  </h1>
                  <div className="flex gap-1 items-center text-gray-300">
                    <FaPhoneAlt />
                    <p>+9779851101782</p>
                  </div>
                  <div className="flex gap-1 items-center text-gray-300">
                    <FaEnvelope />
                    <p>admin@provisa.com.np</p>
                  </div>
                  <div className="flex gap-1 items-center text-gray-300">
                    <FaMapMarkerAlt />
                    <p>Nepalgunj, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[4rem">
        <Location />
      </div>
    </div>
  );
};

export default Page;
