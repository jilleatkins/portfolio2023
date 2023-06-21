import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const NavBar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("/");

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const getLinkColorClass = () => {
    if (activeRoute === "/" || activeRoute === "/about") {
      return "text-primary";
    } else if (
      activeRoute === "/projects" ||
      activeRoute === "/contact" ||
      activeRoute === "/project-carousel"
    ) {
      return "text-secondary";
    }
  };

  const getBorderClass = () => {
    if (
      activeRoute === "/projects" ||
      activeRoute === "/contact" ||
      activeRoute === "/project-carousel"
    ) {
      return "border-secondary";
    } else {
      return "border-primary";
    }
  };

  const getLastParagraphClass = () => {
    if (
      activeRoute === "/projects" ||
      activeRoute === "/contact" ||
      activeRoute === "/project-carousel"
    ) {
      return "text-secondary";
    } else {
      return "text-primary";
    }
  };

  return (
    <div>
      <div className="lg:block fixed top-[5%] z-10">
        <div className="flex flex-col lg:space-y-16 xl:space-y-36">
          <a
            href="/"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary lg:font-normal xl:font-medium lg:text-[9px] xl:text-[11px] tracking-[5px]">
              HOME
            </p>
          </a>
          <a
            href="/about"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary lg:font-normal xl:font-medium lg:text-[9px] xl:text-[11px] tracking-[5px]">
              ABOUT
            </p>
          </a>
          <a
            href="/projects"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary lg:font-normal xl:font-medium lg:text-[9px] xl:text-[11px] tracking-[5px]">
              PROJECTS
            </p>
          </a>
          <a
            href="/contact"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary lg:font-normal xl:font-medium lg:text-[9px] xl:text-[11px] tracking-[5px]">
              CONTACT
            </p>
          </a>
          <div
            className={classNames(
              "ml-16 border-l lg:h-[100px] xl:h-[200px] tracking-[.30em]",
              getBorderClass()
            )}
          ></div>
        </div>
        <p
          className={classNames(
            "-rotate-90 lg:mt-20 xl:mt-32 mr-2 font-secondary lg:font-extralight xl:font-light lg:text-[9px] xl:text-[10px] tracking-[.30em]",
            getLastParagraphClass()
          )}
        >
          J.A. | 2023
        </p>
      </div>
    </div>
  );
};

export default NavBar;
