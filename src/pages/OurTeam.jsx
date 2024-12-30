import React from "react";
import shardulImg from "../assets/shardulImg.png";
import harshImg from "../assets/harshImg.png";
import manasImg from "../assets/manasImg.png";
import sanskarImg from "../assets/sanskarImg.png";
import satyamImg from "../assets/satyamImg.png";
import shubhamImg from "../assets/shubhamImg.png";
import sushantImg from "../assets/sushantImg.png";
import utkarshImg from "../assets/utkarshImg.png";
import vijayantImg from "../assets/vijayantImg.png";
const OurTeam = () => {
  const teams = [
    {
      name: "Sanskar Mishra",
      position: "Designing & Marketing Expert",
      img: sanskarImg,
    },
    { name: "Utkarsh Jha", position: "Website Developer", img: utkarshImg },
    { name: "Harsh Baghel", position: "Website Developer", img: harshImg },
    { name: "Shardul Vikram", position: "App Developer", img: shardulImg },
    {
      name: "Vijayant Priyadarshi",
      position: "App Developer",
      img: vijayantImg,
    },
    {
      name: "Sushant Thakur",
      position: "Designing Marketing Expert",
      img: sushantImg,
    },
    { name: "Satyam Devraj", position: "AI Developer", img: satyamImg },
    { name: "Manas Sinha", position: "Social Media Manager", img: manasImg },
  ];
  return (
    <div className="min-h-screen bg-[#e6ffe6] p-8">
      <h1 className="text-6xl font-bold text-center mb-12">Our Team</h1>

      {/* CEO Card - Centered */}
      <div className="max-w-xs mx-auto mb-12">
        <div className="bg-[#44DAFF] rounded-2xl p-6 shadow-lg text-center">
          <div className="w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-yellow-300 overflow-hidden">
              <img
                src={shubhamImg}
                alt="CEO"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold">Shubham Raj</h2>
          <p className="text-lg">Founder & CEO</p>
        </div>
      </div>

      {/* Grid for other team members */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Marketing Expert */}
        {teams.map((member, index) => (
          <div
            className="bg-[#44DAFF] rounded-2xl p-6 shadow-lg text-center"
            key={index}
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-duration="800"
            data-aos-offset="200"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{
                  background:
                    "repeating-radial-gradient(circle at 50% 50%, #8080ff 0, #8080ff 3px, #ffffff 3px, #ffffff 6px)",
                }}
              >
                <img
                  src={member.img}
                  alt="Marketing Expert"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-lg">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
