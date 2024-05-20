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
      <footer class="text-slate-300 bg-slate-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="" class="flex  flex-col">
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
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-4 text-2xl font-semibold">Quick Links</h2>
                <ul class=" font-medium flex flex-col gap-2">
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
                <h2 class="mb-4 text-2xl font-semibold">Test Preparation</h2>
                <ul class=" font-medium flex flex-col gap-2">
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
                <h2 class="mb-4 text-2xl font-semibold">Contact Us</h2>
                <div className=" flex flex-col gap-2">
                  <div className=" flex gap-1">
                    {" "}
                    <MdLocationPin className=" text-2xl" />
                    Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal
                  </div>
                  <div className=" flex gap-1 items-center">
                    {" "}
                    <FaPhoneAlt /> +9779851101782, 01-4531819
                  </div>
                  <div className=" flex gap-1 items-center">
                    {" "}
                    <RiMailOpenFill /> admin@provisa.com.np
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 sm:mx-auto lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm sm:text-center">
              Copyright © 2024, Professional Visa and Education Services
              Pvt.Ltd. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-white">
                <FaFacebookF />
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-50 ms-5">
                <FaInstagram />
                <span class="sr-only">Instagram account</span>
              </a>
              <a href="#" class=" ms-5">
                <FaTwitter />
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="ms-5">
                <FaYoutube />
                <span class="sr-only">Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
