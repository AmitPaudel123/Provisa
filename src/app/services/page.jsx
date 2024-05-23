import React from "react";
import AssistCard from "../Components/AssistCard";
import ImageCard from "../Components/ImageCard";

const page = () => {
  return (
    <div>
      <ImageCard imgsrc={"/serviceimg.webp"} topic={`Our Services`} />
      <AssistCard />
    </div>
  );
};

export default page;
