import React from "react";
import HomeSlider from "./Components/HomeSlider";
import AssistCard from "./Components/AssistCard";
import Testimonial from "./Components/Testimonial";
import Universities from "./Components/Universities";
import LatestBlog from "./Components/LatestBlog";
import StudyAbroad from "./Components/StudyAbroad";
import FormSection from "./Components/FormSection";
import Description from "./Components/Description";

const page = () => {
  return (
    <div className=" bg-white overflow-x-hidden">
      <HomeSlider />
      <Description />
      <AssistCard />
      <StudyAbroad />
      <Testimonial />
      <FormSection />
      <LatestBlog />
      <div className=" my-[2rem]">
        <Universities />
      </div>{" "}
    </div>
  );
};

export default page;
