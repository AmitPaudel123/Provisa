import React from "react";
import Link from "next/link";
const ContactCard = () => {
  return (
    <div className=" bg-slate-100 p-4 rounded-md">
      <h1 className=" font-semibold text-2xl mb-3">About Us</h1>
      <div className=" flex flex-col gap-2">
        <Link href="/">About Us</Link>
        <Link href="/">Message From M.D</Link>
        <Link href="/">Our Team</Link>
        <Link href="/">Universities</Link>
        <Link href="/">Testimonials</Link>
      </div>
    </div>
  );
};

export default ContactCard;
