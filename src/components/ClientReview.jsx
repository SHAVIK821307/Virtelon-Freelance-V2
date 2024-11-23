import React from "react";
import { useNavigate } from "react-router-dom";

const ClientReview = () => {
  const navigate = useNavigate();
  const reviews = [
    {
      title: "LadyLand",
      description:
        "The team at VIRTELON did an excellent job developing our E-commerce Website. They were professional, responsive, and delivered a high-quality product on time. We are very satisfied with their work and would recommend them to anyone looking for a reliable development team.",
    },
    {
      title: "7 Senses Integration Centre",
      description:
        "The team at VIRTELON did an excellent job developing our Children Heath Website. They were professional, responsive and did all the work within the deadline. We are very satisfied with their work and would recommend them everytime.",
    },
  ];

  return (
    <section id="clientreview" className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col  space-y-4  max-w-3xl ">
          <h1 className="text-3xl md:text-4xl   font-bold tracking-tighter mb-4 ">
            Our Happy Clients say About us
          </h1>
          <p className="text-gray-900  capitalize font-medium">
            Here's a significant proof of our work, the testimonials, that we
            have received from our previous clients.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-auto">
            {reviews.map((review, index) => (
              <div
                className="relative bg-[#FCE9E8] border-2 border-transparent hover:border-2 hover:bg-[#fededd] hover:border-[#ff9691] transition-colors duration-200 px-6 py-12 rounded-lg shadow-xl"
                data-aos={index % 2 == 0 ? "fade-right" : "fade-right"}
                data-aos-duration="800"
                data-aos-offset="150"
                onClick={() => navigate(`/projects/${project.id}`)}
                key={index}
              >
                
                <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                <p className="text-gray-700">{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
