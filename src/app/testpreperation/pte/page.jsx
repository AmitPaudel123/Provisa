"use client";
// page.js

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ImageCard from "@/app/Components/ImageCard";
import Testlink from "../Testlink";
import Form from "@/app/Components/Form";

const syncScroll = (ref1, ref2) => {
  const sync = (e) => {
    const otherRef = e.target === ref1.current ? ref2.current : ref1.current;
    if (otherRef) {
      otherRef.scrollTop = e.target.scrollTop;
    }
  };

  if (ref1.current && ref2.current) {
    ref1.current.addEventListener("scroll", sync);
    ref2.current.addEventListener("scroll", sync);
  }

  return () => {
    if (ref1.current && ref2.current) {
      ref1.current.removeEventListener("scroll", sync);
      ref2.current.removeEventListener("scroll", sync);
    }
  };
};

const Page = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const cleanup = syncScroll(leftRef, rightRef);
    return () => cleanup();
  }, []);

  return (
    <div className="scroll-smooth focus:scroll-auto lg:mx-auto  text-ellipsis bg-color">
      <div>
        <ImageCard imgsrc="/tpreperation.webp" topic="PTE" />
        <div className="flex flex-col lg:flex-row justify-center  gap-[6rem] lg:px-[9rem] my-4">
          <div className=" w-[90%] lg:w-[60%] mx-auto lg:mx-0 " ref={leftRef}>
            <Image
              src="/pte.webp"
              alt="IELTS"
              width={500}
              height={100}
              className="  lg:w-[90%] h-[30rem]"
            />
            <div className=" text-black">
              <h1 className=" text-xl font-semibold text-[#2d1d54] mt-8 mb-1">
                Course Description
              </h1>
              <p>
                Pearson English Tests (PTE) Academic English is a language test
                used for international study and immigration. It’s a
                computer-based exam that focuses on academic English in
                real-life situations. Students will hear a variety of accents
                and academic language used in higher education institutions in
                English-speaking countries throughout the test.
                <br />
                PTE Academic is an online English language test that is fully
                computerized and designed for international education and
                immigration. This test is powered by artificial intelligence
                (AI), and unlike traditional grading systems, the PTE grading is
                completely objective and free of human bias.
                <br />
                Australia, the United States, the United Kingdom, Ireland,
                Singapore, Canada, New Zealand, France, Germany, Spain, and
                Italy all accept PTE. <br />
                <br />
                There are three parts to the PTE Academic test:
                <p>
                  Part 1: Speaking and written expression <br /> Part 2: Reading{" "}
                  <br />
                  Part 3: Listening
                </p>
                The PTE score is calculated by a computer. There are two types
                of scoring:
                <ul className=" list-decimal list-inside">
                  <li>Partial Credit</li>
                  <li>Correct or Incorrect</li>
                </ul>
                <p className=" my-3">
                  <span className=" font-semibold ">Partial Credit:</span>
                  For all correct answers, partial credit is given. All
                  incorrect answers will result in a deduction of points from
                  the points earned for correct answers. For incorrect answers,
                  no points are given.
                </p>
                <p>
                  <span className=" font-semibold ">Correct or Incorrect:</span>
                  For each correct response, the candidate will receive one
                  point. An incorrect answer will not earn you any points.
                </p>
                Pearson VUE (Virtual User Environment) is the company that
                administers the PTE exam. <br /> PTE’s official website <br />
                <a href="pearsonpte.com">https://pearsonpte.com/</a>
              </p>
              <p>
                <h1 className=" text-lg font-semibold text-[#2d1d54] mt-8 mb-1">
                  PTE Academic Syllabus
                </h1>
                <li>PTE Speaking</li>
                <li>PTE Writing</li>
                <li>PTE Reading</li>
                <li>PTE Listening</li>
              </p>
              <p>
                <h1 className=" text-lg font-semibold text-[#2d1d54] mt-8 mb-1">
                  PTE Speaking and PTE Writing (54-67 min):
                </h1>
                <li>Personal Introduction (30 sec)</li>
                <li>Read aloud (6-7)</li>
                <li>Repeat sentence (10-12)</li>
                <li>Describe Image (3-4)</li>
                <li>Retell Lecture (1-2)</li>
                <li>Answer short question (5-6)</li>
                <li>Summarize written text (1-2)</li>
                <li>Essay (1-2) (28-36 questions in total)</li>
              </p>{" "}
              <p>
                {" "}
                <h1 className=" text-lg font-semibold text-[#2d1d54] mt-8 mb-1">
                  PTE Reading (29-30min minutes):
                </h1>
                <li>Fill in the blanks R&W (5-6)</li>
                <li>Multiple Choice-multiple answers (1-2)</li>
                <li>Reorder Paragraphs (2-3)</li>
                <li>Fill in the blanks (R) (4-5)</li>
                <li>Multiple Choice Single Answer (1-2) (13 -18 in total)</li>
              </p>
              <p>
                {" "}
                <h1 className=" text-lg font-semibold text-[#2d1d54] mt-8 mb-1">
                  PTE Listening (30-43min):
                </h1>
                <p>The listening section consists of the following:</p>
                <ol className=" list-decimal list-inside">
                  <li>Summarize spoken test (1-2)</li>
                  <li> Multiple choice multiple answer (1-2)</li>
                  <li>Fill in the blanks (2-3)</li>
                  <li>Highlight the correct summary (1-2)</li>
                  <li>Multiple choice –single answer (1-2)</li>
                  <li>Select missing word (1-2)</li>
                  <li>Highlight incorrect words (2-3)</li>
                  <li>Write from dictation (3-4) (12-20 questions in total)</li>
                </ol>
              </p>
              <p>
                <h1 className=" text-lg font-semibold text-[#2d1d54] mt-8 mb-1">
                  HOW To Check PTE Result?
                </h1>
                <p>
                  Within 5 business days of the test date, the PTE results will
                  be available. PTE exam results are available online for
                  candidates. Candidates will be notified via email once the
                  results are available. They can log into their PTE Academic
                  student account once they receive this email. The PTE exam
                  certificate is good for two years from the date of the exam.
                  Students must retake the exam if they want to prove their
                  eligibility after two years.
                </p>
              </p>
            </div>
          </div>
          <div
            className="lg:w-[25%] w-[90%] mx-auto lg:mx-0 flex flex-col gap-8 lg:gap-4 sticky top-0"
            ref={rightRef}
          >
            <div>
              <Testlink />
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
