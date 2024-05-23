import React from "react";
import Link from "next/link";
const ServiceLinks = () => {
  return (
    <div className=" bg-slate-100 p-4 rounded-md">
      <h1 className=" font-semibold text-2xl mb-3">About Us</h1>
      <div className=" flex flex-col gap-2">
        <Link href="/">Pre-departure Briefing</Link>
        <Link href="/">Visa Guidance</Link>
        <Link href="/">Finance & Scholarship</Link>
        <Link href="/">Carrer Counseling</Link>
        <Link href="/">Interview Preparation & Guidance</Link>
      </div>
    </div>
  );
};

export default ServiceLinks;
