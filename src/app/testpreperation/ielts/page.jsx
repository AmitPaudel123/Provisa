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
    <div className="scroll-smooth focus:scroll-auto lg:w-[85%] lg:mx-auto text ">
      <div>
        <ImageCard imgsrc="/tpreperation.webp" topic="IELTS" />
        <div className="flex flex-col lg:flex-row justify-center gap-12 my-[7rem] lg:h-[50rem] ">
          <div
            className=" w-[90%] lg:w-[50%] mx-auto lg:mx-0 lg:overflow-y-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            ref={leftRef}
          >
            <Image src="/ielts.webp" alt="IELTS" width={700} height={100} />
            <div>
              <h1 className=" text-2xl font-semibold text-[#2d1d54] mt-4 mb-1">
                Course Description
              </h1>
              <p>
                The International English Language Testing System (IELTS) is a
                globally recognized and standardized English language assessment
                test for international education and migration. IELTS is the
                world’s most popular English language test, having been
                established in 1989. The University of Cambridge ESOL
                Examinations, the British Council, and IDP Education Australia
                are all involved in its administration. Almost all Australian,
                British, Canadian, Irish, New Zealand, and over 1800 US academic
                institutions accept IELTS. It is the only acceptable English
                test for Australian immigration, as well as the United Kingdom
                and Canada.
              </p>
              <h1 className=" text-xl font-semibold text-[#2d1d54] mt-8 mb-1">
                TYPES OF IELTS TEST
              </h1>
              <ol className="  list-decimal list-inside">
                <li>
                  Academic IELTS
                  <p>
                    The IELTS Academic Test is best for international students
                    who want to study for their undergraduate or postgraduate
                    degrees in an English-speaking environment, as well as those
                    who want to move for professional registration.
                  </p>
                </li>
                <li>
                  General IELTS
                  <p>
                    For immigration purposes, the General Training Version is
                    designed for those who plan to engage in non-academic
                    training or employment.
                  </p>
                </li>
              </ol>
              <h1 className=" text-xl font-semibold text-[#2d1d54] mt-8 mb-1">
                STRUCTURE OF IELTS TEST
              </h1>
              <p>
                Listening, Reading, Writing, and Speaking are the four modules
                of the IELTS test. For both the individual modules and the
                overall tests, results are reported in “bands.” The Listening
                and Speaking Modules are the same for all candidates, but the
                Reading and Writing Modules differ depending on whether they are
                taking the Academic or General Training Versions of the Test.
                <br />
                The IELTS exam is available both online (Computer-delivered
                IELTS) and offline (Paper-based IELTS) (IELTS paper-based test).
                The exam format is the same for both modes. Both academic and
                general sections have the same listening and speaking sections,
                but the writing and reading sections differ slightly. <br />
                An IELTS result is valid for 2 years.
              </p>
              <h1 className=" text-xl font-semibold text-[#2d1d54] mt-8 mb-1">
                IELTS BAND SCORES
              </h1>
              <p>
                The overall band score is the average of the four sections
                scores, rounded to the nearest whole or half band. The sections
                scores are weighted equally. Your English-language abilities are
                assessed using band scores in the IELTS test. These band scores
                range from 0 to 9, with each band score indicating a different
                level of English language proficiency.
                <br />A band score of 6 indicates a competent user who, despite
                some inaccuracies, inappropriacies, and misunderstandings, has a
                generally effective command of the language. In familiar
                situations, they can also use and understand fairly complex
                language.
                <br />
                You will receive a band score for each section of the test as
                well as an overall band score that is the average of your band
                scores for Speaking, Reading, Writing, and Listening in your
                IELTS results. Your band scores are rounded to the nearest whole
                or half band. <br />
                If you get a 6.5 in Reading, a 5 in Writing, a 7 in Speaking,
                and a 6.5 in Listening, for example, the average of these four
                scores is 6.25. Your overall band score would be rounded up to
                6.5 based on this score.
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
