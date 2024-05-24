"use client";
import React, { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaPlus } from "react-icons/fa";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-[7rem] right-8 flex flex-col items-center z-[99999]">
      <div
        className={`flex flex-col items-center transition-all duration-300 ${
          isOpen ? "mb-7" : "mb-0"
        }`}
      >
        {isOpen && (
          <>
            <a
              href="https://m.me/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 transform transition-transform duration-300"
            >
              <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg transform hover:scale-110 z-[99999]">
                <FaFacebookMessenger size={20} />
              </div>
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 transform transition-transform duration-300"
            >
              <div className="bg-green-500 text-white p-3 rounded-full shadow-lg transform hover:scale-110 z-[99999]">
                <FaWhatsapp size={20} />
              </div>
            </a>
          </>
        )}
      </div>
      <div
        className={` cursor-pointer bg-purple-500 text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        } z-[99999]`}
        onClick={handleToggle}
      >
        <FaPlus size={20} />
      </div>
    </div>
  );
};

export default FloatingActionButton;