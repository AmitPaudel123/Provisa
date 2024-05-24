import React from "react";
import Link from "next/link";
const Testlink = () => {
  return (
    <div>
      <div className=" bg-slate-100 p-4 rounded-md">
        <h1 className=" font-semibold text-2xl mb-3">Test Preperation</h1>
        <div className=" flex flex-col gap-2">
          <Link href="/testpreperation/ielts">IELTS</Link>
          <Link href="/testpreperation/japaneselan">Japan</Link>
          <Link href="/testpreperation/pte">PTE</Link>
        </div>
      </div>
    </div>
  );
};

export default Testlink;
