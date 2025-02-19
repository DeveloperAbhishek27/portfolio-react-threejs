import React, { useState } from "react";
import { styles } from "../../Styles";
import { Link } from "react-router-dom";
import { navLinks } from "./nav";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleScroll = (id, title) => {
    setActive(title);
    setToggle(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`${styles} w-full flex items-center py-2 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto pr-6 bg-primary">
          <Link
            to=""
            className="flex items-center gap-2 bg-primary"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src="./img/logo-1.png"
              alt="logo"
              className="w-20 h-11 object-contain bg-primary bg-transparent"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex gap-1">
              Abhishek | <span className="sm:block hidden">React.js</span>
            </p>
          </Link>

          {/* Desktop Navbar */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => handleScroll(link.id, link.title)}
              >
                <a href={`#${link.id}`} className="font-bold">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Navbar */}
          <div className="sm:hidden flex flex-1 justify-end mr-6 items-center">
            <FaBars
              className="w-[30px] h-[30px] cursor-pointer ml-[-20px] flex items-center justify-center text-[19px]"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-bold cursor-pointer text-[16px]`}
                    onClick={() => handleScroll(link.id, link.title)}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
