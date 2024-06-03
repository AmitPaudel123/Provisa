"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMailOpenFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      once: false,
    });
  }, []);

  return (
    <div className=" lg:px-[3rem] bg-slate-900">
      <footer className="text-slate-300 ">
        <div className=" p-4 py-6 lg:py-8 ml-3">
          <div className="flex flex-col gap-2 lg:gap-1 lg:flex-row md:justify-between">
            <div className="mb-6 md:mb-0" data-aos="fade-up">
              <p className="flex flex-col">
                <Link href="/">
                  <Image
                    src="/footerlogo.png"
                    width={250}
                    height={100}
                    alt="footer Logo"
                  />
                </Link>
                <div className="w-60 footer-txt">
                  {
                    "Don't just take our word for it, come see us and let us show you that you've come to the right place."
                  }
                </div>
              </p>
            </div>
            <div
              className="flex flex-col md:flex-row flex-shrink-0 justify-between gap-3 lg:w-[70%]"
              data-aos="fade-up"
            >
              <div>
                <h2 className="mt-4 lg:mt-0 mb-4 text-2xl font-semibold opacity-90">
                  Quick Links
                </h2>
                <ul className="font-medium flex flex-col gap-2">
                  <Link
                    href="/about"
                    className="text-underline text-effect footer-txt"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="text-underline text-effect footer-txt"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/contact"
                    className="text-underline text-effect footer-txt"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="text-underline text-effect footer-txt"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/"
                    className="text-underline text-effect footer-txt"
                  >
                    Blogs
                  </Link>
                </ul>
              </div>
              <div>
                <h2 className="mt-4 lg:mt-0 mb-4 text-2xl font-semibold opacity-90">
                  Test Preparation
                </h2>
                <ul className="font-medium flex flex-col gap-2">
                  <Link
                    href="/textpreperation/itelts"
                    className="text-underline text-effect footer-txt"
                  >
                    IELTS
                  </Link>
                  <Link
                    href="/textpreperation/pte"
                    className="text-underline text-effect footer-txt"
                  >
                    PTE
                  </Link>
                  <Link
                    href="/textpreperation/japaneselan"
                    className="text-underline text-effect footer-txt"
                  >
                    JAPANESE LANGUAGE
                  </Link>
                </ul>
              </div>
              <div>
                <h2 className="mt-4 lg:mt-0 mb-4 text-2xl font-semibold opacity-90">
                  Contact Us
                </h2>
                <div className="flex flex-col gap-3 opacity-90 footer-txt">
                  <div className="flex gap-2 footer-txt">
                    <MdLocationPin className="text-2xl" />
                    Laxmi Plaza, Putalisadak, Padmodaya <br />
                    Mode,Kathmandu, Nepal
                  </div>
                  <div className="flex gap-3 items-center footer-txt">
                    <FaPhoneAlt /> +9779851101782, 01-4531819
                  </div>
                  <div className="flex gap-3 items-center footer-txt">
                    <RiMailOpenFill className="text-lg" /> admin@provisa.com.np
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto " />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center">
              Copyright © 2024, Professional Visa and Education Services
              Pvt.Ltd. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://web.facebook.com/provisa.com.np/?_rdc=1&_rdr"
                className="text-white"
              >
                <FaFacebookF className="text-xl" />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/PROVISANEPAL/"
                className="text-gray-50 ms-5"
              >
                <FaInstagram className="text-xl" />
                <span className="sr-only">Instagram account</span>
              </a>
              <a href="https://x.com/" className="ms-5">
                <FaTwitter className="text-xl" />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://youtube.com" className="ms-5">
                <FaYoutube className="text-xl" />
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
