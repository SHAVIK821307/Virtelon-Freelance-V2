import React from "react";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
            <img src={logo} loading="lazy" className=" w-16" alt="Logo" />
        </div>
        <div className="flex gap-4 items-center flex-wrap justify-around mb-12">
          <a
            href="#"
            className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#whyus"
            className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Why Us
          </a>
          <a
            href="#services"
            className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Projects
          </a>
          
          <a
            href="#contact"
            className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
        <hr className="border-gray-900 mb-4" />

        <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between">
          <p className="text-gray-900 font-bold text-sm">
            © 2024 Virtelon. All Rights Reserved
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-900 hover:font-bold text-sm underline hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-900 hover:font-bold text-sm underline hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Terms Of Service
            </a>
            <a
              href="#"
              className="text-gray-900 hover:font-bold text-sm underline hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Cookies Setting
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
