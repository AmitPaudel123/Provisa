"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const GoTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    // Check if the window object is available
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleGoTop = () => {
    if (typeof window !== "undefined") {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {showBtn && (
        <button
          className="text-xl bg-red-500 shadow-sm shadow-red-600 rounded-full text-white p-3 fixed bottom-14 right-14 z-[999999]"
          onClick={handleGoTop}
        >
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};

export default GoTop;
