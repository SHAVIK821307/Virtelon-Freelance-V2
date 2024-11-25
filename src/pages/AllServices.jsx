import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const AllServices = () => {
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
      title: "Voicebot-Chatbot",
      description:
        "Advanced voicebot and chatbot solution for seamless, interactive customer engagement and support.",
    },
    {
      title: "Software Development",
      description:
        "We specialize in creating custom, responsive websites that look great and perform seamlessly across all devices.",
    },
    {
      title: "Graphic Designing",
      description:
        "We specialize in creative graphic design solutions that elevate your brand’s identity.",
    },
    {
      title: "UI-UX Designing",
      description:
        "We specialize in creating intuitive, user-friendly UI/UX designs that enhance user experience. ",
    },
    {
      title: "Website Management",
      description:
        "Expert website management ensuring optimal performance, security, and seamless user experience. ",
    },
    {
      title: "Troubleshooting",
      description:
        "We specialize in troubleshooting services to quickly identify and resolve issue with your website or digital platforms.",
    },
    {
      title: "Brand Promotion",
      description:
        "We specialize in brand promotion strategies tailored to elevate your online presence.",
    },
    {
      title: "Customer Support Executive",
      description:
        "We provide expert consultancy services tailored to your business goals.",
    },
  ];
  const lastIndex = services.length - 1;

  return (
    <section id="services" className="w-full my-8 pb-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl  text-center font-bold tracking-tighter mb-4 ">
            All Services We Provide
          </h1>
          
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3 mt-8 mx-auto">
            {services.map((service, index) =>
              (
                <div
                  key={index}
                  className=" bg-[#ACEBE2] cursor-pointer border-2 border-transparent hover:border-2 hover:bg-[#a0e8db] hover:border-[#00838d] transition-colors duration-200 px-6 py-12 rounded-lg shadow-xl"
                  data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="800"
                  data-aos-offset="200"
                  onClick={() => navigate(`/contact/${service.title}`)}
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ) 
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
