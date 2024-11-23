import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import AllServices from "./pages/AllServices";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-4 sm:mx-[10%] min-h-screen ">
        <Navbar></Navbar>

        <div className="mx-0 h-full">
            <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/services" element={<AllServices />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/franchise" element={<Franchise />} /> */}
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
