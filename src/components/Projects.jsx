import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#E6DDDE]">
      <div
        id="projects"
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="min-h-screen w-screen bg-[#1A1818]"
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
        <div className="max-w-[1040px] ml-[8%] md:pl-20 p-4 lg:pt-48 xl:pt- pb-10">
          <h1
            className="font-primary text-secondary  lg:text-[8rem] xl:text-subheader mb-[-40px] xl:pt-24 subpixel-antialiased"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            PROJECTS
          </h1>
          <div
            className="relative border-t border-secondary lg:w-[600px] xl:w-[770px] ml-32 xl:pb-14 subpixel-antialiased animate-top-line-grow origin-left ease-in"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="1200"
          ></div>
        </div>
        <div className="max-w-[1920px] ml-[10%] md:pl-20 p-4 xl:pt-54 lg:pb-10 xl:pb-50">
          <div className="grid grid-cols-2">
            <h2
              className="font-primary text-secondary lg:text-4xl xl:text-5xl xl:pb-50"
              data-AOS="fade-in"
              data-aos-duration="1500"
              data-aos-delay="2000"
            >
              A showcase of projects written in various languages for different
              applications.
            </h2>
          </div>
          <a
            href="/project-carousel"
            className="flex justify-center lg:mt-10 lg:mr-40 xl:mt-60 xl:mb-60 p-10"
            data-AOS="fade-in"
            data-aos-duration="2000"
          >
            <FaChevronDown
              data-AOS="fade-in"
              data-aos-duration="1500"
              data-aos-delay="3000"
              className="cursor-pointer fill-secondary p-5 hover:bg-darkhover hover:rounded-full"
              size={70}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
