import React from "react";
import Image from "next/image";
import ImageCard from "@/app/Components/ImageCard";
import ContactCard from "../ContactCard";
const page = () => {
  return (
    <>
      {" "}
      <ImageCard imgsrc={"/aboutimg.webp"} topic={`Our Team`} />
      <div className=" flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-8 my-[4rem]">
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[20%]">
          <ContactCard />
        </div>
        <div className="shadow-sm shadow-slate-400 w-fit">
          <div className="relative w-64 group">
            <div className="relative w-fit h-64 overflow-hidden">
              <Image
                width={300}
                height={100}
                src="/mdimg.jpg"
                alt="Descriptive Alt Text"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                <div className=" text-black group-hover:bg-gray-800S py-2 px-4 transition-transform duration-300 ease-in-out transform translate-y-[1rem] z-[999] fixed group-hover:translate-y-[-1rem]">
                  Image Name
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
