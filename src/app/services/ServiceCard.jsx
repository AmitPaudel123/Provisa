import React from "react";
import ImageCard from "../Components/ImageCard";
import ServiceLinks from "./ServiceLinks";
import Form from "../Components/Form";
import Image from "next/image";
const ServiceCard = ({ topic, heading, desc, imgg }) => {
  return (
    <div className=" bg-color">
      <ImageCard imgsrc={"/serviceimg.webp"} topic={topic} />
      {/* {imgg ? (
        <div className=" flex justify-center mt-4">
          <Image src={imgg} alt="img not found" width={700} height={200} />
        </div>
      ) : (
        ""
      )} */}
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-12 lg:justify-center pt-[3rem] text">
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[40%]">
          <div className=" flex flex-col mb-2">
            <p className=" text-[#2d1d54] font-semibold text-xl">{heading} </p>
            <p className=" h-[0.3rem] bg-[#cf2e2e] w-14"></p>
          </div>
          <p>{desc}</p>
        </div>
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[30%] flex flex-col gap-10 lg:gap-4">
          <ServiceLinks />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
