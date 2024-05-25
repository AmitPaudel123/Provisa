"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const LatestBlog = () => {
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
    <div>
      <section className="gapping mx-auto px-4 max-w-screen-xl md:px-8 ">
        <div className="text-center">
          <div className=" flex flex-col items-center">
            <p className=" text-[#8b37d8] font-bold text-2xl">Latest Blogs </p>
            <p className=" h-[0.3rem] bg-[#cf2e2e] w-14"></p>
          </div>{" "}
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community.
          </p>
        </div>
        <Link href="/" className=" text-blue-600 float-right">
          View All
        </Link>
        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div class="absolute inset-0 bg-[#cf2e2ea8] opacity-0 hover:opacity-65 transition-opacity duration-300 rounded-t-md"></div>
                </div>

                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <Image
                      src={items.authorLogo}
                      className="w-full h-full rounded-full"
                      alt={items.authorName}
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block text-gray-900 font-semibold">
                      {items.authorName}
                    </span>
                    <span className="block text-gray-400 text-sm">
                      {items.date}
                    </span>
                  </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-[#5d37d8] font-semibold hover:text-[#cf2e2e]">
                    {items.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
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
