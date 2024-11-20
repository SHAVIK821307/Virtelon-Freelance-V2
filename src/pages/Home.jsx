import React from "react";
import heroimg from "../assets/hero_img.png";
import Whyus from "../components/Whyus";
import Services from "../components/Services";
const Home = () => {
  return (
    <>
    <div className="relative z-100 h-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 md:py-20">
        <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-4xl md:text-6xl z-100 max-w-full md:text-left text-center md:max-w-1/2 font-grifter font-bold text-gray-800 mb-4">
            GET THE BEST <br />
            For Your <br /> Projects.
          </h1>
          <div>
            <ul className="list-none items-center justify-center md:items-start md:justify-start text-base md:text-lg font-semibold flex flex-cols gap-4 md:gap-6">
              <li>Innovate</li>
              <li className="list-disc">Design</li>
              <li className="list-disc">Develop</li>
            </ul>
          </div>
          <div className="flex items-center justify-center md:items-start md:justify-start gap-4 mt-4 flex-wrap">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 w-48 rounded-md ">
              Book Free Consultation
            </button>
            <a href="/contact">
              <button className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 w-48 py-2 px-8 rounded-md">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="w-10/12 md:w-5/12" data-aos="fade-left" data-aos-duration="1000">
          <img loading="lazy" src={heroimg} alt="" />
        </div>

      </div>
        <div>
        <h2 className="text-3xl text-gray-400 text-center mb-6">Our Trusted Clients</h2>
        </div>
    </div>
    <Whyus></Whyus>
    <Services></Services>
    </>
  );
};

export default Home;