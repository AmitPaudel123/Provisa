import React from "react";
import ServiceCard from "../ServiceCard";

const page = () => {
  const desc = `We can manage airport pickup service for the students with the help of our resources out in different countries. We help students with their registration process at the University/Colleges. Travel arrangement will be assisted to the students by us. We also prove feedback to parents regarding students performance. Special travel arrangements are also done by us for parents to visit college and university.
    `;
  return (
    <div>
      <ServiceCard
        topic={"Post Admission Services"}
        heading={"Post Admission Services"}
        desc={desc}
      />
    </div>
  );
};

export default page;
