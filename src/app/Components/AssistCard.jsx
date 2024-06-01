"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { GiDiscussion } from "react-icons/gi";
import { BsFillLaptopFill } from "react-icons/bs";
import { RiTruckFill } from "react-icons/ri";

const integrations = [
  {
    title: "PRE-DEPARTURE BRIEIFING",
    desc: "WE provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, loading, insurance, and medical provisions. The students are ....",
    logo: MdOutlineFlightTakeoff,
    link: "/services/briefing",
  },
  {
    title: "VISA GUIDANCE",
    desc: "Many Students experience bitterness as a result of visa failure as as result of inadequate document and preparations. Our advisors...",
    logo: FaCcVisa,
    link: "/services/visa",
  },
  {
    title: "FINANCE & SCHOLARSHIP",
    desc: "we can help you prepare all of the financial documents you'll need for your chosen destination. We assist you...",
    logo: TbMoneybag,
    link: "/services/finance",
  },
  {
    title: "CARRER COUNSELING",
    desc: "Our advisors have conduced extensive research to assist you in determining whether the United States of America, Australia, Canada, or...",
    logo: GiDiscussion,
    link: "/services/counseling",
  },
  {
    title: "INTERVIEW PREPARATION AND GUIDANCE",
    desc: "We focus on preparing students properly for the interview with proper docuementation;financial as well as academic documentation. Perfect practice...",
    logo: BsFillLaptopFill,
    link: "/services/interview",
  },
  {
    title: "POST ADMISSION SERVICES",
    desc: "We can manage airport pickup service for the students with the help of our resources out in different countries. We...",
    logo: RiTruckFill,
    link: "/services/postadmission",
  },
];

const AssistCard = () => {
  return (
    <section className="gapping bg-white pt-[4rem]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className=" flex flex-col items-center">
          <p className=" text-[#2d1d54] font-bold text-2xl">
            We Assist You With
          </p>
          <p className="h-[0.3rem] bg-[#cf2e2e] w-14"></p>
        </div>
        <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 hfi">
          {integrations.map((item, idx) => {
            return (
              <Link
                href={item.link}
                className="b bg-gray-100 rounded-xl hover:duration-500 hover:shadow-slate-400 shadow-sm p-4  relative hover:bg-[#f4310a] hover:text-white group"
                key={idx}
              >
                <div className="flex items-start justify-between p-4">
                  <div className="space-y-2">
                    <div className="  absolute top-[-2rem] hover:border-white border-[3px] left-[8px] bg-[#f4310a]  p-3 rounded-full w-fit text-white">
                      <item.logo className=" size-8" />
                    </div>

                    <h4 className="text-[#2d1d54] group-hover:text-white text-xl font-semibold pb-3">
                      {item.title}
                    </h4>
                    <p className=" mt-5 group-hover:text-gray-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <Link
                  href={item.link}
                  className="text-slate-800 group-hover:text-gray-300 font-medium px-4"
                >
                  Learn More
                </Link>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AssistCard;
