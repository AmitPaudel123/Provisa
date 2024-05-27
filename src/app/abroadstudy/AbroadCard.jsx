import React from "react";
import Image from "next/image";
import ImageCard from "../Components/ImageCard";
import Abroadlink from "./Abroadlink";
import Appointmentform from "../appointment/Appointmentform";
const AbroadCard = ({
  topic,
  imgsrc,
  bannerimg,
  descLists,
  description,
  eduSystem,
  livingCost,
  qualifications,
  ug,
  pg,
}) => {
  return (
    <div className=" mt-[12rem] text">
      <ImageCard topic={topic} imgsrc={imgsrc} />
      <div className=" flex flex-col lg:flex-row lg:justify-center lg:gap-12 my-[7rem]  ">
        <div
          className=" w-[90%] mx-auto lg:mx-0 lg:w-[40%] lg:h-[80rem] lg:overflow-y-scroll"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div>
            <Image
              src={bannerimg}
              alt="img"
              height={100}
              width={300}
              className=" w-full h-[30rem]"
            />
          </div>
          <div
            className=" lg:backdrop:h-screen lg:overflow-scroll mt-3"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <p className=" text-[#2d1d54] text-2xl font-semibold mt-2">
              {topic}
            </p>
            <ul className="list-disc list-inside pl-5 py-3">
              {descLists && descLists.length > 0
                ? descLists.map((data, index) => (
                    <li key={index} className="mb-2">
                      {data}
                    </li>
                  ))
                : ""}
            </ul>
            <p>{description}</p>
            <div className="py-3">
              <p className=" text-[#2d1d54] text-2xl font-semibold mt-2">
                Education System
              </p>
              {eduSystem && eduSystem.length > 0
                ? eduSystem.map((data, index) => (
                    <p key={index} className="mb-2">
                      {data}
                    </p>
                  ))
                : ""}
            </div>

            <div>
              {ug && ug.length > 0 ? (
                <div>
                  <p className=" text-xl font-semibold">Undergraduate Degree</p>
                  <p>{ug}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              {pg && pg.length > 0 ? (
                <div className=" my-3">
                  <p className=" text-xl font-semibold">PostGradute Degree</p>
                  <p>{pg}</p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="mt-8">
              {qualifications && qualifications.length > 0 ? (
                <p className=" text-[#2d1d54] text-2xl font-semibold my-2">
                  Qualification & Requirement to Study in Australia for Nepali
                  Students
                </p>
              ) : (
                ""
              )}
              {qualifications && qualifications.length > 0
                ? qualifications.map((qualification, index) => {
                    return (
                      <div key={index} className="mb-6">
                        <h3 className=" font-bold text-xl">
                          {qualification.topic}
                        </h3>
                        <ul>
                          {qualification.lines.map((line, idx) => {
                            return <li key={idx}>{line}</li>; // Return the JSX element here
                          })}
                        </ul>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div className="py-3">
              {livingCost && livingCost.length > 0 ? (
                <p className=" text-[#2d1d54] text-2xl font-semibold mt-2">
                  Cost of Living
                </p>
              ) : (
                ""
              )}
              {livingCost && livingCost.length > 0
                ? livingCost.map((data, index) => (
                    <p key={index} className="mb-2">
                      {data}
                    </p>
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[30%] flex flex-col gap-1">
          <div>
            <Abroadlink />
          </div>
          <div>
            <Appointmentform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadCard;
