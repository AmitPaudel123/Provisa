import React from "react";
import Link from "next/link";
const Abroadlink = () => {
  return (
    <div>
      <div className=" bg-slate-100 p-4 rounded-md">
        <h1 className=" font-semibold text-2xl mb-3">About Us</h1>
        <div className=" flex flex-col gap-2">
          <Link href="/">Study in Australia</Link>
          <Link href="/">Study in Europe</Link>
          <Link href="/">Study in Japan</Link>
          <Link href="/">Study in Canada</Link>
          <Link href="/">Study in USA</Link>
          <Link href="/">Study in UK</Link>
        </div>
      </div>
    </div>
  );
};

export default Abroadlink;
