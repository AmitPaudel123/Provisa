import React from "react";
import ServiceCard from "../ServiceCard";

const page = () => {
  const desc = `We can help you prepare all of the financial documents you’ll need for your chosen destination. We will assist you with the banking process, property valuation, and all other documents required. Our service is simple and quick. You may be concerned about your financial capabilities if you plan to study abroad. We will assist you in resolving this issue. There are numerous scholarship programs available from various sources such as government agencies, colleges/universities, and other funding organizations that can help you reduce your costs and make your studies more affordable. Scholarships are awarded based on the course you’ve chosen, your academic background, and your test score. Our team will assist you in obtaining a substantial number of scholarships from various institutions. `;
  return (
    <div>
      <ServiceCard
        topic={"Finance & Scholarship"}
        heading={"Finance & Scholarship"}
        desc={desc}
        imgg={"/servicebanner.jpg"}
      />
    </div>
  );
};

export default page;
