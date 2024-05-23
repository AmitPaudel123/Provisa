import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Form from "../Components/Form";
import Location from "../Components/Location";
import { RiMailOpenFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Page = () => {
  const backgroundImageUrl = `/contactbanner.webp`;

  return (
    <div className="mt-[12rem]">
      <div className="relative bg-gradient-to-tr from-slate-600 to-black h-[19rem]">
        <Image
          src="/contactbanner.webp"
          alt="slider"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="object-cover absolute mix-blend-overlay"
        />
        <div className="pl-[12rem] pt-[13rem] text-white font-bold text-4xl">
          {"Books For Counseling"}
        </div>
      </div>
      <div className="mx-auto py-3 w-[50%]">
        <Form />
      </div>
      <div>
        <div className="bg-gray-100">
          {/* Full-screen section with fixed background image */}
          <div
            className="relative h-[20rem] bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="absolute inset-0 bg-primary-450 opacity-60"></div>
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-purple-900 opacity-25"></div>
            {/* Content */}
            <div className="relative md:px-0 px-4 z-10  h-full">
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="uppercase text-accent-350 z-40 text-xl md:text-2xl font-bold text-center pt-4 text-white"
              >
                {"Let's Connect"}
              </h1>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-gray-100 md:text-[19px] md:max-w-7xl text-[17px] md:mt-10 mt-5 flex flex-col lg:flex-row justify-center lg:gap-8"
              >
                <div className=" border-[#cf2e2e] border-2 p-3 rounded-md flex flex-col gap-2 lg:w-[25rem]">
                  <h1 className=" underline mb-2 text-white text-3xl font-semibold">
                    Kathmandu Office
                  </h1>
                  <div className=" flex gap-1 items-center">
                    <FaPhoneAlt />
                    <p>+9779851101782, 01-4531819</p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <FaEnvelope />
                    <p>admin@provisa.com.np</p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <FaMapMarkerAlt />
                    <p>
                      Laxmi Plaza, Putalisadak, Padmodaya <br /> Mode,
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>
                <div className=" border-[#cf2e2e] border-2 p-3 rounded-md flex flex-col gap-2 lg:w-[25rem]">
                  <h1 className=" underline mb-2 text-white text-3xl font-semibold text-center">
                    Nepalgunj Office
                  </h1>
                  <div className=" flex gap-1 items-center">
                    <FaPhoneAlt />
                    <p>+9779851101782</p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <FaEnvelope />
                    <p>admin@provisa.com.np</p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <FaMapMarkerAlt />
                    <p>Nepalgunj, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
};

export default Page;
