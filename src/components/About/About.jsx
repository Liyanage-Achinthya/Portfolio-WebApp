import React from "react";
import "./About.css";
import Profile from "../../assets/Profile.png";

const About = () => {
  return (
    <section id="about" className="about">
      <img src={Profile} alt="Profile" />
      <h1>
        <span>Relentless Developer, </span>Building Possibilities.
      </h1>
      <p>IT Undergraduate</p>

      <div className="about-icon">
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
