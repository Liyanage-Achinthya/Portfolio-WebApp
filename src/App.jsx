import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      offset: 120, // offset (in px) from the original trigger point
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
