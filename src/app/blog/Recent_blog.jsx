"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

const LatestBlog = () => {
  const posts = [
    {
      title: "8 Things to do While Wlanning to Study Abroad",
      img: "/blog1.png",
      authorName: "Sidi dev",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Ways to improve your PTE Score",
      img: "/blog2.webp",
      authorName: "Micheal",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
    {
      title:
        "Top 10 Universities in Japan for International Students-2023 Intake",
      img: "/blog3.png",
      authorName: "Luis",
      date: "Jan 4 2024",
      href: "javascript:void(0)",
    },
  ];

  return (
    <div className=" bg-gray-100 rounded-md mt-[-4rem]">
      <section className="gapping mx-auto ">
        <div>
          <div className="flex">
            <p className="text-[#2d1d54] font-bold text-xl mt-2">
              Recent Blogs
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-2">
          {posts.map((items, key) => (
            <article
              className="w-full mx-auto  border rounded-md duration-300 flex flex-col md:flex-row"
              key={key}
            >
              <a href={items.href} className="flex flex-col md:flex-row w-full">
                <div className="relative flex-none w-full h-24 md:h-32 md:w-1/4">
                  <Image
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-tl-md"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-[#f4310aa8] opacity-0 hover:opacity-65 transition-opacity duration-300 rounded-t-md md:rounded-l-md md:rounded-t-none"></div>
                </div>

                <div className="flex flex-col justify-between p-4 w-full">
                  <div>
                    <h3 className="  hover:text-[#f4310a] hover:opacity-80 text-[#2d1d54]">
                      {items.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-3 ">
                    <div className=" flex gap-2 items-center">
                      <IoPerson className=" text-gray-600" />

                      <p className="block text-header">{items.authorName}</p>
                    </div>
                    <div className="block text-gray-500 text-sm">
                      {items.date}
                    </div>
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

export default LatestBlog;
