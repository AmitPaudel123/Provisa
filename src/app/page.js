import React from "react";
import HomeSlider from "./Components/HomeSlider";
import AssistCard from "./Components/AssistCard";
import Testimonial from "./Components/Testimonial";
import Universities from "./Universities";
import LatestBlog from "./Components/LatestBlog";
import StudyAbroad from "./Components/StudyAbroad";
import FormSection from "./Components/FormSection";
import Description from "./Components/Description";
import Faq from "./Components/Faq";
import GoTop from "./Components/GoTop";
import FloatingBtn from "./Components/FloatingBtn";

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
      <Universities />
      {/* <Faq /> */}
    </div>
  );
};

export default page;
