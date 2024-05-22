"use client";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const GoTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const handleGoTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setShowBtn(true);
    } else setShowBtn(false);
  });
  return (
    <>
      {showBtn && (
        <button
          className=" text-xl bg-red-500 shadow-sm shadow-red-600 rounded-full text-white p-3 fixed  bottom-14 right-14 z-[999999]"
          onClick={handleGoTop}
        >
          <IoIosArrowUp />{" "}
        </button>
      )}
    </>
  );
};

export default GoTop;
