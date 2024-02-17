import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

import gitHub from "../images/github-icon-512x497-oppthre2.png";
import linkd from "../images/circle-linkedin-512.webp";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[20px]" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by - Harshit Choubey <br></br>
          <div className="flex items-center justify-center mr-8 my-2">
            <Link
              to="https://github.com/Harshit-Choubey-19"
              className="flex items-center"
            >
              <img
                className="h-8 dark:md:block mr-3"
                src={gitHub}
                alt="GitHub"
              ></img>
            </Link>
            <Link
              to="https://www.linkedin.com/in/harshit-choubey/"
              className="flex items-center"
            >
              <img
                className="h-8 dark:md:block mr-3"
                src={linkd}
                alt="Linkedin"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
