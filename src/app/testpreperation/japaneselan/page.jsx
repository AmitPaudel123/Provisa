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
    <div className="scroll-smooth focus:scroll-auto lg:w-[85%] lg:mx-auto">
      <div>
        <ImageCard imgsrc="/tpreperation.webp" topic="Japanese Language" />
        <div className="flex flex-col lg:flex-row justify-center gap-6 my-4 lg:h-[50rem]">
          <div
            className=" w-[90%] lg:w-[60%] mx-auto lg:mx-0 lg:overflow-y-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            ref={leftRef}
          >
            <Image
              src="/study4.webp"
              alt="IELTS"
              width={500}
              height={100}
              className="  lg:w-[90%] h-[40rem]"
            />
            <div className=" text-slate-500">
              <h1 className=" text-3xl font-bold my-3">Course Description</h1>
              <p>
                <p className=" text-xl font-bold my-3">NAT</p>
                Nihongo Ability Test is the full form of NAT. It means that it
                is used to assess Japanese language proficiency in students who
                wish to continue their studies in Japan. The NAT-TEST for
                Japanese Language has five levels. Level 5 is the easiest, while
                level 1 is the most difficult. Each level corresponds to the
                Japanese Language Proficiency Test’s respective level (N5 to
                N1).
                <br />
                The following sections are included in Levels 1 and 2 of the
                exam: Language Knowledge (reading/vocabulary/grammar) and
                Listening. Language Knowledge (reading/vocabulary), a second
                Language Knowledge (grammar, reading comprehension), and
                Listening are the sections of the exam at levels 3, 4, and 5.
              </p>
              <h1 className=" text-xl font-bold my-3">JLPT</h1>
              <p>
                The JLPT (Japanese-Language Proficiency Test) is a standardized
                criterion-referenced test that assesses and certifies non-native
                speakers’ Japanese language proficiency. It covers language
                knowledge, reading ability, and listening ability. The JLPT
                emphasizes not only knowledge of Japanese vocabulary and
                grammar, but also the ability to apply that knowledge in
                real-life situations. As a result, the JLPT assesses
                comprehensive communicative competence in Japanese through
                Language Knowledge and “Reading” and “Listening.”
                <br />
                There are five levels of the JLPT (N1, N2, N3, N4, N5). Test
                items are designed for each level in order to measure Japanese
                language proficiency as thoroughly as possible. The N4 and N5
                scales assess basic Japanese comprehension, which is primarily
                learned in the classroom. N1 and N2 measure understanding of
                Japanese used in a broad range of actual everyday scenes. N3
                bridges the gap between N4/N5 and N1/N2.
              </p>
              <h1 className=" text-xl font-bold my-3">TOP-J</h1>
              <p>
                The TOP-J Practical Japanese Proficiency Test was created by
                experts and professors working in the field of Japanese language
                education in Japan and abroad. It is better to measure basic
                abilities such as vocabulary, grammar, sentence patterns, etc.
                from the exam, communication from foreigners living in Japan,
                such as living and working, etc. for learners who are studying
                Japanese as a foreign language. Through doubts, we also hope to
                assess the ability to comprehend Japanese society and Japanese
                company customs and culture. This test result is used for a
                variety of purposes, including entrance requirements for
                Japanese educational institutions.
                <br />
                Beginner, intermediate, and advanced levels are available on the
                TOPJ Practical Japanese Language Proficiency Test. The results
                of this exam, as well as the Japanese Language Proficiency Test,
                will be used to prove your language ability when you apply to
                study in Japan. For example, if you get an Elementary A, you’ll
                be considered capable of studying at a Japanese language
                institute in Japan, and if you get an Advanced A, you’ll be part
                of Japanese society or a Japanese company. You can take on work
                such as interpreting for Japanese companies if you admit to
                having a certain level of adaptability.
              </p>
            </div>
          </div>
          <div
            className="lg:w-[25%] w-[90%] mx-auto lg:mx-0 flex flex-col gap-4 sticky top-0"
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
