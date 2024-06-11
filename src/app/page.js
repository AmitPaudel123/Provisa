import React from "react";
import HomeSlider from "./Components/HomeSlider";
import AssistCard from "./Components/AssistCard";
import Universities from "./Components/Universities";
import LatestBlog from "./Components/LatestBlog";
import StudyAbroad from "./Components/StudyAbroad";
import FormSection from "./Components/FormSection";
import Description from "./Components/Description";
import Testimonials from "./Components/Testi";

const page = () => {
  return (
    <div className=" bg-color mb-[7rem]">
      <HomeSlider />
      <Description />
      <AssistCard />
      <StudyAbroad />
      <Testimonials />
      <FormSection />
      <LatestBlog />
      <div className=" pt-[3rem]">
        <Universities />
      </div>{" "}
    </div>
  );
};

export default page;
