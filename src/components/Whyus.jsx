import React from "react";

const Whyus = () => {
  return (
    <section id="whyus" className="py-20">
      <div className="flex flex-col justify-center items-center">
        {/* <div>
          <div class="zigzag-2"></div>
          <div class="bg-[url('/images/zigzag.png')] md:block hidden w-32 md:right-20 h-16 bg-no-repeat absolute"></div>
        </div>
        <div class="zigzag-2"></div> */}
        <div className="max-w-2xl w-full h-full p-8">
          <h1 className="text-6xl  text-center font-bold mb-4">
            Why Us
          </h1>
          <p className="text-gray-900 text-center mb-4 uppercase">
          At Virtelon, we are your one-stop solution for all technological services <br />
required for your upcoming projects. <br />
Our comprehensive suite of services is designed to cater to every aspect of your technology needs <br />
ensuring your projects succeed from inception to completion.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:px-20 py-20 rounded-2xl bg-[#44DAFF] justify-between" data-aos="fade-up" data-aos-duration="500">
          <div className="text-center">
            <h2 className="text-4xl font-grifter font-bold">
              <span >15</span>+
            </h2>
            <p>Projects Completed</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-grifter font-bold">
              <span >12</span>+
            </h2>
            <p>Happy Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-grifter font-bold">
              <span >160</span>K+
            </h2>
            <p>Members Community</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-grifter font-bold">
              <span >4</span>+
            </h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
