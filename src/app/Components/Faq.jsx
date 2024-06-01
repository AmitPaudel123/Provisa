"use client";
import { useRef, useState } from "react";
import React from "react";
import Form from "./Form";
import ImageCard from "./ImageCard";
import ContactCard from "../about/ContactCard";
const FaqsCard = ({ faqsList, idx }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer p-3 flex items-center justify-between text-lg text-gray-700 bg-slate-200 rounded-md  font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-700">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const faqsList = [
    {
      q: "How much will it cost to study abroad?",
      a: "Studying at an international university or school has a wide range of costs. It depends on the nature of your chosen program, the length of your stay, the distance traveled, and the type of lifestyle you desire once you arrive. You should be aware that some student visas require you to have a specific amount of money in your bank account when you arrive in your chosen country",
    },
    {
      q: "Can I work and study at the same time?",
      a: "Working while studying can be a beneficial addition to your academic and living experience. You may be able to work while on an international student visa if you are pursuing a degree-level or higher course. Make sure your visa allows it before starting any paid work. The ability for students to work part-time while pursuing their studies varies by country.",
    },
    {
      q: "What factors should I consider when selecting a study destination?",
      a: "Affordable school fees, the possibility of international students working there, a low cost of living, the availability of good student housing, how good the student flow is in that country for studies, and how safe the place is are all factors to consider before studying in that country.",
    },
    {
      q: "What is the Purpose of an offer Letter?",
      a: "If you have been accepted to study at a university, you will receive an offer letter or a letter of acceptance from the university. When you receive this, you are officially enrolled as a student at the school.",
    },
    {
      q: "Is it necessary for me to pay my School fees all at once?",
      a: "If you are unable to pay all of your school fees at once, depending on the school you wish to attend, you may pay a partial payment and complete the remainder as you study. Ask the school about a payment plan that works for you, or look into what scholarships you might be eligible for as an international student.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mx-auto px-4 md:px-8">
      <div className=" max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

const Faq = () => {
  return (
    <>
      <ImageCard imgsrc={"/faqimg.webp"} topic={`FAQ'S`} />

      <div className="flex flex-col lg:flex-row justify-center gap-12 pt-[3rem] py-6 px-6">
        <div className=" lg:w-[50%] lg:-mt-5">
          <FaqPage />
        </div>
        <div className=" flex flex-col gap-12 lg:gap-4  lg:w-[25%]">
          <ContactCard />
          <Form />
        </div>
      </div>
    </>
  );
};

export default Faq;
