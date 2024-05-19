import React from "react";
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

const Navbar = () => {
  return (
    <nav className=" shadow-sm shadow-black relative">
      <div className="bg-orange-600 text-white py-3  flex justify-evenly px-8 items-center text-xs">
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
      <div className=" flex items-center justify-between w-[75%]  mx-auto border-b-[1px] border-b-orange-500">
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
          <button className=" text-white bg-orange-500 px-2 py-3 rounded-sm">
            Book an Appointment
          </button>
        </div>
      </div>

      {/* link section */}
      <div className=" w-[70%] mx-auto flex justify-evenly pb-4 mt-2 sticky top-0 z-10">
        <p>Home</p>
        <div div className=" flex items-center gap-1">
          About us <IoIosArrowDown />
        </div>
        <div className=" flex items-center gap-1">
          {" "}
          Our services <IoIosArrowDown />{" "}
        </div>
        <div className=" flex items-center gap-1">
          {" "}
          Abroad Study <IoIosArrowDown />
        </div>
        <div className=" flex items-center gap-1">
          {" "}
          Text preparation
          <IoIosArrowDown />
        </div>
        <div className=" flex items-center gap-1"> Blogs</div>
        <div>{"FAQ's"}</div>
        <p>Contact us</p>
      </div>
    </nav>
  );
};

export default Navbar;
