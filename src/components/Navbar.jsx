import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="w-full flex bg-transparent items-center justify-between text-sm py-4  text-black  ">
        <div
          className="flex items-center"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <img
            onClick={() => navigate("/")}
            className="w-12 h-auto cursor-pointer"
            src={logo}
            alt="hero image"
          />

          {/* <span
            className="font-extrabold text-xl logo cursor-pointer text-black"
            onClick={() => navigate("/")}
          >
            {" "}
            Virtelon
          </span> */}
        </div>
        <ul className="hidden md:flex items-start gap-6 font-semibold text-black ">
          <NavLink to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <a href="#whyus">
            <li className="py-1">Why Us</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </a>
          <NavLink to="/services">
            <li className="py-1">Services</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/projects">
            <li className="py-1">Projects</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>

        <div className="flex flex-col md:hidden px-0 bg-transparent text-black">
          <HiMenuAlt3
            onClick={() => setShowMenu(true)}
            className="text-3xl md:hidden cursor-pointer ml-1  "
          />
        </div>
        <div className="hidden md:block" data-aos="fade-down" data-aos-duration="500">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
            Book Free Consultation
          </button>
        </div>
      </div>
      {/* ===========Mobile Menu=========== */}

      <div className="md:hidden">
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all`}
        >
          <div className=" w-full px-4 py-6">
            <ImCross
              className="cursor-pointer text-2xl ml-auto"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col gap-2 items-center mt-5 px-5 text-left font-semibold">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block ">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/whyus">
              <p className="px-4 py-2 rounded inline-block ">Why Us</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/services">
              <p className="px-4 py-2 rounded inline-block ">Services</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/projects">
              <p className="px-4 py-2 rounded inline-block ">Projects</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block ">Contact Us</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
