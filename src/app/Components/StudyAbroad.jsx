"use client";
import React from "react";
import Image from "next/image";

const images = [
  {
    title: "STUDY IN AUSTRALIA",
    description:
      "Australia has one of the best institutins and universities...",
    imageSrc: "/study1.webp",
  },
  {
    title: "STUDY IN EUROPE",
    description: "In terms of research and education, Europe is a...",
    imageSrc: "/study2.webp",
  },
  {
    title: "STUDY IN JAPAN",
    description: "Education System in Japan In the decades following world...",
    imageSrc: "/study3.webp",
  },
  {
    title: "STUDY IN CANADA",
    description:
      "Study system in the Canada Its common knowledge that studying...",
    imageSrc: "/study2.webp",
  },
  {
    title: "STUDY IN USA",
    description: "Study system in the USA are the two major intake...",
    imageSrc: "/study2.webp",
  },
];

const LargeImageCard = ({ title, description, imageSrc }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-96 lg:h-full">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex flex-col justify-center items-center p-4">
        <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition duration-300">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-white opacity-0 group-hover:opacity-100 transition duration-300">
          {description}
        </p>
        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
          Learn More
        </button>
      </div>
      <h3 className="absolute bottom-4 left-4 text-lg lg:text-2xl font-bold text-white z-10 group-hover:opacity-0 transition duration-300">
        {title}
      </h3>
    </div>
  );
};

const SmallImageCard = ({ title, description, imageSrc }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-60">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex flex-col justify-center items-center p-4">
        <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition duration-300">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-white opacity-0 group-hover:opacity-100 transition duration-300">
          {description}
        </p>
        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded opacity-0 group-hover:opacity-100 transition duration-300">
          Learn More
        </button>
      </div>
      <h3 className="absolute bottom-4 left-4 text-lg lg:text-2xl font-bold text-white z-10 group-hover:opacity-0 transition duration-300">
        {title}
      </h3>
    </div>
  );
};

const ImageGrid = () => {
  const largeImage = images[0];
  const smallImages = images.slice(1, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
      <div className="lg:col-span-2">
        <LargeImageCard
          title={largeImage.title}
          description={largeImage.description}
          imageSrc={largeImage.imageSrc}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {smallImages.map((image, index) => (
          <SmallImageCard
            key={index}
            title={image.title}
            description={image.description}
            imageSrc={image.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

const StudyAbroad = () => {
  return (
    <div>
      <div className=" flex flex-col items-center">
        <p className=" text-[#8b37d8] font-bold text-2xl">Study Abroad </p>
        <p className=" h-[0.3rem] bg-[#cf2e2e] w-14"></p>
      </div>
      <ImageGrid />
    </div>
  );
};

export default StudyAbroad;
