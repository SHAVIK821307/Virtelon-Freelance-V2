import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Bra Factory",
      description:
        "App for biggest Tourist Tempo company of ladakh to manage their bookings and drivers.",
    },
    {
      title: "7 Senses Integration Centre",
      description:
        "The best food delivery app in town, and enjoy delicious meals from your favorite restaurants.",
    },
  ];
  

  return (
    <section id="projects" className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl  text-center font-bold tracking-tighter mb-4 ">
            Projects
          </h1>
          <p className="text-gray-900 text-center capitalize font-medium">
            We believe in the power of technology to empower businesses. <br />
            Explore our latest projects and see how we have helped our clients.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-auto">
            {projects.map((project, index) => (
              <div
                className="relative cursor-pointer bg-[#D6FFB4] border-2 border-transparent hover:border-2 hover:bg-[#ccffa3] hover:border-[#5f9136] transition-colors duration-200 px-6 py-12 rounded-lg shadow-xl"
                data-aos={index % 2 == 0 ? "fade-left" : "fade-left"}
                data-aos-duration="800"
                data-aos-offset="150"
                onClick={() => navigate("/projects")}
                key={index}
              >
                <div className="absolute top-0 right-0 p-2">
                  <MdArrowOutward />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
