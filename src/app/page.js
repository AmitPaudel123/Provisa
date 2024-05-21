import React from "react";
import HomeSlider from "./Components/HomeSlider";
import AssistCard from "./Components/AssistCard";
import Testimonial from "./Components/Testimonial";
import Universities from "./Universities";
import LatestBlog from "./Components/LatestBlog";
import StudyAbroad from "./Components/StudyAbroad";
import FormSection from "./Components/FormSection";

const page = () => {
  return (
    <div className=" bg-white">
      <HomeSlider />
      <AssistCard />
      <StudyAbroad />
      <Testimonial />
      <FormSection />
      <LatestBlog />
      <Universities />
    </div>
  );
};

export default page;
