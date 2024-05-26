import React from "react";
import Image from "next/image";
import Form from "./Form";
const FormSection = () => {
  return (
    <div className=" flex flex-col lg:flex-row w-full justify-center gap-10 lg:gap-8 gapping">
      <Image
        src="/formbanner.webp"
        alt="banner"
        height={300}
        width={600}
        className=" w-full lg:w-[40%]"
      />
      <div className=" w-full lg:w-[30%]">
        <Form />
      </div>
    </div>
  );
};

export default FormSection;
