import React from "react";
import Link from "next/link";
const ContactCard = () => {
  return (
    <div className=" bg-slate-100 p-4 rounded-md">
      <h1 className=" font-semibold text-xl text-[#2d1d54] mb-3">About Us</h1>
      <div className=" flex flex-col gap-2">
        <Link href="/about" className=" text-effect">
          About Us
        </Link>
        <Link href="/about/message" className=" text-effect">
          Message From M.D
        </Link>
        <Link href="/about/team" className=" text-effect">
          Our Team
        </Link>
        <Link href="/about/universities" className=" text-effect">
          Universities
        </Link>
        <Link href="/about/testimonial" className=" text-effect">
          Testimonials
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
