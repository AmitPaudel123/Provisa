import React from "react";
import HomeSlider from "./Components/HomeSlider";
import AssistCard from "./Components/AssistCard";
import Testimonial from "./Components/Testimonial";
import Universities from "./Universities";
import LatestBlog from "./Components/LatestBlog";

const page = () => {
  return (
    <div className=" bg-white">
      <HomeSlider />
      <AssistCard />
      <Testimonial />
      <LatestBlog />
      <Universities />
    </div>
  );
};

export default page;
