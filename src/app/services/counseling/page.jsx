import React from "react";
import ServiceCard from "../ServiceCard";
const page = () => {
  const desc = `Our advisors have conducted extensive research to assist you in determining whether the United States of America, Australia, Canada, or the United Kingdom are the best destinations for you. The universities in each of these countries are among the best in the world. In all of these countries, employment opportunities and living standards are excellent. We have the resources and tools to assist you in determining which country is the best fit for you in terms of costs, courses/degrees, work options, and other relevant information to help you choose the best path for you.`;
  return (
    <div>
      <ServiceCard
        topic={"Carrer Counseling"}
        heading={"Carrer Counseling"}
        desc={desc}
      />
    </div>
  );
};

export default page;
