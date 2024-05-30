import React from "react";
import Link from "next/link";
const Testlink = () => {
  return (
    <div>
      <div className=" bg-slate-100 p-4 rounded-md text">
        <h1 className=" font-semibold text-xl text-[#2d1d54] mb-3">
          Test Preperation
        </h1>
        <div className=" flex flex-col gap-2">
          <Link href="/testpreperation/ielts" className=" text-effect">
            IELTS
          </Link>
          <Link href="/testpreperation/japaneselan" className=" text-effect">
            Japan
          </Link>
          <Link href="/testpreperation/pte" className=" text-effect">
            PTE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testlink;
