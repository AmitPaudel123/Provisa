import ImageCard from "@/app/Components/ImageCard";
import React from "react";
import ContactCard from "../ContactCard";
import Universities from "@/app/Components/Universities";

const page = () => {
  return (
    <div className=" bg-color">
      <ImageCard imgsrc={"/aboutimg.webp"} topic={`Universities`} />
      <div className=" flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-12 pt-[7rem]">
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[20%]">
          <ContactCard />
        </div>
        <div className=" lg:w-[60%] lg:mt-[-6rem]">
          <Universities />
        </div>{" "}
      </div>
    </div>
  );
};

export default page;
