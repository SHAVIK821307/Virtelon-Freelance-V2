import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Website Development",
      description:
        "We specialize in creating custom, responsive websites that look great and perform seamlessly across all devices.",
    },
    {
      title: "App Development",
      description:
        "We excel in developing custom, responsive apps that deliver outstanding performance and a seamless user experience on any device.",
    },
    {
      title: "Web Scrapping",
      description:
        "Accurate web scrapping services for precise data extraction, tailored analysis, and actionable business insights.",
    },
    {
      title: "Generative AI",
      description:
        "Innovative generative AI solutions creating unique content, designs and insights to drive creativity and efficiency",
    },
    {
      title: "Voicebot/Chatbot",
      description:
        "Advanced voicebot and chatbot solution for seamless, interactive customer engagement and support.",
    },
    {
      title: "Software Development",
      description:
        "We specialize in creating custom, responsive websites that look great and perform seamlessly across all devices.",
    },
    {
      title: "And Many More...",
      description:
        "We got more services, if you’re wondering you many some more dedicated services for your dream project. Press anywhere inside the box.",
    },
  ];
  const lastIndex = services.length - 1;

  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl  text-center font-bold tracking-tighter mb-4 ">
            Services We Provide
          </h1>
          <p className="text-gray-900 text-center uppercase font-medium">
            VIRTELON IS DEDICATED TO PROVIDING HIGH-QUALITY AND INNOVATIVE
            SOLUTIONS ACROSS A BROAD SPECTRUM OF SERVICES, INCLUDING WEB
            DEVELOPMENT, UI/UX DESIGN, APP DEVELOPMENT, DIGITAL MARKETING, AND
            OTHER TECH AND BUSINESS-RELATED OFFERINGS. OUR UNWAVERING COMMITMENT
            TO EXCELLENCE, INTEGRITY, AND CLIENT SATISFACTION SETS US APART, AS
            WE CONSISTENTLY STRIVE TO EXCEED EXPECTATIONS AND FOSTER LONG-TERM
            PARTNERSHIPS.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
            What Exactly We Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-auto">
            {services.map((service, index) =>
              index != lastIndex ? (
                <div
                  key={index}
                  className=" bg-[#ACEBE2] border-2 border-transparent hover:border-2 hover:bg-[#a0e8db] hover:border-[#00838d] transition-colors duration-200 px-6 py-12 rounded-lg shadow-xl"
                  data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="800"
                  data-aos-offset="200"
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ) : (
                <div className="md:col-span-2 mx-auto" key={index}>
                  <div
                    
                    className="relative cursor-pointer bg-[#ACEBE2] border-2 border-transparent hover:border-2 hover:bg-[#a0e8db] hover:border-[#00838d] transition-colors duration-200 px-6 py-12 rounded-lg shadow-xl"
                    data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="800"
                    data-aos-offset="200"
                    onClick={() => navigate("/services")}
                  >
                    <div className="absolute top-0 right-0 p-2">
                      <MdArrowOutward />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
