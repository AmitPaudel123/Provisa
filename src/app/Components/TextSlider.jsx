import { useEffect, useState } from "react";

const TextSlider = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/formbanner.webp)" }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <h1 className="text-4xl font-bold text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque
          cumque facere optio ipsa totam accusantium iure repudiandae recusandae
          dicta ipsam consequuntur nemo eius illo pariatur culpa, assumenda quia
          odit?
        </h1>
      </div>
    </div>
  );
};

export default TextSlider;
