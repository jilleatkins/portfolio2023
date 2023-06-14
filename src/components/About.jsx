import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#1A1818]">
      <div
        id="about"
        data-aos="slide-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="h-screen w-screen bg-[#E6DDDE]"
      >
        <div
          data-AOS="fade-in"
          data-aos-duration="1500"
          data-aos-delay="1200"
          className="absolute top-16 right-16 border-r border-primary h-[540px] subpixel-antialiased animate-side-line-grow animation-delay-1200 origin-top ease-in"
        ></div>
        <div
          data-AOS="fade-in"
          data-aos-duration="1500"
          data-aos-delay="1200"
          className="absolute top-16 right-16 border-t border-primary w-[400px] subpixel-antialiased animate-top-line-grow animation-delay-1200 origin-right ease-in"
        ></div>
        <div className="max-w-[1040px] ml-[10%] md:pl-20 p-4 pt-64 pb-10">
          <h1
            className="font-primary text-primary text-8xl md:text-header mb-[-25px] subpixel-antialiased"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="3000"
          >
            About
          </h1>
          <div
            className="relative border-t border-primary w-[680px] ml-32 pb-14 subpixel-antialiased animate-top-line-grow origin-left ease-in"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="3000"
          ></div>
          <h2
            className="font-primary text-primary text-3xl md:text-5xl mb-[40px]"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            I'm a junior software developer. <br /> And I love it.
          </h2>
          <p
            className="font-secondary text-primary"
            data-AOS="fade-in"
            data-aos-duration="1500"
            data-aos-delay="3000"
          >
            <span className="font-semibold tracking-wider">
              My name is Jill.
            </span>{" "}
            I'm an Australian living in Glasgow, Scotland. I've come from 10
            years in the dental industry - which was kind of an accident - and
            was looking for a change. A creative outlet. A chance to build, to
            produce, and to really push the limits of what's possible. Growing
            up, I thought I would become an author. Then I thought I was going
            to be a scientist.
            <br />
            <br />
            <span className="font-semibold tracking-wider">
              The one constant I kept going back to was computers.
            </span>{" "}
            I used to customise my <span className="italic">mySpace</span>{" "}
            profile to within an inch of its life. I spent many hours writing
            various scripts to make my Sims do things like sit down when they
            ate, instead of awkwardly standing and watching TV, plate in hand.
            It was the most time I'd ever invested in anything that I wasn't
            being graded on.
            <br />
            Part of me wishes I'd recognised that interest as a prospective
            career path years ago, and the other part doesn't regret a thing.
            <br />
            <br />
            In November 2022, I was accepted to study{" "}
            <span className="font-semibold tracking-wider">
              Professional Software Development
            </span>{" "}
            at CodeClan in Glasgow and it was fantastic. I was able to hone my
            skills in full-stack software development in 16 weeks over 800+
            hours and am steadily building a vision for where I can go and what
            I can do with a career in development.
            <br />
            <br />
            It's hard making the leap to change careers and I am so proud of
            myself for doing it. It's been a{" "}
            <span className="italic">wild</span> ride.
            <br />
            <br />
            <span className="font-semibold tracking-wider">Read on</span> to
            find out more about what I learned during the course and what I've
            been working on since.
          </p>
          <a
            href="/skills"
            className="flex justify-center p-10"
            data-AOS="fade-in"
            data-aos-duration="2000"
          >
            <FaChevronDown
              data-AOS="fade-in"
              data-aos-duration="1500"
              data-aos-delay="3000"
              className="cursor-pointer fill-[#443235] p-5 hover:bg-secondary hover:rounded-full"
              size={70}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
