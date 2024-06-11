"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";

const TopNav = () => {
  return (
    <div>
      {/* top nav */}
      <div className="bg-[#f4310a] text-white py-3 hidden lg:flex justify-evenly lg:px-2 xl:px-8 items-center top-nav">
        <div className="flex items-center space-x-4">
          <a
            href="https://web.facebook.com/provisa.com.np/?_rdc=1&_rdr"
            target="_blank"
          >
            <FaFacebookF className=" size-4 icon-hover" />
          </a>
          <a
            href="https://www.instagram.com/PROVISANEPAL/"
            target="_blank"
            className="text-lg"
          >
            <FaInstagram className=" icon-hover" />
          </a>
          <a href="https://x.com/" target="_blank" className="text-lg">
            <FaTwitter className=" icon-hover" />
          </a>
          <a href="https://youtube.com" target="_blank" className="text-lg">
            <FaYoutube className=" icon-hover" />
          </a>
        </div>

        <div className=" flex items-center gap-[0.15rem]">
          {" "}
          <FaPhoneAlt /> +9779851101782
        </div>
        <div className=" flex items-center gap-[0.15rem]">
          {" "}
          <RiMailOpenFill /> admin@provisa.com.np
        </div>
        <div className=" flex items-center gap-[0.15rem]">
          <MdLocationPin className=" size-4" />
          Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu,Nepal
        </div>
      </div>

      {/* logo for smaller devices */}
      <div className=" flex flex-col lg:hidden items-start justify-between md:px-5 py-2 mx-auto border-b-[1px] border-b-orange-500 ">
        <div className=" flex justify-center md:justify-start w-full">
          <Link href="/">
            {" "}
            <Image src="/logo.png" alt="company logo" width={300} height={20} />
          </Link>{" "}
        </div>

        <div className=" flex justify-between px-3 md:mx-0 md:justify-end md:gap-16 w-full">
          <div className=" flex items-center gap-[0.15rem]">
            <FaPhoneAlt className=" text-xl md:text-2xl font-bold text-slate-600" />
            <p className=" text-sm">
              Speak with us: <br />{" "}
              <span className=" md:text-xl text-orange-500 font-semibold">
                +9779851101782
              </span>
            </p>
          </div>
          <Link
            href="/appointment"
            className=" text-white bg-[#f4310a] px-2 py-3 rounded-sm"
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* logo */}
      <div className=" hidden bg-white lg:flex items-center justify-between px-5 xl:px-0 lg:w-[90%] xl:w-[80%]  mx-auto border-b-[1px] border-b-orange-500">
        <Link href="/">
          {" "}
          <Image src="/logo.png" alt="company logo" width={300} height={20} />
        </Link>{" "}
        <div className=" flex items-center gap-10">
          <div className=" flex items-center gap-[0.25rem]">
            <FaPhoneAlt className=" text-2xl font-bold text-slate-600" />
            <p className=" text-sm">
              Speak with us: <br />{" "}
              <span className=" text-lg text-orange-500 font-semibold">
                +9779851101782
              </span>
            </p>
          </div>
          <Link
            href="/appointment"
            className=" text-white bg-[#f4310a] px-2 py-3 rounded-sm"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
