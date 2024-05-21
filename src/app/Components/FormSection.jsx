import React from "react";
import Image from "next/image";
import Form from "./Form";
const FormSection = () => {
  return (
    <div className=" flex w-full justify-center gap-8">
      <Image src="/formbanner.webp" alt="banner" height={300} width={600} />
      <div className=" w-[40%]">
        <Form />
      </div>
    </div>
  );
};

export default FormSection;
