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
      )}

      {/* logo section */}
      {hideNav && (
        <div className=" hidden lg:flex items-center justify-between px-5 xl:px-0 lg:w-[90%] xl:w-[80%]  mx-auto border-b-[1px] border-b-orange-500">
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
      )}

      {/* link section */}
      <div className="lg:w-[80%]  mx-auto hidden lg:flex justify-center gap-5 xl:justify-evenly  mt-2 sticky top-0 py-1 z-[999999]">
        <Link href="/" className="pb-4 cursor-pointer">
          Home
        </Link>
        <Link
          href="/about"
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
              <Link href="/about" className=" nav_link py-2 px-4">
                Who we are
              </Link>
              <Link href="/about/message" className=" nav_link py-2 px-4">
                Message from M.D
              </Link>
              <Link href="/about/team" className=" nav_link py-2 px-4">
                Our Team
              </Link>
              <Link href="/about/universities" className=" nav_link py-2 px-4">
                Universities
              </Link>
              <Link href="/about/testimonial" className=" nav_link py-2 px-4">
                Testimonial
              </Link>
              <a
                href="https://docs.google.com/document/d/1IwMBCj07x4_AgAhs5k_vZKK0wsY_8EF0rNdyuc5D8KQ/edit"
                className=" nav_link py-2 px-4"
              >
                Company Profile
              </a>
            </div>
          )}
        </Link>
        <Link
          href={"/services"}
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
              <Link href="/services/briefing" className=" nav_link py-2 px-4">
                Pre-Depature Briefing{" "}
              </Link>
              <Link href="/services/visa" className=" nav_link py-2 px-4">
                Visa Guidance{" "}
              </Link>
              <Link href="/services/finance" className=" nav_link py-2 px-4">
                Finance & Scholarship{" "}
              </Link>
              <Link href="/services/counseling" className=" nav_link py-2 px-4">
                Carrer Counseling{" "}
              </Link>
              <Link href="/services/interview" className=" nav_link py-2 px-4">
                Interview preparance and Guidance{" "}
              </Link>
            </div>
          )}
        </Link>
        <Link
          href="/abroadstudy/"
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
                href="/abroadstudy/australia"
                className=" nav_link py-2 px-4"
              >
                Study in Australia
              </Link>
              <Link href="/abroadstudy/canada" className=" nav_link py-2 px-4">
                Study in Canada
              </Link>
              <Link href="/abroadstudy/uk" className=" nav_link py-2 px-4">
                Study in UK
              </Link>
              <Link href="/abroadstudy/japan" className=" nav_link py-2 px-4">
                Study in Japan
              </Link>
              <Link href="/abroadstudy/usa" className=" nav_link py-2 px-4">
                Study in USA
              </Link>
            </div>
          )}
        </Link>
        <Link
          href="/testpreperation"
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
                href="/testpreperation/ielts"
                className=" nav_link py-2 px-4"
              >
                IELTS{" "}
              </Link>
              <Link
                href="/testpreperation/japaneselan"
                className=" nav_link py-2 px-4"
              >
                JAPENESE LANGUAGE{" "}
              </Link>
              <Link href="/testpreperation/pte" className=" nav_link py-2 px-4">
                PTE{" "}
              </Link>
            </div>
          )}
        </Link>
        <Link href="/blog" className=" flex items-center gap-1 pb-4">
          {" "}
          Blogs
        </Link>
        <Link href="/faq">{"FAQ's"}</Link>
        <Link className="pb-4" href="/contact">
          Contact Us
        </Link>
      </div>
      {/* -------------------------------------------------------------- */}

      {/* Navbar for smaller and medium size device */}
      {/* top logo section */}
      {hideNav && (
        <div className=" flex flex-col lg:hidden items-start justify-between md:px-5 py-2 mx-auto border-b-[1px] border-b-orange-500 ">
          <div className=" flex justify-center md:justify-start w-full">
            <Link href="/">
              {" "}
              <Image
                src="/logo.png"
                alt="company logo"
                width={300}
                height={20}
              />
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
      )}

      {/* menu btn and link section */}
      {/* menu button */}
      <div className=" lg:hidden flex justify-between  items-center bg-white shadow-sm shadow-slate-400 py-2 px-4">
        {/* {hideLogo && ( */}
        <Link href="/">
          {" "}
          <Image src="/logo.png" alt="company logo" width={200} height={20} />
        </Link>{" "}
        {/* )} */}
        <button
          className=" text-4xl text-[#0f172a]  font-bold mx-2 self-end mb-2"
          onClick={() => {
            setDisplayMenu(!displayMenu);
          }}
        >
          <CgMenuRight />{" "}
        </button>
      </div>
      {/* link section  */}
      <div
        className={` flex flex-col lg:hidden fixed gap-4 w-[70%] md:w-[40%] h-screen overflow-y-scroll bg-white top-0 left-0 z-10 py-5 pr-2b text-lg pl-4 transform transition-transform duration-300 ease-in-out shadow-sm shadow-black ${
          displayMenu ? "translate-x-0" : "-translate-x-full "
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* close btn */}
        <button
          className=" flex justify-end mx-4 text-2xl text-[#0f172a]"
          onClick={() => {
            setDisplayMenu(!displayMenu);
          }}
        >
          {" "}
          <RiCloseLine />
        </button>

        <div className=" w-full mb-5 ">
          <Link href="/">
            {" "}
            <Image src="/logo.png" alt="company logo" width={300} height={20} />
          </Link>{" "}
        </div>
        <Link
          href="/"
          onClick={() => {
            setDisplayMenu(false);
          }}
          className=" text-black"
        >
          Home
        </Link>
        <div>
          <div
            className="side_nav_link text-black"
            onClick={() => setDisplayAbout(!displayAbout)}
          >
            <p>About us</p>{" "}
            <div className=" ">
              <IoIosArrowDown />
            </div>
          </div>
          <div
            className={`transition-all duration-300 ${
              displayAbout ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link
                href="/about"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Who we are
              </Link>
              <hr className="my-2" />
              <Link
                href="/about/message"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Message from M.D
              </Link>
              <hr className="my-2" />
              <Link
                href="/about/team"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Our Team
              </Link>
              <hr className="my-2" />
              <Link
                href="/about/universities"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Universities
              </Link>
              <hr className="my-2" />
              <Link
                href="/about/testimonial"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Testimonial
              </Link>
              <hr className="my-2" />
              <Link
                href="/"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Company Profile
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div
            className="side_nav_link text-black"
            onClick={() => setDisplayServices(!displayServices)}
          >
            <p>Our services</p>{" "}
            <div className="">
              <IoIosArrowDown />
            </div>
          </div>
          <div
            className={`transition-all duration-300 ${
              displayServices ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link
                href="/services/briefing"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Pre-Departure Briefing
              </Link>
              <hr className="my-2" />
              <Link
                href="/services/visa"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Visa Guidance
              </Link>
              <hr className="my-2" />
              <Link
                href="/services/finance"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Finance & Scholarship
              </Link>
              <hr className="my-2" />
              <Link
                href="/services/counseling"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Career Counseling
              </Link>
              <hr className="my-2" />
              <Link
                href="/services/interview"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Interview Preparation and Guidance
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div
            className="side_nav_link text-black"
            onClick={() => setdisplayAbroadStd(!displayAbroadStd)}
          >
            <p>Abroad Study</p>{" "}
            <div className=" ">
              <IoIosArrowDown />
            </div>
          </div>
          <div
            className={`transition-all duration-300 ${
              displayAbroadStd
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link
                href="/abroadstudy/australia"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Study in Australia
              </Link>
              <hr className="my-2" />
              <Link
                href="/abroadstudy/canada"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Study in Canada
              </Link>
              <hr className="my-2" />
              <Link
                href="/abroadstudy/uk"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Study in UK
              </Link>
              <hr className="my-2" />
              <Link
                href="/abroadstudy/japan"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Study in Japan
              </Link>
              <hr className="my-2" />
              <Link
                href="/abroadstudy/usa"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Study in USA
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div
            className="side_nav_link text-black"
            onClick={() => setDisplayPreparation(!displayPreparation)}
          >
            <p>Test Preparation</p>{" "}
            <div className="">
              <IoIosArrowDown />
            </div>{" "}
          </div>
          <div
            className={`transition-all duration-300 ${
              displayPreparation
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="mt-2 bg-white shadow-lg rounded-lg p-4 text-slate-600">
              <Link
                href="/testpreperation/ielts"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                IELTS
              </Link>
              <hr className="my-2" />
              <Link
                href="/testpreperation/japaneselan"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                Japanese Language
              </Link>
              <hr className="my-2" />
              <Link
                href="/testpreperation/pte"
                onClick={() => {
                  setDisplayMenu(false);
                }}
              >
                PTE
              </Link>
            </div>
          </div>
        </div>
        <Link
          href="/blog"
          className=" flex items-center gap-1  cursor-pointer"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          {" "}
          Blogs
        </Link>
        <Link
          href="/faq"
          onClick={() => {
            setDisplayMenu(false);
          }}
          className=" text-black"
        >
          {"FAQ's"}
        </Link>
        <Link
          href="/contact"
          className="pb-4 cursor-pointer text-black"
          onClick={() => {
            setDisplayMenu(false);
          }}
        >
          Contact Us
        </Link>

        <div className=" flex items-center gap-2">
          <a
            href="https://web.facebook.com/provisa.com.np/?_rdc=1&_rdr"
            className=" p-2 rounded-full bg-slate-200 hover:scale-110 text-xl"
            onClick={() => {
              setDisplayMenu(false);
            }}
          >
            <FaFacebookF />{" "}
          </a>

          <a
            href="https://x.com/"
            className=" p-2 rounded-full bg-slate-200 hover:scale-110 text-xl"
            onClick={() => {
              setDisplayMenu(false);
            }}
          >
            <FaTwitter />{" "}
          </a>
          <a
            href="https://www.instagram.com/PROVISANEPAL/"
            className=" p-2 rounded-full bg-slate-200 hover:scale-110 text-xl"
            onClick={() => {
              setDisplayMenu(false);
            }}
          >
            <FaInstagram />{" "}
          </a>
          <a
            href="https://www.youtube.com/"
            className="  hover:scale-110 text-xl p-2 rounded-full bg-slate-200"
            onClick={() => {
              setDisplayMenu(false);
            }}
          >
            {" "}
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
