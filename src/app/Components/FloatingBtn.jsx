"use client";
import React from "react";
import { Container, Button, Link } from "react-floating-action-button";
import { SiMessenger } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

const FloatingBtn = () => {
  return (
    <div className=" fixed z-[999999]">
      <Container className="right-0">
        <a
          href="#"
          tooltip="Messenger"
          className="fab-item btn btn-link btn-lg text-white bg-blue-500 text-xl"
        >
          <SiMessenger />{" "}
        </a>
        <a
          href="#"
          tooltip="Whatsapp"
          className="fab-item btn btn-link btn-lg text-white bg-green-500 text-2xl"
        >
          <IoLogoWhatsapp />{" "}
        </a>
        <Button
          tooltip="Message us"
          rotate={true}
          //   onClick={() => alert("FAB Rocks!")}
        >
          <HiOutlineChatBubbleOvalLeft className="text-white text-2xl font-bold" />
        </Button>
      </Container>
    </div>
  );
};

export default FloatingBtn;
