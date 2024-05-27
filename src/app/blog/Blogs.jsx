"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

const Blogs = () => {
  const posts = [
    {
      title: "8 Things to do While Wlanning to Study Abroad",
      desc: "Get your future started with Provisa Nepal. Almost every opportunity comes during a crisis. This is also true for studying...",
      img: "/blog1.png",
      authorName: "Sidi dev",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Ways to improve your PTE Score",
      desc: "There are many ways to improve your PTE. Reading comprehension, writing , and speaking ability are the three main criteria...",
      img: "/blog2.webp",
      authorName: "Micheal",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title: "8 Things to do While Wlanning to Study Abroad",
      desc: "Get your future started with Provisa Nepal. Almost every opportunity comes during a crisis. This is also true for studying...",
      img: "/blog1.png",
      authorName: "Sidi dev",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Ways to improve your PTE Score",
      desc: "There are many ways to improve your PTE. Reading comprehension, writing , and speaking ability are the three main criteria...",
      img: "/blog2.webp",
      authorName: "Micheal",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title: "8 Things to do While Wlanning to Study Abroad",
      desc: "Get your future started with Provisa Nepal. Almost every opportunity comes during a crisis. This is also true for studying...",
      img: "/blog1.png",
      authorName: "Sidi dev",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Ways to improve your PTE Score",
      desc: "There are many ways to improve your PTE. Reading comprehension, writing , and speaking ability are the three main criteria...",
      img: "/blog2.webp",
      authorName: "Micheal",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },

    {
      title: "8 Things to do While Wlanning to Study Abroad",
      desc: "Get your future started with Provisa Nepal. Almost every opportunity comes during a crisis. This is also true for studying...",
      img: "/blog1.png",
      authorName: "Sidi dev",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Ways to improve your PTE Score",
      desc: "There are many ways to improve your PTE. Reading comprehension, writing , and speaking ability are the three main criteria...",
      img: "/blog2.webp",
      authorName: "Micheal",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title:
        "Top 10 Universities in Japan for International Students-2023 Intake",
      desc: "Japan - the land of the rising sun. Anybody who wants to expand their career and field of expertise considers",
      img: "/blog3.png",
      authorName: "Luis",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
  ];

  return (
    <div
      className=" lg:h-[98rem] overflow-y-scroll"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <section className=" mt-9 ">
        <div className=" grid gap-8">
          {posts.map((items, key) => (
            <article
              className="w-full shadow-lg border rounded-md duration-300 hover:shadow-sm flex flex-col md:flex-row"
              key={key}
            >
              <a href={items.href} className="flex flex-col md:flex-row w-full">
                <div className="relative flex-none w-full h-48 md:h-auto md:w-1/3">
                  <Image
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-[#f4310aa8] opacity-0 hover:opacity-65 transition-opacity duration-300 rounded-t-md md:rounded-l-md md:rounded-t-none"></div>
                </div>

                <div className="flex flex-col justify-between p-4 w-full">
                  <div className="flex justify-between items-center mt-3 ">
                    <div className=" flex gap-2 items-center">
                      <IoPerson className=" text-gray-600" />

                      <p className="block text-header">{items.authorName}</p>
                    </div>
                    <div className="block text-gray-500 text-sm mr-5">
                      {items.date}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg text-[#2d1d54] font-semibold hover:text-[#f4310a]">
                      {items.title}
                    </h3>
                    <p className="text text-sm mt-1">{items.desc}</p>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
