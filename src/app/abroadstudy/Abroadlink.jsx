import React from "react";
import Link from "next/link";
const Abroadlink = () => {
  return (
    <div>
      <div className=" bg-slate-100 p-4 rounded-md">
        <h1 className=" font-semibold text-2xl mb-3">Abroad Study</h1>
        <div className=" flex flex-col gap-2">
          <Link href="/abroadstudy/australia" className=" text-effect">
            Study in Australia
          </Link>
          <Link href="/abroadstudy/australia" className=" text-effect">
            Study in Europe
          </Link>
          <Link href="/abroadstudy/japan" className=" text-effect">
            Study in Japan
          </Link>
          <Link href="/abroadstudy/canada" className=" text-effect">
            Study in Canada
          </Link>
          <Link href="/abroadstudy/usa" className=" text-effect">
            Study in USA
          </Link>
          <Link href="/abroadstudy/uk" className=" text-effect">
            Study in UK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Abroadlink;
