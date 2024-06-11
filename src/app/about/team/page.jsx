import React from "react";
import Image from "next/image";
import ImageCard from "@/app/Components/ImageCard";
import ContactCard from "../ContactCard";
const page = () => {
  return (
    <div className=" bg-color">
      {" "}
      <ImageCard imgsrc={"/aboutimg.webp"} topic={`Our Team`} />
      <div className=" flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-10 lg:gap-12 py-[5rem]">
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[20%]">
          <ContactCard />
        </div>
        <div className="relative w-72 h-72 group">
          <Image
            src="/mdimg.jpg"
            alt="Person Image"
            width={500}
            height={100}
            className=" object-cover"
          />
          <div className=" font-bold bg-none group-hover:transform group-hover:translate-y-[-3rem] transition ease-in-out text-center group-hover:bg-blue-500 text-slate-600 group-hover:text-white">
            <p>Bashu Nepal</p> <p>MD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
