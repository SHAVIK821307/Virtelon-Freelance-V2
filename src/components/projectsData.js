import hero7senses from "../assets/hero_7senses.png";
import heroBrafact from "../assets/hero_brafact.png";
import logo from "../assets/logo.png";
import aboutMockup7senses from "../assets/about_mockup_7senses.png";
import aboutMockupBrafact from "../assets/about_mockup_brafact.png";

import testimonial1Mockup7senses from "../assets/testimonial1_mockup_7senses.png";
import testimonial1MockupBrafact from "../assets/testimonial1_mockup_brafact.png";
import testimonial2Mockup7senses from "../assets/testimonial2_mockup_7senses.png";
import testimonial2MockupBrafact from "../assets/testimonial2_mockup_brafact.png";
import testimonialProfile7senses from "../assets/testimonial_profile_7senses.png"
import testimonialProfileBrafact from "../assets/testimonial_profile_brafact.png"

export const projectsData=[
    {
        id:"bra-factory",
        title: "Bra Factory",
        description:
          "Bra Factory, where elegance and comfort come together. We’re here to offer you the perfect blend of high-quality bras and lingerie designed to make you feel confident, beautiful, and empowered—every day.",
        client: {
          name: "LadyLand",
          description: "Biggest Wholesale Female Undergarment Store",
        },
        role: ["UI/UX Design", "Frontend Development","Backend Development","Admin Panel Development", "Deployment"],
        aboutDesc:"Bra Factory - Biggest Wholesale Female Undergarment Store",
        features: [
          "Wallet Integration : A Personalised wallet for this website",
          "Enhanced customer experience: Provides customers with transparency and peace of mind, reducing anxiety and improving overall satisfaction. ",
          "Reduced customer support inquiries: Proactive updates minimize the need for customers to contact support for order status inquiries.",
          "Improved operational efficiency: Helps businesses identify and resolve potential issues in the supply chain more quickly. ",
          "Increased customer trust and loyalty: Demonstrates a commitment to customer service and builds trust in the brand ",
        ],
        technologies: [
          { name: "React", icon: logo },
          { name: "Next.js", icon: logo },
          { name: "MUI", icon: logo },
          { name: "Tailwind CSS", icon: logo },
          { name: "Google Font API", icon: logo },
          { name: "Google Analytics", icon: logo },
          { name: "No SQL Database", icon: logo },
          
        ],
        mockupImage: heroBrafact,
        mobileImages: aboutMockupBrafact,
        testimonialDesc:
          "The team at VIRTELON did an excellent job developing our E-commerce Website. They were professional, responsive, and delivered a high-quality product on time. We are very satisfied with their work and would recommend them to anyone looking for a reliable development team.",
        testimonialProfile:testimonialProfileBrafact,  
        testimonialName: "Zamiruddin",
        testimonialPos: "CEO & Founder - LadyLand",
        testimonialImg1: testimonial1MockupBrafact,
        testimonialImg2: testimonial2MockupBrafact,
      },
      {
        id:"7-senses",
        title: "7 Senses Integration Centre",
        description:
          "7 Senses Integration Centre is the best New Era Child Mental Health Recovery Integration organization that helps in the Mental as well as Logical growth of Children.",
        client: {
          name: "7 Senses Integration Centre",
          description: "Child Mental Health Integration Centre",
        },
        role: ["UI/UX Design", "Frontend Development", "Deployment"],
        aboutDesc:"Seven Senses Integration Centre - Child Mental Health Integration Centre ",
        features: [
          "Real Integration : To have a meeting for your children's mental development",
          "Responsive Design : Designed to scale seamlessly from small to large devices, ensuring responsive on every device",
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
        testimonialProfile:testimonialProfile7senses,
        testimonialName: "Payel Maity",
        testimonialPos: "CEO & Founder - Seven Senses Integration Centre",
        testimonialImg1: testimonial1Mockup7senses,
        testimonialImg2: testimonial2Mockup7senses,
      }
]