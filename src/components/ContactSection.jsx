import React from "react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate=useNavigate();
  return (
    <section id="contact" className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-col items-center justify-center  mb-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-center  font-bold tracking-tighter mb-4 " data-aos="fade-up" data-aos-duration="450">
            Contact Us
          </h1>
          <p className="text-gray-900  capitalize font-medium" data-aos="fade-up" data-aos-duration="700">
            Don't wait, Its Now or Never!
          </p>
        </div>
        <button onClick={() => navigate("/contact")} className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 w-48 rounded-md mx-auto" data-aos="fade-up" data-aos-duration="950">
        Let’s Have a Chat
        </button>
        <div className="bg-[#44DAFF] flex flex-col md:flex-row justify-around items-center w-11/12 px-6 md:px-20 py-20 h-80 rounded-2xl mt-12">
          <h1 className="font-grifter text-4xl md:text-6xl mb-4">
            Social Profiles
          </h1>
          <div className="flex flex-wrap justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61559666020367"
              className="mx-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Facebook">
                  <path d="M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z"></path>
                </g>
              </svg>{" "}
            </a>
            <a href="https://x.com/flutteryourway" className="mx-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Twitter">
                  <path d="M19.913,5.322a1.034,1.034,0,0,1,.837,1.629L19.708,8.432c-.064,5.086-1.765,8.539-5.056,10.264A10.917,10.917,0,0,1,9.6,19.835a12.233,12.233,0,0,1-6.2-1.524.76.76,0,0,1-.317-.8.768.768,0,0,1,.63-.6,20.6,20.6,0,0,0,3.745-.886C2,13.5,3.19,7.824,3.71,6.081a1.028,1.028,0,0,1,1.729-.422,9.931,9.931,0,0,0,5.995,2.95A4.188,4.188,0,0,1,12.725,5.3a4.125,4.125,0,0,1,5.7.02ZM4.521,17.794c1.862.872,6.226,1.819,9.667.016,2.955-1.549,4.476-4.732,4.521-9.461a.771.771,0,0,1,.142-.436l1.081-1.538-.041-.053c-.518-.007-1.029-.014-1.55,0a.835.835,0,0,1-.547-.221,3.13,3.13,0,0,0-4.383-.072,3.174,3.174,0,0,0-.935,2.87.646.646,0,0,1-.154.545.591.591,0,0,1-.516.205A10.924,10.924,0,0,1,4.722,6.354c-.67,2.078-1.52,7.094,3.869,9.065a.632.632,0,0,1,.416.538.625.625,0,0,1-.3.6A13.178,13.178,0,0,1,4.521,17.794ZM11.875,8.65h0Zm7.793-.161,0,0Z"></path>
                </g>
              </svg>{" "}
            </a>
            <a href="https://www.instagram.com/flutteryourway/" className="mx-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Instagram">
                  <g>
                    <path d="M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"></path>
                    <path d="M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z"></path>
                    <circle cx="17.2" cy="6.83" r="1.075"></circle>
                  </g>
                </g>
              </svg>{" "}
            </a>
            <a
              href="https://www.linkedin.com/company/flutter-your-way/"
              className="mx-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="LinkedIn">
                  <g>
                    <path d="M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z"></path>
                    <g>
                      <path d="M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z"></path>
                      <circle cx="7.376" cy="6.744" r="1"></circle>
                      <path d="M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a href="link" className="mx-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Youtube">
                  <g>
                    <path d="M19.437,19.937H4.562a2.5,2.5,0,0,1-2.5-2.5V6.563a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5V17.437A2.5,2.5,0,0,1,19.437,19.937ZM4.562,5.063a1.5,1.5,0,0,0-1.5,1.5V17.437a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z"></path>
                    <path d="M14.568,11.149,10.6,8.432a1.032,1.032,0,0,0-1.614.851v5.434a1.032,1.032,0,0,0,1.614.851l3.972-2.717A1.031,1.031,0,0,0,14.568,11.149Z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
