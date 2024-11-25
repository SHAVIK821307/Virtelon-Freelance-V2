import { useState } from 'react'
import { useParams } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const {title}=useParams()
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    socialProfile:'',
    mobileNo:'',
    service:title,
    requirements:'',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true);

    // EmailJS integration
    emailjs
      .send(
        "service_qqtzipf", // Replace with your EmailJS service ID
        "template_r0fswua", // Replace with your EmailJS template ID
        formData,
        "LmQFkfoDvLaWEoBP9" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          toast.success("Form submitted successfully!");
          setFormData({
            email: "",
            name: "",
            socialProfile: "",
            mobileNo: "",
            service: title,
            requirements: "",
          });
        },
        (error) => {
          toast.error("Failed to submit form. Please try again.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setIsSubmitting(false));
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-xl text-center mb-8 font-semibold">
      Don’t wait, It’s Now or Never!
      </p>
      <p className="text-xl text-center mb-8 text-gray-600">
      RUKIYE MATT, ABHI NAHI TOH KABHI NAHI
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full px-4 py-3 rounded-full bg-gray-100 border-2 border-cyan-400 focus:ring-2 focus:ring-teal-500 outline-none"
              required={true}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter a valid email address"
              className="w-full px-4 py-3 rounded-full bg-gray-100 border-2 border-cyan-400 focus:ring-2 focus:ring-teal-500 outline-none"
              required={true}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="social" className="block text-lg font-semibold">
            Your Linkedin, Twitter, Instagram Profile
            </label>
            <input
              type="text"
              id="social"
              name="socialProfile"
              value={formData.socialProfile}
              onChange={handleChange}
              placeholder="Social Media Link"
              className="w-full px-4 py-3 rounded-full bg-gray-100 border-2 border-cyan-400 focus:ring-2 focus:ring-teal-500 outline-none"
              required={true}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mobile" className="block text-lg font-semibold">
            Mobile number with country code
            </label>
            <input
              type="text"
              id="mobile"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter your Mobile Number"
              className="w-full px-4 py-3 rounded-full bg-gray-100 border-2 border-cyan-400 focus:ring-2 focus:ring-teal-500 outline-none"
              required={true}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="service" className="block text-lg font-semibold">
            Service You Want
            </label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Service Name"
              className="w-full px-4 py-3 rounded-full bg-gray-100 border-2 border-cyan-400 focus:ring-2 focus:ring-teal-500 outline-none"
              required={true}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="requirements" className="block text-lg font-semibold">
            Describe Your Requirements
            </label>
            <textarea
              
              id="requirement"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Enter Your Requirements"
              className="w-full h-32 px-4 py-3 rounded-2xl bg-gray-100 border-2 border-cyan-400 focus:ring-2 focus:ring-teal-500 outline-none"
              required={true}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 text-white text-lg font-medium bg-[#26B9C8] rounded-full hover:bg-[#1fa8b6] transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}