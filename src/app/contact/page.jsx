import React from "react";
import Image from "next/image";
import Form from "../Components/Form";
import Location from "../Components/Location";
const page = () => {
  return (
    <div className=" mt-[12rem]">
      <div className="relative bg-gradient-to-tr from-slate-600 to-black h-[19rem] ">
        <Image
          src="/contactbanner.webp"
          alt="slider"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="  object-cover absolute mix-blend-overlay"
        />
        <div className=" pl-[12rem] pt-[13rem] text-white font-bold text-4xl">
          {"Books For Counseling"}
        </div>
      </div>
      <div className=" mx-auto py-3 w-[50%]">
        {" "}
        <Form />
      </div>
      <Location />
    </div>
  );
};

export default page;
