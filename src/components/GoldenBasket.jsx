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
          className="flex justify-center items-center font-primary text-[#E6DDDE] text-[12rem] mb-[-40px] mt-[35%] subpixel-antialiased"
          data-aos="slide-up"
          data-aos-duration="750"
          data-aos-offset="100"
          data-aos-delay="1200"
        >
          golden basket
        </h1>
      </div>
      <div className="flex justify-center items-center max-w-[40%] ml-[30%] mr-[14%] md:pl-20 mt-64 bg-[#E6DDDE]">
        <h2 className="font-primary text-primary text-5xl leading-tight subpixel-antialiased">
          An enterprise inventory management system.
        </h2>
      </div>
      <div className="flex flex-cols-3 gap-20 justify-center p-10 text-[15px]">
        <div className="flex flex-col justify-start items-start p-10 font-tertiary text-primary">
          <h3 className="font-semibold tracking-wider underline underline-offset-4 pb-4 leading-relaxed">
            STACK
          </h3>
          <h3>Python</h3>
          <h3>SQL</h3>
          <h3>HTML & CSS</h3>
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
          className="h-auto max-w-[50%]"
          src="public/assets/GoldenBasketCollage.jpg"
          alt="Golden Basket collage"
        ></img>
      </div>
      <div className="flex justify-center items-center max-w-[50%] ml-[25%] mr-[14%] md:pl-20 bg-[#E6DDDE]">
        <h3 className="flex justify-start items-start p-24 font-tertiary text-primary leading-loose">
          Golden Basket is a robust web application developed using Python and
          SQL, designed to replicate an enterprise-level inventory management
          system. This project showcases the seamless integration of a powerful
          database with a user-friendly interface, with special attention given
          to test-driven development principles. With Golden Basket, users can
          experience the complete range of CRUD (Create, Read, Update, Delete)
          functionality. This means that the application enables users to
          effortlessly manage products and suppliers by editing, adding, or
          deleting data as needed. The intuitive user interface ensures a smooth
          and efficient experience throughout these operations.
          <br />
          <br />
          As a solo project, I created Golden Basket in November 2022. By
          leveraging my expertise and skill set, I developed a comprehensive
          solution that meets the requirements of an enterprise inventory
          management system. Attention to detail, meticulous testing, and a
          focus on user experience were key factors in bringing this project to
          life. Golden Basket stands as a testament to the power of Python and
          SQL in building sophisticated web applications. Its feature-rich
          nature, coupled with its seamless integration of database
          functionality and user interface, sets it apart as a valuable tool for
          efficient inventory management.
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
