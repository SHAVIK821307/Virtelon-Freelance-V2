import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-4 sm:mx-[10%] min-h-screen overflow-hidden ">
        <Navbar></Navbar>

        <div className="mx-0 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/franchise" element={<Franchise />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
