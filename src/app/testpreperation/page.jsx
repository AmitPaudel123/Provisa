import React from "react";
import Image from "next/image";
import ImageCard from "../Components/ImageCard";
import Link from "next/link";
const page = () => {
  const images = [
    {
      src: "/study4.webp",
      title: "Japenese Language",
      description: "NAT Nihongo Ability Test is teh full form of...",
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
    <>
      <ImageCard topic={"Test Preperation"} imgsrc={"/tpreperation.webp"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[4rem] mb-6 mx-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group w-full h-64 overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.title}
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Ensures the image covers the container without stretching
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl font-bold mb-2">
                {image.title}
              </h2>
              <p className="text-white mb-4 text-center px-4">
                {image.description}
              </p>
              <Link
                href={image.link}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Learn More
              </Link>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
