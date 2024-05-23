import React from "react";

const TextSlider = () => {
  const backgroundImageUrl = `/contactbanner.webp`;

  return (
    <div>
      <div className="bg-gray-100">
        {/* Full-screen section with fixed background image */}
        <div
          className="relative h-[70vh] bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-primary-450 opacity-60"></div>
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* Content */}
          <div className="relative md:px-0 px-4 z-10 flex flex-col items-center justify-center h-full">
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="uppercase text-accent-350 z-40 text-xl md:text-2xl font-bold"
            >
              How Can Chiropractic Care Help You? We give you Service to
              patients.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-gray-100 md:text-[19px] md:max-w-7xl text-[17px] md:mt-10 mt-5"
            >
              Chiropractic care focuses on diagnosing and treating
              musculoskeletal issues, particularly those related to the spine.
              Our services aim to alleviate pain, improve mobility, and enhance
              overall well-being through non-invasive techniques. We help
              patients manage conditions such as back pain, neck pain,
              headaches, and joint problems. Our personalized care plans are
              designed to promote natural healing and support a healthier
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
