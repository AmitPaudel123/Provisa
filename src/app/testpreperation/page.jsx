import React from "react";
import Image from "next/image";
import ImageCard from "../Components/ImageCard";
import Link from "next/link";

const Page = () => {
  const images = [
    {
      src: "/study4.webp",
      title: "Japanese Language",
      description: "NAT Nihongo Ability Test is the full form of...",
      button: "Learn More",
      link: "/testpreperation/japaneselan",
    },
    {
      src: "/pte.webp",
      title: "PTE",
      description:
        "Pearson English Tests (PTE) Academic English is a language...",
      button: "Learn More",
      link: "/testpreperation/pte",
    },
    {
      src: "/study3.webp",
      title: "IELTS",
      description: "The International English Language Testing System is a...",
      button: "Learn More",
      link: "/testpreperation/ielts",
    },
  ];

  return (
    <div className=" bg-color">
      <ImageCard topic={"Test Preparation"} imgsrc={"/tpreperation.webp"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[4rem] mb-6 mx-10 bg-color ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group w-full h-64 overflow-hidden rounded-lg shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-[#f4310a] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <h2 className="text-white text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.title}
              </h2>
              <p className="text-white mb-4 text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.description}
              </p>
              <Link
                href={image.link}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold z-10 group-hover:opacity-0 transition-opacity duration-300">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
