import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#1A1818]">
      <div
        id="main"
        data-aos="slide-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="200"
        className="h-screen w-screen bg-[#E6DDDE]"
      >
        <div
          className="max-w-[700px] ml-[14%] h-full w-full pt-[27%] flex flex-col justify-left lg:items-start items-start"
          data-AOS="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1100"
        >
          <h1 className="sm:text-8xl text-7xl font-primary text-primary leading-3 my-[-0.5rem]">
            JILL
          </h1>
          <h1 className="sm:text-8xl text-7xl font-primary text-primary leading-3 my-[-0.5rem]">
            ATKINS
          </h1>
          <h2 className="flex sm:text-xl text-lg font-secondary text-primary font-light pt-7">
            Software developer with a passion for front-end design and clean
            lines.
          </h2>
        </div>
        <div
          className="flex flex-row space-x-14 fixed top-20 right-20"
          data-AOS="fade-in"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
          <a
            className="hover:bg-secondary hover:rounded-full p-4"
            href="https://linkedin.com/in/jill-atkins"
          >
            <FaLinkedinIn className="cursor-pointer fill-[#443235]" size={40} />
          </a>
          <a
            className="hover:bg-secondary hover:rounded-full p-4"
            href="https://github.com/jilleatkins"
          >
            <FaGithub className="cursor-pointer fill-[#443235]" size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
