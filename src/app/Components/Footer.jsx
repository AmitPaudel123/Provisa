"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMailOpenFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="text-slate-300 bg-slate-900 ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className=" flex flex-col gap-2 lg:gap-1 lg:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex  flex-col">
                <Image
                  src="/footerlogo.png"
                  width={200}
                  height={100}
                  alt="footer Logo"
                />
                <div className="w-60">
                  {
                    "Don't just take our word for it, come see us and let us show you that you've come to the right place."
                  }
                </div>
              </a>
            </div>
            <div className="flex flex-col md:flex-row flex-shrink-0 justify-between gap-3 lg:w-[70%]">
              <div>
                <h2 className="mb-4 text-2xl font-semibold">Quick Links</h2>
                <ul className=" font-medium flex flex-col gap-2">
                  <Link href="/" className=" hover:underline">
                    About Us
                  </Link>
                  <Link href="/" className=" hover:underline"></Link>
                  <Link href="/" className=" hover:underline">
                    Our Team
                  </Link>
                  <Link href="/" className=" hover:underline">
                    Contact Us
                  </Link>
                  <Link href="/" className=" hover:underline">
                    FAQ
                  </Link>
                  <Link href="/" className=" hover:underline">
                    Blogs
                  </Link>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  Test Preparation
                </h2>
                <ul className=" font-medium flex flex-col gap-2">
                  <Link href="/" className=" hover:underline">
                    IELTS
                  </Link>
                  <Link href="/" className=" hover:underline">
                    PTE
                  </Link>
                  <Link href="/" className=" hover:underline">
                    JAPANESE LANGUAGE
                  </Link>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
                <div className=" flex flex-col gap-2">
                  <div className=" flex gap-1">
                    {" "}
                    <MdLocationPin className=" text-2xl" />
                    Laxmi Plaza, Putalisadak, Padmodaya <br />
                    Mode,Kathmandu, Nepal
                  </div>
                  <div className=" flex gap-1 items-center">
                    {" "}
                    <FaPhoneAlt /> +9779851101782, 01-4531819
                  </div>
                  <div className=" flex gap-1 items-center">
                    <RiMailOpenFill className=" text-lg" /> admin@provisa.com.np
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center">
              Copyright © 2024, Professional Visa and Education Services
              Pvt.Ltd. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-white">
                <FaFacebookF />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-50 ms-5">
                <FaInstagram />
                <span className="sr-only">Instagram account</span>
              </a>
              <a href="#" className=" ms-5">
                <FaTwitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="ms-5">
                <FaYoutube />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
