import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
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
