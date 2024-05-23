import React from "react";
import ServiceCard from "../ServiceCard";

const page = () => {
  const desc = `Many students experience bitterness as a result of visa failure as a result of inadequate documentation and preparations. Our advisors prepare students appropriately so that they do not have to deal with such an unpleasant situation. PROVISA Advisors not only assist in the preparation of necessary documents, but also provide advice on how to improve one’s chances of obtaining a visa. Our unexpectedly high success rate validates our efforts. When clients come to us, we thoroughly assess whether they are qualified to meet visa requirements and travel abroad, and we make recommendations based on our findings.

  `;
  return (
    <div>
      <ServiceCard
        topic={"Visa Guidance"}
        heading={"Visa Guidance"}
        desc={desc}
        imgg={"/servicebanner.jpg"}
      />
    </div>
  );
};

export default page;
