import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NomNom = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="nomnom" className="h-full w-full bg-[#E6DDDE]">
      <div
        className="max-w-[71%] h-[98%] ml-[14%] mr-[14%] md:pl-20 p-4 pb-24 pt-72 bg-[#1A1818] opacity-100 transform translate-y-[-100%] transition-all duration-1000 ease-in"
        data-aos="slide-down"
        data-aos-duration="1000"
        data-aos-offset="100"
        data-aos-delay="200"
      >
        <h1
          className="flex justify-center items-center font-primary text-[#E6DDDE] text-[20rem] mb-[-40px] mt-[25%] subpixel-antialiased"
          data-aos="slide-up"
          data-aos-duration="750"
          data-aos-offset="100"
          data-aos-delay="1200"
        >
          nomnom.
        </h1>
      </div>
      <div className="flex justify-center items-center max-w-[40%] ml-[30%] mr-[14%] md:pl-20 mt-64 bg-[#E6DDDE]">
        <h2 className="font-primary text-primary text-5xl leading-tight subpixel-antialiased">
          A website for simple recipes that kids and adults can make together,
          built as our course capstone project.
        </h2>
      </div>
      <div className="flex flex-cols-3 gap-20 justify-center p-10 text-[15px]">
        <div className="flex flex-col justify-start items-start p-10 font-tertiary text-primary">
          <h3 className="font-semibold tracking-wider underline underline-offset-4 pb-4 leading-relaxed">
            STACK
          </h3>
          <h3>React.js</h3>
          <h3>Spring Boot</h3>
          <h3>TailwindCSS</h3>
        </div>
        <div className="flex flex-col justify-start items-start p-10 font-tertiary text-primary">
          <h3 className="font-semibold tracking-wider underline underline-offset-4 pb-4 ">
            TEAM
          </h3>
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/jilleatkins"
          >
            Jill Atkins
          </a>
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/AMG05"
          >
            Anne McGinness
          </a>
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/bbbbblddddd"
          >
            Brian Dickson
          </a>
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/Delfland"
          >
            Delphine Dallison
          </a>
        </div>
        <div className="flex flex-col justify-start items-start p-10 font-tertiary text-primary">
          <h3 className="font-semibold tracking-wider underline underline-offset-4 pb-4 leading-relaxed">
            GITHUB URL
          </h3>
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/bbbbblddddd/nom_nom"
          >
            https://github.com/bbbbblddddd/nom_nom
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-32 shadow-gray-300 drop-shadow-lg">
        <img
          className="h-auto max-w-[80%]"
          src="./src/assets/NomNomCollage.jpg"
          alt="NomNom collage"
        ></img>
      </div>
      <div className="flex justify-center items-center max-w-[50%] ml-[25%] mr-[14%] md:pl-20 bg-[#E6DDDE]">
        <h3 className="flex justify-start items-start p-24 font-tertiary text-primary leading-loose">
          NomNom is a web application built with React and Java (Spring) for our
          group capstone project of the 16-week CodeClan Professional Software
          Development course. This app's aim is to engage young children in the
          joys of cooking with the help of a parent or guardian, while teaching
          children the basics of food preparation and nutrition. It allows the
          user to log in to save their favourite recipes, review recipes, and
          rate them. It was created in February/March 2023 by Delphine Dallison,
          Brian Dickson, Anne McGinness, and Jill Atkins.
        </h3>
      </div>
      <div className="flex justify-center items-center max-w-[40%] ml-[30%] mr-[14%] md:pl-20 pb-10 bg-[#E6DDDE]">
        <a
          className="font-tertiary text-primary text-[14px] font-semibold tracking-wider pb-4 pt-10 leading-relaxed cursor-pointer"
          href="/projects"
        >
          BACK TO PROJECTS
        </a>
      </div>
    </div>
  );
};

export default NomNom;
