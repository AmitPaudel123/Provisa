"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAbroadStd, setShowAbroadStd] = useState(false);
  const [showPreparation, setShowPreparation] = useState(false);

  return (
    <nav className="shadow-black shadow-sm relative bg-white">
      <div className="bg-[#cf2e2e] text-white py-3  flex justify-evenly lg:px-2 xl:px-8 items-center text-xs">
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" className="text-lg">
            <FaFacebookF className=" hover:bg-white hover:text-orange-500" />
          </a>
          <span className="h-4 w-px bg-slate-600"></span>
          <a href="https://instagram.com" target="_blank" className="text-lg">
            <FaInstagram className=" hover:bg-white hover:text-orange-500" />
          </a>
          <span className="h-4 w-px bg-slate-600"></span>
          <a href="https://twitter.com" target="_blank" className="text-lg">
            <FaTwitter className=" hover:bg-white hover:text-orange-500" />
          </a>
          <span className="h-4 w-px bg-slate-600"></span>
          <a href="https://youtube.com" target="_blank" className="text-lg">
            <FaYoutube className=" hover:bg-white hover:text-orange-500" />
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
          <MdLocationPin />
          Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu,Nepal
        </div>
      </div>

      {/* logo section */}
      <div className=" flex items-center justify-between px-5 xl:px-0 lg:w-[90%] xl:w-[75%]  mx-auto border-b-[1px] border-b-orange-500">
        <Image src="/logo.png" alt="company logo" width={250} height={20} />
        <div className=" flex items-center gap-10">
          <div className=" flex items-center gap-[0.15rem]">
            <FaPhoneAlt className=" text-2xl font-bold text-slate-600" />
            <p className=" text-sm">
              Speak with us: <br />{" "}
              <span className=" text-xl text-orange-500 font-semibold">
                +9779851101782
              </span>
            </p>
          </div>
          <button className=" text-white bg-[#cf2e2e] px-2 py-3 rounded-sm">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* link section */}
      <div className="lg:w-[80%] xl:w-[70%] mx-auto flex justify-center gap-5 xl:justify-evenly  mt-2 sticky top-0 z-10">
        <p className="pb-4 cursor-pointer">Home</p>
        <div
          div
          className=" flex items-center gap-1 relative pb-4 cursor-pointer"
          onMouseOver={() => {
            setShowAbout(true);
          }}
          onMouseLeave={() => {
            setShowAbout(false);
          }}
        >
          About us <IoIosArrowDown />
          {showAbout && (
            <div className="  flex absolute top-[2.47rem] bg-white  flex-col w-[18rem] text-slate-600">
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Who we are
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Message from M.D
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Our Team
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Universities
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Testimonial
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Company Profile
              </Link>
            </div>
          )}
        </div>
        <div
          className=" flex items-center gap-1 pb-4 cursor-pointer"
          onMouseOver={() => {
            setShowServices(true);
          }}
          onMouseLeave={() => {
            setShowServices(false);
          }}
        >
          {" "}
          Our services <IoIosArrowDown />{" "}
          {showServices && (
            <div className="  flex absolute top-[2.47rem] bg-white  flex-col w-[18rem] text-slate-600">
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Pre-Depature Briefing{" "}
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Visa Guidance{" "}
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Finance & Scholarship{" "}
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Carrer Counseling{" "}
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Interview preparance and Guidance{" "}
              </Link>
            </div>
          )}
        </div>
        <div
          className=" flex items-center gap-1 pb-4 cursor-pointer"
          onMouseOver={() => {
            setShowAbroadStd(true);
          }}
          onMouseLeave={() => {
            setShowAbroadStd(false);
          }}
        >
          {" "}
          Abroad Study <IoIosArrowDown />
          {showAbroadStd && (
            <div className="  flex absolute top-[2.47rem] bg-white  flex-col w-[18rem] text-slate-600">
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Study in Australia
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Study in Canada
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Study in UK
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Study in Japan
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                Study in USA
              </Link>
            </div>
          )}
        </div>
        <div
          className=" flex items-center gap-1 pb-4 cursor-pointer"
          onMouseOver={() => {
            setShowPreparation(true);
          }}
          onMouseLeave={() => {
            setShowPreparation(false);
          }}
        >
          {" "}
          Text preparation
          <IoIosArrowDown />
          {showPreparation && (
            <div className="  flex absolute top-[2.47rem] bg-white  flex-col w-[18rem] text-slate-600">
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                IELTS{" "}
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                JAPENESE LANGUAGE{" "}
              </Link>
              <Link
                href="/"
                className=" hover:bg-[#9b51e0] hover:text-white py-2 px-4"
              >
                PTE{" "}
              </Link>
            </div>
          )}
        </div>
        <div className=" flex items-center gap-1 pb-4 cursor-pointer">
          {" "}
          Blogs
        </div>
        <div>{"FAQ's"}</div>
        <p className="pb-4 cursor-pointer">Contact Us</p>
      </div>
    </nav>
  );
};

export default Navbar;
