import ImageCard from "@/app/Components/ImageCard";
import React from "react";
import ContactCard from "../ContactCard";
import Testimonials from "@/app/Components/Testi";
const page = () => {
  return (
    <div>
      <ImageCard imgsrc={"/aboutimg.webp"} topic={`Testimonial`} />
      <div className=" flex flex-col lg:flex-row gap-6 justify-center my-[4rem]">
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[20%]">
          <ContactCard />
        </div>
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[70%] mt-[-6rem]">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default page;
