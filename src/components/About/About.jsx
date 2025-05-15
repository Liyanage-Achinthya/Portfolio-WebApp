import React from "react";
import "./About.css";
import Profile from "../../assets/Profile.png";

const About = () => {
  return (
    <section id="about" className="about">
      <img src={Profile} alt="Profile" data-aos="fade-down" />
      <h1 data-aos="fade-up" data-aos-delay="100">
        <span>Relentless Developer, </span>Building Possibilities.
      </h1>
      <p data-aos="fade-up" data-aos-delay="200">
        IT Undergraduate
      </p>

      <div className="about-icon" data-aos="fade-up" data-aos-delay="300">
        <a href="mailto:liyanageachinthya@gamil.com">
          <i className="bx bxl-gmail"></i>
        </a>
        <a
          href="https://github.com/Liyanage-Achinthya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/liyanage-achinthya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>

      <div className="about-action">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <div className="about-CV">View CV</div>
        </a>
      </div>
    </section>
  );
};

export default About;
