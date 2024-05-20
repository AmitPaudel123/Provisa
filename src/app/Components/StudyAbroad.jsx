"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "./cn";
import { DirectionHover } from "./DirectionHover";

const StudyAbroad = () => {
  const imageUrl = "/study1.webp";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionHover>
    </div>
  );
};
export default StudyAbroad;
