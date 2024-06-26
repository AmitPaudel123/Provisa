"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { IoPerson } from "react-icons/io5";
import { useEffect } from "react";
import "aos/dist/aos.css";
const LatestBlog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true, // Animation happens only once
    });
  }, []);
  const posts = [
    {
      title: "8 Things to do While Wlanning to Study Abroad",
      desc: "Get your future started with Provisa Nepal. Almost every opportunity comes during a crisis. This is also true for studying...",
      img: "/blog1.png",
      authorLogo: "",
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
    <div className="pt-[2rem]">
      <section className="gapping mx-auto px-4 max-w-screen-xl md:px-8 ">
        <div className="text-center">
          <div className=" flex flex-col items-center">
            <p className=" text-[#2d1d54] font-bold text-2xl">Latest Blogs </p>
            <p className=" h-[0.3rem] bg-[#f4310a] w-14"></p>
          </div>{" "}
          <p className="mt-3 text-header">
            Blogs that are loved by the community.
          </p>
        </div>
        <Link href="/blog" className=" text-blue-600 float-right">
          View All
        </Link>
        <div
          className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          {posts.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={key}
            >
              <a href={items.href}>
                <div class="relative">
                  <Image
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full h-full rounded-t-md"
                    width={500}
                    height={400}
                  />
                  <div class="absolute inset-0 bg-[#f4310aa8] opacity-0 hover:opacity-65 transition-opacity duration-300 rounded-t-md"></div>
                </div>

                <div className="flex  justify-between mt-2 pt-3 ml-4 mr-2">
                  <div className=" text-gray-500 flex gap-2 items-center">
                    <IoPerson />
                    <p className="block text-header font-semibold ">
                      {items.authorName}
                    </p>
                  </div>
                  <div className="block text-gray-500 text-sm">
                    {items.date}
                  </div>
                </div>

                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-[#2d1d54] font-semibold hover:text-[#f4310a] opacity-80">
                    {items.title}
                  </h3>
                  <p className="text text-sm mt-1">{items.desc}</p>
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
