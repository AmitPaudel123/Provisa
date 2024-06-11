import React from "react";
import Image from "next/image";
const ImageCard = ({ imgsrc, topic }) => {
  return (
    <div>
      <div className="relative bg-gradient-to-tr from-slate-600 to-black  h-[19rem] mb-[4rem]">
        <Image
          src={imgsrc}
          alt="slider"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="object-cover absolute mix-blend-overlay"
        />
        <div className=" pl-5 lg:pl-[12rem] pt-[13rem] text-white font-semibold text-3xl">
          {topic}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
