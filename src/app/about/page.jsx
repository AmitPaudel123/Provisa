import React from "react";
import ImageCard from "../Components/ImageCard";
import ContactCard from "./ContactCard";
import Image from "next/image";
const page = () => {
  return (
    <div className=" text">
      <ImageCard imgsrc={"/aboutimg.webp"} topic={`About Us`} />
      <div className=" flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-12 my-[7rem]">
        <div className=" w-[90%] mx-auto lg:mx-0 md:w-[20%]">
          <ContactCard />
        </div>
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[45%]">
          <div className=" flex flex-col mb-3">
            <p className=" text-[#2d1d54] font-bold text-2xl ">Who We Are </p>
            <p className=" h-[0.3rem] bg-[#cf2e2e] w-14"></p>
          </div>
          <p>
            Professional Visa and Education Services Pvt. Ltd. (Pro-Visa) is the
            Best #1 Education Consultancy in Nepal, authorized from ministry of
            education (MOE) and free education providing proper guidance to
            students planning for international study. We are running gracefully
            since 2009; facilitating students by providing students actual
            information with the full support in documentation process and
            language skills. We counsel students by analyzing their academic
            profile and advising them the best suitable option best matched to
            their own career aspiration.
            <br />
            Currently, PRO-VISA, #1 Education Consultancy in Nepal is recruiting
            students from Nepal to Australia, USA, UK, China, Japan, Germany,
            France, Hungary, Finland, India, China, and Bangladesh for higher
            study and providing different language classes for student which
            benefits students for easy communication and maintain a bond with
            different countries. We are also bringing foreign students to Nepal
            for medical study and are also planning for student exchange
            programs in the near future. We are planning to provide Nepali
            language classes to foreign students to make it easy for them to
            communicate in Nepal by helping them understand Nepali culture and
            civilization
          </p>
          <Image
            src="/aboutbanner.webp"
            alt="about_img"
            height={100}
            width={500}
            className=" mt-3"
          />
          <div>
            <br />
            <h1 className=" font-bold text-2xl text-[#2d1d54] my-2">
              Our Mission
            </h1>
            <p>
              Our mission is to make students choose the best education
              destination for them to help them become professional experts in
              the future. Many students from Nepal are in search of an ideal
              education provider abroad, for their higher study. Lack of proper
              guidance is limiting them to meet their expectations.
              <br />
              PRO-VISA is here to guide them honest, up-to date and right
              information to help students walk on right track for their bright
              future of success. Since its initiation PRO-VISA has been
              committing to develop quality human resource with high academic
              and moral standard by recommending them to top-class Colleges and
              Universities abroad, so that they can become the leaders of
              tomorrow with a wider vision for the goodwill of the country.
            </p>
          </div>
          <div>
            <br />
            <h1 className=" font-bold text-2xl text-[#2d1d54] my-2">
              Our Vision
            </h1>
            <p>
              Our vision is to connect Nepal to the world by searching best
              universities and colleges for Nepalese students. Further as your
              education partner, we take care of everything from advising you on
              course selection and applications, to helping you secure the
              correct visa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
