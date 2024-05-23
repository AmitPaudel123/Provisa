import React from "react";
import ServiceCard from "../ServiceCard";

const page = () => {
  const desc = `We focus on preparing students properly for the interview with proper documentation; financial as well as academic documentation. Perfect practice and guidance from our tutors will help students perform better in the interview giving the best they can. We inspire students to not be nervous and enjoy the process and trust themselves.

    `;
  return (
    <div>
      <ServiceCard
        topic={"Interview preperation & Guidance"}
        heading={"Interview preperation & Guidance"}
        desc={desc}
      />
    </div>
  );
};

export default page;
