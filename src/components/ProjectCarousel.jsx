import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ProjectCarousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const slides = [
    {
      url: "public/assets/NomNom1.png",
    },
    {
      url: "public/assets/PowerPongLeague1.png",
    },
    {
      url: "public/assets/GoldenBasket2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-screen w-screen bg-[#1A1818]">
      <div className="flex flex-col lg:ml-10 xl:ml-0 justify-center items-center h-screen">
        <div
          className="w-[1040px] h-[580px] rounded-2xl bg-center bg-no-repeat bg-darkhover"
          data-AOS="fade-in"
          data-aos-duration="2000"
          data-aos-delay="1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              filter: isHovered ? "blur(3px)" : "none",
            }}
            className="w-full h-full z-[-20] bg-center bg-no-repeat"
          ></div>
          {isHovered && (
            <div className="flex absolute inset-0 items-center">
              {slides[currentIndex].url ===
                "public/assets/PowerPongLeague1.png" && (
                <>
                  <div className="flex flex-col absolute top-10 left-10">
                    <h2 className="font-tertiary font-bold text-[#ffffffab] text-4xl">
                      PowerPong League
                    </h2>
                    <h3 className="font-tertiary text-[#ffffffab] text-2xl">
                      JAVASCRIPT | REACT.JS | MONGODB | HTML & CSS
                    </h3>
                  </div>
                  <div className="flex justify-center items-center relative mx-auto">
                    <a href="/powerpong-league">
                      <h3 className="text-[#ffffffab] font-tertiary tracking-wider text-md font-bold border border-secondary p-10 cursor-pointer bg-background2 transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-lighthover duration-300">
                        DETAILS
                      </h3>
                    </a>
                  </div>
                </>
              )}
              {slides[currentIndex].url === "public/assets/NomNom1.png" && (
                <>
                  <div className="flex flex-col absolute top-10 left-10">
                    <h2 className="font-tertiary font-bold text-[#ffffffab] text-4xl">
                      NomNom
                    </h2>
                    <h3 className="font-tertiary text-[#ffffffab] text-2xl">
                      REACT.JS | SPRING BOOT | TAILWINDCSS
                    </h3>
                  </div>
                  <div className="flex justify-center items-center relative mx-auto">
                    <a href="/nomnom">
                      <h3 className="text-[#ffffffab] font-tertiary tracking-wider text-md font-bold border border-secondary p-10 cursor-pointer bg-background2 transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-lighthover duration-300">
                        DETAILS
                      </h3>
                    </a>
                  </div>
                </>
              )}
              {slides[currentIndex].url ===
                "public/assets/GoldenBasket2.png" && (
                <>
                  <div className="flex flex-col absolute top-10 left-10">
                    <h2 className="font-tertiary font-bold text-[#ffffffab] text-4xl">
                      Golden Basket
                    </h2>
                    <h3 className="font-tertiary text-[#ffffffab] text-2xl">
                      PYTHON | SQL | HTML & CSS
                    </h3>
                  </div>
                  <div className="flex justify-center items-center relative mx-auto">
                    <a href="/golden-basket">
                      <h3 className="text-[#ffffffab] font-tertiary tracking-wider text-md font-bold border border-secondary p-10 cursor-pointer bg-background2 transition ease-in-out delay-50 hover:-translate-y-1 hover:bg-lighthover duration-300">
                        DETAILS
                      </h3>
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
          {isHovered && (
            <>
              <div
                className="absolute -mt-66 top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                onClick={prevSlide}
              >
                <BsChevronCompactLeft size={30} />
              </div>
              <div
                className="absolute -mt-66 top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                onClick={nextSlide}
              >
                <BsChevronCompactRight size={30} />
              </div>
            </>
          )}
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled
                style={{ color: "gray" }}
                data-AOS="fade-in"
                data-aos-duration="1500"
                data-aos-delay="2000"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
