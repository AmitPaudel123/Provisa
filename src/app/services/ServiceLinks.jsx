import React from "react";
import Link from "next/link";
const ServiceLinks = () => {
  return (
    <div className=" bg-slate-100 p-4 rounded-md">
      <h1 className=" font-semibold text-2xl mb-3">About Us</h1>
      <div className=" flex flex-col gap-2">
        <Link href="/service/briefing">Pre-departure Briefing</Link>
        <Link href="/service/visa">Visa Guidance</Link>
        <Link href="/service/finance">Finance & Scholarship</Link>
        <Link href="/service/counseling">Carrer Counseling</Link>
        <Link href="/service/interview">Interview Preparation & Guidance</Link>
      </div>
    </div>
  );
};

export default ServiceLinks;
