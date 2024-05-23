import React from "react";
import ServiceCard from "../ServiceCard";

const page = () => {
  const desc = `We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are given an essential list of travel supplies. We also assist you in making contact with former students who are currently enrolled in your desired institution/country.

    `;
  return (
    <div>
      <ServiceCard
        topic={"Pre-departure Briefing"}
        heading={"Pre-departure Briefing"}
        desc={desc}
        imgg={"/servicebanner.jpg"}
      />
    </div>
  );
};

export default page;
