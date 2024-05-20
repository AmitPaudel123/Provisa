"use client";
import React from "react";
import Image from "next/image";
const Universities = () => {
  return (
    <div>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className=" flex flex-col items-center">
            <p className=" text-[#8b37d8] font-bold text-2xl">
              Top Universities{" "}
            </p>
            <p className=" h-[0.3rem] bg-[#cf2e2e] w-14"></p>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
              {/* LOGO 1 */}
              <div>
                <Image
                  src="/university1.webp"
                  alt="university"
                  width={150}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/university2.webp"
                  alt="university"
                  width={150}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/university3.webp"
                  alt="university"
                  width={150}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/university4.webp"
                  alt="university"
                  width={150}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/university5.webp"
                  alt="university"
                  width={150}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/university6.webp"
                  alt="university"
                  width={150}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/university7.webp"
                  alt="university"
                  width={300}
                  height={150}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
