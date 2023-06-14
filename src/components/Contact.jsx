import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#E6DDDE]">
      <div
        id="contact"
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="h-screen w-screen bg-[#1A1818]"
      >
        <div
          data-AOS="fade-in"
          data-aos-duration="2000"
          data-aos-delay="1200"
          className="absolute top-16 right-16 border-r border-secondary h-[540px] subpixel-antialiased animate-side-line-grow origin-top ease-in"
        ></div>
        <div
          data-AOS="fade-in"
          data-aos-duration="2000"
          data-aos-delay="1200"
          className="absolute top-16 right-16 border-t border-secondary w-[400px] subpixel-antialiased animate-top-line-grow origin-right ease-in"
        ></div>
        <div className="max-w-[1040px] ml-[10%] p-4 pt-56 pb-10">
          <h1
            className="font-primary text-secondary text-8xl md:text-[13rem] mt-20 mb-[-14px] subpixel-antialiased"
            data-AOS="fade-in"
            data-aos-duration="2000"
            data-aos-delay="1200"
          >
            Hello,
          </h1>
          <div
            className="relative border-t border-secondary w-[410px] ml-32 pb-14 subpixel-antialiased animate-top-line-grow origin-left ease-in"
            data-AOS="fade-in"
            data-aos-duration="2000"
            data-aos-delay="1200"
          ></div>
        </div>
        <div className="max-w-[1740px] ml-[10%] flex flex-col justify-center items-center">
          <h2
            className="font-primary text-secondary text-5xl md:text-7xl ml-72 mb-[60px]"
            data-AOS="fade-in"
            data-aos-duration="2000"
            data-aos-delay="2000"
          >
            I'd love to hear from you.
          </h2>
          <p
            className="font-tertiary text-secondary text-xl font-thin leading-tight ml-[-8px] subpixel-antialiased"
            data-AOS="fade-in"
            data-aos-duration="2000"
            data-aos-delay="2000"
          >
            Send me an email directly at{" "}
            <span className="font-medium">jilleatkins@gmail.com</span>,
            <br /> or hit the links below.
          </p>
          <div className="flex flex-row space-x-14 pt-16 pl-44">
            <a
              className="hover:bg-darkhover hover:rounded-full p-4"
              data-AOS="fade-in"
              data-aos-duration="2000"
              data-aos-delay="2000"
              href="https://linkedin.com/in/jill-atkins"
            >
              <FaLinkedinIn
                className="cursor-pointer fill-secondary "
                size={50}
              />
            </a>
            <a
              className="hover:bg-darkhover hover:rounded-full p-4"
              data-AOS="fade-in"
              data-aos-duration="2000"
              data-aos-delay="2000"
              href="https://github.com/jilleatkins"
            >
              <FaGithub
                className="cursor-pointer fill-secondary hover:bg-darkhover hover:rounded-full"
                size={50}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
