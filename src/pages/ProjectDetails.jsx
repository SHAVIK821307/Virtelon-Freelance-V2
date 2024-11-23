import React from "react";
import hero7senses from "../assets/hero_7senses.png";
import logo from "../assets/logo.png";
import aboutMockup7senses from "../assets/about_mockup_7senses.png";

import testimonial1Mockup7senses from "../assets/testimonial1_mockup_7senses.png";
import testimonial2Mockup7senses from "../assets/testimonial2_mockup_7senses.png";

export default function ProjectDetails() {
  const project = {
    title: "7 Senses Integration Centre",
    description:
      "Real Estate, development and control room system. We've helped them implement about 1,500 orders and 300 agents designed to serve you fast comfort, beautiful, and enjoyable every day.",
    client: {
      name: "7 Senses Integration Centre",
      description: "Child Mental Health Integration Centre",
    },
    role: ["UI/UX Design", "Frontend Development", "Deployment"],
    features: [
      "Real Integration / To have a meeting for your children's mental development",
      "Responsive Design / Designed to scale seamlessly from small to large devices, ensuring responsive on every device",
    ],
    technologies: [
      { name: "React", icon: logo },
      { name: "HTTP/3", icon: logo },
      { name: "Tailwind CSS", icon: logo },
      { name: "Swiper", icon: logo },
    ],
    mockupImage: hero7senses,
    mobileImages: aboutMockup7senses,
    testimonialDesc:
      "The team at VIRTELON did an excellent job developing our Children Heath Website. They were professional, responsive and did all the work within the deadline. We are very satisfied with their work and would recommend them everytime.",
    testimonialName: "Payel Maity",
    testimonialPos: "CEO & Founder - Seven Senses Integration Centre",
    testimonialImg1: testimonial1Mockup7senses,
    testimonialImg2: testimonial2Mockup7senses,
  };
  return (
    <div className="mx-auto max-w-6xl my-8 space-y-8">
      {/* Header Section */}
      <section className="rounded-3xl bg-[#44DAFF] p-8 text-black">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-lg ">{project.description}</p>
            <button className="rounded-full bg-white px-6 py-2 text-black hover:bg-cyan-50">
              Visit Site
            </button>
          </div>
          <div className="relative h-[200px] md:h-[300px]">
            <img
              src={project.mockupImage}
              alt="Project mockup"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-[#44DAFF] p-6 text-black">
          <h2 className="mb-4 text-2xl font-bold">Client</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{project.client.name}</h3>
            <p className="">{project.client.description}</p>
          </div>
        </div>

        <div className="rounded-3xl bg-[#44DAFF] p-6 text-black">
          <h2 className="mb-4 text-2xl font-bold">Our Role</h2>
          <ul className="space-y-2">
            {project.role.map((role, index) => (
              <li key={index} className="">
                • {role}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* About Project */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-[#44DAFF] p-6 text-black shadow-xl">
          <h2 className="mb-4 text-2xl font-bold">About Project</h2>
          <p className="">{project.description}</p>
        </div>

        <div className=" ">
          <div className="relative rounded-3xl bg-[#44DAFF] p-6 shadow-xl ">
            <img
              src={project.mobileImages}
              alt={`Mobile mockup`}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="rounded-3xl bg-[#44DAFF] p-6 text-black">
        <h2 className="mb-4 text-2xl font-bold">Features</h2>
        <ul className="space-y-3">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4"
                />
              </svg>
              <span className="">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="rounded-3xl bg-[#44DAFF] p-6 text-black">
        <h2 className="mb-6 text-2xl font-bold">Technology Used</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-6 md:grid-rows-2">
          <div className="rounded-3xl bg-[#44DAFF] flex px-6 pt-6 items-end text-black shadow-xl">
            <img
              src={project.testimonialImg1}
              alt={`Mobile mockup`}
              className="object-contain mx-auto"
            />
          </div>
          <div className="rounded-3xl flex flex-col bg-[#44DAFF] p-6 text-black shadow-xl">
            <div className="mb-4">
              <h2 className="mb-4 text-2xl font-bold">Testimonial</h2>
              <p className="">{project.testimonialDesc}</p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <img src={logo} alt="" className="object-cover" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-black">
                  {project.testimonialName}
                </h3>
                <p className="text-black">{project.testimonialPos}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative rounded-3xl bg-[#44DAFF] p-6  h-full flex justify-center items-center shadow-xl">
            <img
              src={project.testimonialImg2}
              alt={`Mobile mockup`}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
