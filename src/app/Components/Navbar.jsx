"use client";
import React, { useState, useEffect } from "react";
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
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";

import Link from "next/link";

const Navbar = () => {
  //for larger device while hovering
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAbroadStd, setShowAbroadStd] = useState(false);
  const [showPreparation, setShowPreparation] = useState(false);

  //for smaller and medium device whie clicking
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayServices, setDisplayServices] = useState(false);
  const [displayAbroadStd, setdisplayAbroadStd] = useState(false);
  const [displayPreparation, setDisplayPreparation] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  const [hideNav, setHideNav] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHideNav(false);
        setHideLogo(true);
      } else {
        setHideNav(true);
        setHideLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="shadow-slate-400 shadow-sm fixed top-0 z-[999] w-full bg-white ">
      {/* Navbar for larger device----------------------------------------------------------- */}
      {/* top navbar */}
      {hideNav && (
        <div className="bg-[#cf2e2e] text-white py-3 hidden lg:flex justify-evenly lg:px-2 xl:px-8 items-center text-xs">
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
      )}

      {/* logo section */}
      {hideNav && (
        <div className=" hidden lg:flex items-center justify-between px-5 xl:px-0 lg:w-[90%] xl:w-[75%]  mx-auto border-b-[1px] border-b-orange-500">
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
            <Link
              href="/appointment"
              className=" text-white bg-[#cf2e2e] px-2 py-3 rounded-sm"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}

      {/* link section */}
      <div className="lg:w-[80%] xl:w-[70%] mx-auto hidden lg:flex justify-center gap-5 xl:justify-evenly  mt-2 sticky top-0 z-10 py-1">
        <Link href="/" className="pb-4 cursor-pointer">
          Home
        </Link>
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
            <div className="  flex absolute top-[2.47rem] bg-white shadow-sm shadow-slate-400 flex-col w-[18rem] text-slate-600">
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
            <div className="  flex absolute top-[2.47rem] bg-white shadow-sm shadow-slate-400 flex-col w-[18rem] text-slate-600">
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
            <div className="  flex absolute top-[2.47rem] bg-white shadow-sm shadow-slate-400 flex-col w-[18rem] text-slate-600">
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
            <div className="  flex absolute top-[2.47rem] bg-white shadow-sm shadow-slate-400 flex-col w-[18rem] text-slate-600">
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
        <Link href="/faq">{"FAQ's"}</Link>
        <p className="pb-4 cursor-pointer">Contact Us</p>
      </div>
      {/* -------------------------------------------------------------- */}

      {/* Navbar for smaller and medium size device */}
      {/* top logo section */}
      {hideNav && (
        <div className=" flex flex-col lg:hidden items-start justify-between md:px-5 py-2 mx-auto border-b-[1px] border-b-orange-500 ">
          <div className=" flex justify-center md:justify-start w-full">
            <Image src="/logo.png" alt="company logo" width={250} height={20} />
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
              className=" text-white bg-[#cf2e2e] px-2 py-3 rounded-sm"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}

      {/* menu btn and link section */}
      {/* menu button */}
      <div
        className=" lg:hidden flex justify-end gap-6 bg-white shadow-sm shadow-slate-400 py-2 px-4"
        onClick={() => {
          setDisplayMenu(!displayMenu);
        }}
      >
        {hideLogo && (
          <Image src="/logo.png" alt="company logo" width={150} height={20} />
        )}
        <button className=" text-2xl font-bold mx-2">
          <CgMenuRight />{" "}
        </button>
      </div>
      {/* link section  */}
      <div
        className={` flex flex-col lg:hidden fixed gap-4 w-[70%] md:w-[40%] h-screen bg-white top-0 left-0 z-10 py-5 pr-2b text-lg pl-7 transform transition-transform duration-300 ease-in-out shadow-sm shadow-black ${
          displayMenu ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        {/* close btn */}
        <button
          className=" flex justify-end mx-4 text-2xl "
          onClick={() => {
            setDisplayMenu(!displayMenu);
          }}
        >
          {" "}
          <RiCloseLine />
        </button>

        <div className=" flex justify-start w-full mb-5 ">
          <Image src="/logo.png" alt="company logo" width={250} height={20} />
        </div>
        <Link href="/" className=" ">
          Home
        </Link>
        <div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setDisplayAbout(!displayAbout)}
          >
            <span>About us</span> <IoIosArrowDown />
          </div>
          <div
            className={`transition-all duration-300 ${
              displayAbout ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link href="/">Who we are</Link>
              <hr className="my-2" />
              <Link href="/">Message from M.D</Link>
              <hr className="my-2" />
              <Link href="/">Our Team</Link>
              <hr className="my-2" />
              <Link href="/">Universities</Link>
              <hr className="my-2" />
              <Link href="/">Testimonial</Link>
              <hr className="my-2" />
              <Link href="/">Company Profile</Link>
            </div>
          </div>
        </div>

        <div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setDisplayServices(!displayServices)}
          >
            <span>Our services</span> <IoIosArrowDown />
          </div>
          <div
            className={`transition-all duration-300 ${
              displayServices ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link href="/">Pre-Departure Briefing</Link>
              <hr className="my-2" />
              <Link href="/">Visa Guidance</Link>
              <hr className="my-2" />
              <Link href="/">Finance & Scholarship</Link>
              <hr className="my-2" />
              <Link href="/">Career Counseling</Link>
              <hr className="my-2" />
              <Link href="/">Interview Preparation and Guidance</Link>
            </div>
          </div>
        </div>

        <div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setdisplayAbroadStd(!displayAbroadStd)}
          >
            <span>Abroad Study</span> <IoIosArrowDown />
          </div>
          <div
            className={`transition-all duration-300 ${
              displayAbroadStd
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link href="/">Study in Australia</Link>
              <hr className="my-2" />
              <Link href="/">Study in Canada</Link>
              <hr className="my-2" />
              <Link href="/">Study in UK</Link>
              <hr className="my-2" />
              <Link href="/">Study in Japan</Link>
              <hr className="my-2" />
              <Link href="/">Study in USA</Link>
            </div>
          </div>
        </div>

        <div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setDisplayPreparation(!displayPreparation)}
          >
            <span>Test Preparation</span> <IoIosArrowDown />
          </div>
          <div
            className={`transition-all duration-300 ${
              displayPreparation
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link href="/">IELTS</Link>
              <hr className="my-2" />
              <Link href="/">Japanese Language</Link>
              <hr className="my-2" />
              <Link href="/">PTE</Link>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-1  cursor-pointer"> Blogs</div>
        <Link href="/faq">{"FAQ's"}</Link>
        <div className="pb-4 cursor-pointer">Contact Us</div>

        <div className=" flex gap-3">
          <a className=" p-1 bg-blue-700 text-white">
            <FaFacebookF />{" "}
          </a>

          <a className=" p-1 bg-blue-400 text-white">
            <FaTwitter />{" "}
          </a>
          <a className=" p-1 bg-blue-500 text-white">
            <FaInstagram />{" "}
          </a>
          <a className=" p-1 bg-red-700 text-white">
            {" "}
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
