"use client";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const GoTop = () => {
  const handleGoTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className=" text-xl bg-red-500 shadow-sm shadow-red-600 rounded-full text-white p-3 fixed  bottom-14 right-6 z-[999999]"
      onClick={handleGoTop}
    >
      <IoIosArrowUp />{" "}
    </button>
  );
};

export default GoTop;
