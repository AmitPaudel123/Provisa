import React from "react";
import Link from "next/link";
const ServiceLinks = () => {
  return (
    <div className=" bg-slate-100 p-4 rounded-md">
      <h1 className=" font-semibold text-2xl mb-3">Our Services</h1>
      <div className=" flex flex-col gap-2">
        <Link href="/services/briefing" className=" text-effect">
          Pre-departure Briefing
        </Link>
        <Link href="/services/visa" className=" text-effect">
          Visa Guidance
        </Link>
        <Link href="/services/finance" className=" text-effect">
          Finance & Scholarship
        </Link>
        <Link href="/services/counseling" className=" text-effect">
          Carrer Counseling
        </Link>
        <Link href="/services/interview" className=" text-effect">
          Interview Preparation & Guidance
        </Link>
      </div>
    </div>
  );
};

export default ServiceLinks;
