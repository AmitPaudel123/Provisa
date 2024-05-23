import React from "react";
import Image from "next/image";
import ImageCard from "../Components/ImageCard";

const images = [
  {
    src: "/study1.webp",
    title: "Study in Australia",
    description:
      "Australia has one of the best institutions and universities...",
    button: "Learn More",
  },
  {
    src: "/studycanada.webp",
    title: "Study in Canada",
    description:
      "Education system in Canada It's common knowledge that studying...",
    button: "Learn More",
  },
  {
    src: "/study3.webp",
    title: "Study in the USA",
    description: "Education System in USA There are two major intakes...",
    button: "Learn More",
  },
  {
    src: "/study2.webp",
    title: "Study in UK",
    description: "Education system in UK students in the United Kingdom...",
    button: "Learn More",
  },
  {
    src: "/study4.webp",
    title: "Study in Japan",
    description: "Education system in Japan In the decades following world...",
    button: "Learn More",
  },
  {
    src: "/study2.webp",
    title: "Study in Europe",
    description: "In terms of research and education, Europe is a...",
    button: "Learn More",
  },
];

const ImageGrid = () => {
  return (
    <>
      <ImageCard topic={"Abroad Study"} imgsrc={"/abroadstudy.webp"} />
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
              <button className="bg-white text-black py-2 px-4 rounded">
                Learn More
              </button>
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

export default ImageGrid;
