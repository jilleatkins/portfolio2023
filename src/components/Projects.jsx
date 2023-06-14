import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const slides = [
    {
      url: "/NomNom1.png",
    },
    {
      url: "/PowerPongLeague1.png",
    },
    {
      url: "/GoldenBasket2.png",
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
    <div className="h-screen w-screen bg-[#E6DDDE]">
      <div
        id="projects"
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="h-screen w-screen bg-[#1A1818]"
      >
        <div
          data-AOS="fade-in"
          data-aos-duration="1500"
          data-aos-delay="1200"
          className="absolute top-16 right-16 border-r border-secondary h-[540px] subpixel-antialiased animate-side-line-grow animation-delay-1200 origin-top ease-in"
        ></div>
        <div
          data-AOS="fade-in"
          data-aos-duration="1500"
          data-aos-delay="1200"
          className="absolute top-16 right-16 border-t border-secondary w-[400px] subpixel-antialiased animate-top-line-grow animation-delay-1200 origin-right ease-in"
        ></div>
        <div className="max-w-[1040px] ml-[8%] md:pl-20 p-4 pt-64 pb-10">
          <h1
            className="font-primary text-secondary text-subheader mb-[-40px] pt-24 subpixel-antialiased"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            PROJECTS
          </h1>
          <div
            className="relative border-t border-secondary w-[770px] ml-32 pb-14 subpixel-antialiased animate-top-line-grow origin-left ease-in"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="1200"
          ></div>
        </div>
        <div className="max-w-[1920px] ml-[10%] md:pl-20 p-4 pt-54 pb-10">
          <div className="grid grid-cols-2 gap-20">
            <h2
              className="font-primary text-secondary text-5xl"
              data-AOS="fade-in"
              data-aos-duration="1500"
              data-aos-delay="2000"
            >
              A showcase of projects written in various languages for different
              applications.
            </h2>
            <div className="max-w-[1280px] h-[480px] w-full m-auto relative group">
              <div
                className="w-full h-full -mt-56 rounded-2xl bg-center bg-no-repeat bg-darkhover"
                data-AOS="fade-in"
                data-aos-duration="2000"
                data-aos-delay="2000"
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
                    {slides[currentIndex].url === "/PowerPongLeague1.png" && (
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
                    {slides[currentIndex].url === "/NomNom1.png" && (
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
                    {slides[currentIndex].url === "/GoldenBasket2.png" && (
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
              </div>
              <div className="hidden group-hover:block absolute -mt-56 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              <div className="hidden group-hover:block absolute -mt-56 top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
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
        </div>
      </div>
    </div>
  );
};

export default About;
