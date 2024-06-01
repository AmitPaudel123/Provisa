import ImageCard from "@/app/Components/ImageCard";
import Image from "next/image";
import React from "react";
import ContactCard from "../ContactCard";
const page = () => {
  return (
    <div className="text">
      <ImageCard imgsrc={"/aboutimg.webp"} topic={"Message From M.D"} />
      <div className=" flex flex-col lg:flex-row lg:justify-center lg:gap-12 gap-10 pt-[5rem] clear-start text-slate-700">
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[20%]">
          <ContactCard />
        </div>
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[50%]">
          <div className=" flex flex-col my-3">
            <p className=" text-[#2d1d54] font-bold text-xl">Who We Are </p>
            <p className=" h-[0.3rem] bg-[#cf2e2e] w-14"></p>
          </div>
          <div className=" my-2 flex flex-col lg:flex-row gap-5 ">
            <div>
              <Image
                src="/mdimg.jpg"
                alt="about_img"
                height={100}
                width={250}
                className=" shadow-sm shadow-slate-200 mr-3"
              />
              <p className=" text-xl">M.D Bashu Nepal</p>
            </div>
            <p className=" lg:w-[70%] text">
              <span className="  font-semibold">PROVISA</span> is dedicated to
              meeting the needs of students seeking to study abroad, with a team
              of enthusiastic and dedicated human resources and excellent
              services. It has all set a record by recruiting a large number of
              Nepalese students to study abroad in just ten years. We believe we
              have added a brick to the nation’s strength by helping to realize
              so many dreams. To achieve our goal of providing better
              opportunities for Nepalese students, we are utilizing all
              available resources both inside and outside the country. When it
              comes to planning an international study, keep your personal goals
              in mind as you consider important factors such as course
              availability, entry requirements, projected outcomes, costs,
              course duration, academic content, and employment options during
              the program. You will gain skills and qualifications that will
              benefit your future professional career as well as other
              intangible assets such as cultural experience, new contacts,
              sporting pursuits, travel and sightseeing, and much more as a
              result of studying abroad.
            </p>
            <br />
          </div>
          <p className="text">
            We organize educational and other informational events in
            collaboration with the government, universities, and embassies of
            various countries, as well as the Nepal Government, work as a
            representative of universities/colleges and as a guardian of
            students in a foreign country., assists students who require
            documentation.
            <br /> <br />
            We follow our own instincts to provide the best educational
            institute abroad for Nepalese students in every aspect of study
            abroad. Due to the fact that educational institutions are not easily
            accessible to all students. PROVISA’s professionals and experts are
            always ready to assist aspirants in getting into the university or
            college of their choice. Apart from counseling, we offer TOEFL,
            IELTS, PTE, GRE, and Japanese language test preparation classes
            taught by experienced, friendly, and dynamic tutors who you will
            miss in the land of your dreams. We offer a variety of language
            classes as well as modern facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
