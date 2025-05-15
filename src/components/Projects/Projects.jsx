import React from "react";
import "./Projects.css";
import Project_Data from "../../assets/Project_Data.js";
import ReadMore from "../../assets/arrow_icon.svg"; // Arrow icon for "Read More"

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="prj-title" data-aos="fade-up">
        <h1>Projects</h1>
      </div>

      <div className="prj-container">
        {Project_Data.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="prj-link-wrapper"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100} // Stagger animation
          >
            <div className="prj-format">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="prj-tags">
                {project.tech.map((tag, i) => (
                  <img
                    key={i}
                    src={tag.icon}
                    alt={tag.name}
                    title={tag.name}
                    className="tech-icon"
                  />
                ))}
              </div>

              <div className="prj-readmore">
                <p>Read More</p>
                <img src={ReadMore} alt="Arrow icon for Read More" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
