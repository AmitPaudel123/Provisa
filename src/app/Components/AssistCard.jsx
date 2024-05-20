"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const integrations = [
  {
    title: "PRE-DEPARTURE BRIEIFING",
    desc: "WE provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, loading, insurance, and medical provisions. The students are ....",
    logo: "/assistimg1.webp",
  },
  {
    title: "VISA GUIDANCE",
    desc: "Many Students experience bitterness as a result of visa failure as as result of inadequate document and preparations. Our advisors...",
    logo: "/assistimg2.webp",
  },
  {
    title: "FINANCE & SCHOLARSHIP",
    desc: "we can help you prepare all of the financial documents you'll need for your chosen destination. We assist you...",
    logo: "/assistimg3.webp",
  },
  {
    title: "CARRER COUNSELING",
    desc: "Our advisors have conduced extensive research to assist you in determining whether the United States of America, Australia, Canada, or...",
    logo: "/assistimg4.webp",
  },
  {
    title: "INTERVIEW PREPARATION AND GUIDANCE",
    desc: "We focus on preparing students properly for the interview with proper docuementation;financial as well as academic documentation. Perfect practice...",
    logo: "/assistimg5.webp",
  },
  {
    title: "POST ADMISSION SERVICES",
    desc: "We can manage airport pickup service for the students with the help of our resources out in different countries. We...",
    logo: "/assistimg6.webp",
  },
];

const AssistCard = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className=" flex flex-col items-center">
          <p className=" text-[#8b37d8] font-bold text-2xl">
            We Assist You With
          </p>
          <p className=" h-[0.3rem] bg-[#cf2e2e] w-14"></p>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, idx) => {
            return (
              <Link
                href="/"
                className="border rounded-lg hover:scale-105 duration-100 hover:shadow-md hover:shadow-black shadow-sm"
                key={idx}
              >
                <div className="flex items-start justify-between p-4">
                  <div className="space-y-2">
                    <div className=" bg-white shadow-sm shadow-slate-500 p-3 rounded-full w-fit text-white">
                      <Image
                        src={item.logo}
                        width={50}
                        height={50}
                        alt="logo"
                        className=" w-14 h-14"
                      />
                    </div>

                    <h4 className="text-[#cf2e2e] font-semibold">
                      {item.title}
                    </h4>
                    <p className=" text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="py-5 px-4 border-t text-right">
                  <Link
                    href="javascript:void(0)"
                    className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                  >
                    View more
                  </Link>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AssistCard;
