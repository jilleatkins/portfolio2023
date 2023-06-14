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
    } else if (activeRoute === "/projects" || activeRoute === "/contact") {
      return "text-secondary";
    }
  };

  const getBorderClass = () => {
    if (activeRoute === "/projects" || activeRoute === "/contact") {
      return "border-secondary";
    } else {
      return "border-primary";
    }
  };

  const getLastParagraphClass = () => {
    if (activeRoute === "/projects" || activeRoute === "/contact") {
      return "text-secondary";
    } else {
      return "text-primary";
    }
  };

  return (
    <div>
      <div className="md:block hidden fixed top-[5%] z-10">
        <div className="flex flex-col space-y-36">
          <a
            href="/"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline underline-offset-4",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary font-normal text-[12px] tracking-[.30em]">
              HOME
            </p>
          </a>
          <a
            href="/about"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline underline-offset-4",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary font-normal text-[12px] tracking-[.30em]">
              ABOUT
            </p>
          </a>
          <a
            href="/projects"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline underline-offset-4",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary font-normal text-[12px] tracking-[.30em]">
              PROJECTS
            </p>
          </a>
          <a
            href="/contact"
            className={classNames(
              "m-2 p-4 cursor-pointer hover:underline underline-offset-4",
              getLinkColorClass()
            )}
          >
            <p className="-rotate-90 font-secondary font-normal text-[12px] tracking-[.30em]">
              CONTACT
            </p>
          </a>
          <div
            className={classNames(
              "ml-16 border-l h-[200px] tracking-[.30em]",
              getBorderClass()
            )}
          ></div>
        </div>
        <p
          className={classNames(
            "-rotate-90 mt-32 mr-2 font-secondary font-light text-[10px] tracking-[.30em]",
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
