"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
// import "./testimonial.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "/assistimg1.webp",
      name: "Martin escobar",
      title: "The University of Australia",
      quote:
        "PROVISA provided me great assistance on my student visa approval. I really appreciate your efforts, consultation and customer services. Thank you PROVISA for guiding me throug the right path in my life. You helped me with my life changing decision. I will be forever grateful for your help and great assistance.",
    },
    {
      avatar: "/assistimg1.webp",
      name: "Simon andrew",
      title: "Software engineer",
      quote:
        "I feel very lucky to be part of PROVISA. I got perfect counselling during my test preparation, documentation preparation, visa application and SOP writing writing which helped me in visa approval. I would recommend PROVISA  as a perfect education partner to everyone out there tryinh for international study.",
    },
    {
      avatar: "/assistimg1.webp",
      name: "Simon andrew",
      title: "Software engineer",
      quote:
        "I feel very lucky to be part of PROVISA. I got perfect counselling during my test preparation, documentation preparation, visa application and SOP writing writing which helped me in visa approval. I would recommend PROVISA  as a perfect education partner to everyone out there tryinh for international study.",
    },
    {
      avatar: "/assistimg1.webp",
      name: "Simon andrew",
      title: "Software engineer",
      quote:
        "I feel very lucky to be part of PROVISA. I got perfect counselling during my test preparation, documentation preparation, visa application and SOP writing writing which helped me in visa approval. I would recommend PROVISA  as a perfect education partner to everyone out there tryinh for international study.",
    },
  ];

  //customized slider arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className=" absolute top-[-15%] flex justify-center items-center right-8 bg-white h-10 hover:text-white hover:bg-[#cf2e2e] w-16 text-xl rounded-lg "
        onClick={onClick}
      >
        <IoMdArrowRoundForward />{" "}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className=" absolute top-[-15%] flex justify-center items-center left-8 bg-white h-10 w-16 text-xl rounded-md hover:text-white hover:bg-[#cf2e2e] z-10"
        onClick={onClick}
      >
        <IoMdArrowRoundBack />
      </div>
    );
  }
  //slider setting for making it responsive
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="relative py-14">
        <div className="relative z-10 mx-auto px-4 md:px-8">
          <div className="w-full sm:text-center text-3xl font-bold md:mx-auto">
            {"Student's Testimonials"}
          </div>
          <div className="mt-12">
            <ul className="">
              <Slider {...settings}>
                {testimonials.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-white rounded-xl border shadow-md"
                  >
                    <div className="p-4">
                      <svg
                        className="w-9 h-9 text-[#cf2e2e;]"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <figure>
                      <blockquote>
                        <p className="text-gray-800 text-lg font-semibold px-4 py-1">
                          {item.quote}
                        </p>
                      </blockquote>
                      <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                        <Image
                          src={item.avatar}
                          height={50}
                          width={50}
                          alt="avatar"
                          className="w-16 h-16 rounded-full border-2 border-indigo-500"
                        />
                        <div>
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-indigo-600 text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
        <div
          className="absolute top-0 w-full h-[350px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Testimonial;
