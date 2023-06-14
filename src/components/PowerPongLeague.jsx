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
        className="max-w-[100%] h-[98%] ml-[14%] mr-[14%] md:pl-20 p-4 pb-24 pt-72 bg-[#1A1818] opacity-100 transform translate-y-[-100%] transition-all duration-1000 ease-in"
        data-aos="slide-down"
        data-aos-duration="1000"
        data-aos-offset="100"
        data-aos-delay="200"
      >
        <h1
          className="max-w-[94%] flex justify-center items-center font-primary text-[#E6DDDE] text-[12rem] mb-[-40px] mt-[19%] subpixel-antialiased leading-tight"
          data-aos="slide-up"
          data-aos-duration="750"
          data-aos-offset="100"
          data-aos-delay="1200"
        >
          powerpong league
        </h1>
      </div>
      <div className="flex justify-center items-center max-w-[40%] ml-[30%] mr-[14%] md:pl-20 mt-56 bg-[#E6DDDE]">
        <h2 className="font-primary text-primary text-5xl leading-tight subpixel-antialiased">
          Serve up victory with this dynamic ping pong score tracking website.
          Keep tabs on scores, game history, and players effortlessly. Our app
          reflects the triumph of winners and ensures you never miss a serve.
          Unleash the competitive spirit and conquer the ping pong arena like
          never before.
        </h2>
      </div>
      <div className="flex flex-cols-3 gap-20 justify-center p-10 text-[15px]">
        <div className="flex flex-col justify-start items-start p-10 font-tertiary text-primary">
          <h3 className="font-semibold tracking-wider underline underline-offset-4 pb-4 leading-relaxed">
            STACK
          </h3>
          <h3>React.js</h3>
          <h3>MongoDB</h3>
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
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/JBlaney93"
          >
            James Blaney
          </a>
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/impregnablequestion"
          >
            Séamus Ryan
          </a>
        </div>
        <div className="flex flex-col justify-start items-start p-10 font-tertiary text-primary">
          <h3 className="font-semibold tracking-wider underline underline-offset-4 pb-4 leading-relaxed">
            GITHUB URL
          </h3>
          <a
            className="hover:underline cursor-pointer"
            href="https://github.com/jilleatkins/javascript-project"
          >
            https://github.com/jilleatkins/javascript-project
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <iframe
          className="w-[1240px] h-[700px] aspect-w-16 aspect-h-16/9 shadow-gray-300 drop-shadow-lg"
          src="https://youtube.com/embed/RfwVVUPGNpM"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="PowerPongLeague"
        />
      </div>

      <div className="flex justify-center items-center max-w-[50%] ml-[25%] mr-[14%] md:pl-20 bg-[#E6DDDE]">
        <h3 className="flex justify-start items-start p-24 font-tertiary text-primary leading-loose">
          PowerPong League is a captivating web application developed using
          React and MongoDB as part of our group project for the CodeClan
          Professional Software Development course, spanning over 16 weeks. This
          innovative app enhances traditional ping pong scorekeeping by
          transforming it into an interactive and visually stunning experience.
          With PowerPong League, users can create personalized personas and
          effortlessly keep track of scores. The app includes a feature that
          dynamically tracks and displays the server, adding an extra layer of
          excitement to the game.
          <br />
          <br />
          Moreover, it incorporates a leaderboard functionality, enabling
          players to compare their performance over time and see where they
          stand among their peers. The talented team behind this remarkable
          creation consists of James Blaney, Sèamus Ryan, and Jill Atkins, who
          joined forces to develop PowerPong League in November 2022. Together,
          they combined their skills and expertise to bring this project to life
          and provide an exceptional user experience. PowerPong League sets a
          new standard for ping pong scorekeeping, making it engaging, visually
          appealing, and socially competitive.
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
