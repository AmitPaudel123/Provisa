import React from "react";
import AbroadCard from "../AbroadCard";

const page = () => {
  const eduSystem = [
    "Students in the United Kingdom have the opportunity to mix courses and subjects from several fields of study, allowing you to design your degree to your own requirements and interests.    ",
  ];
  const descLists = [
    "Engineering, science, art and design, business and management, law and finance are just a few of the fields in which the United Kingdom is a world leader. The United Kingdom's status and tradition as a global center for scientific study attracts some of the world's most brilliant minds. Despite having only 1% of the world's population, the United Kingdom is responsible for 8% of all scientific publications.  ",
  ];
  return (
    <div>
      <AbroadCard
        topic={"Study in UK"}
        imgsrc={"/abroadstudy.webp"}
        bannerimg={"/studyuk.webp"}
        eduSystem={eduSystem}
        descLists={descLists}
      />
    </div>
  );
};

export default page;
