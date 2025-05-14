import React, { useState } from "react";
import "./Contact.css";
import csharp from "../../assets/Tech/csharp.svg";
import css from "../../assets/Tech/css3.svg";
import dotnet from "../../assets/Tech/dot-net.svg";
import figma from "../../assets/Tech/figma.svg";
import git from "../../assets/Tech/git.svg";
import html from "../../assets/Tech/html5.svg";
import java from "../../assets/Tech/java.svg";
import javascript from "../../assets/Tech/javascript.svg";
import jira from "../../assets/Tech/jira.svg";
import mariadb from "../../assets/Tech/mariadb.svg";
import sqlserver from "../../assets/Tech/microsoft-sql.svg";
import mysql from "../../assets/Tech/mysql.svg";
import node from "../../assets/Tech/node.svg";
import php from "../../assets/Tech/php.svg";
import python from "../../assets/Tech/python.svg";
import react from "../../assets/Tech/react.svg";

const techStack = [
  { name: "C#", icon: csharp },
  { name: "CSS3", icon: css },
  { name: ".NET", icon: dotnet },
  { name: "Figma", icon: figma },
  { name: "Git", icon: git },
  { name: "HTML5", icon: html },
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "Jira", icon: jira },
  { name: "MariaDB", icon: mariadb },
  { name: "SQL Server", icon: sqlserver },
  { name: "MySQL", icon: mysql },
  { name: "Node.js", icon: node },
  { name: "PHP", icon: php },
  { name: "Python", icon: python },
  { name: "React", icon: react },
];

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b0a6ecda-51f8-4579-ba01-21daf3add269");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <div className="tech-stack">
            <h1>Tech Stack</h1>
            <div className="tech-icons">
              {techStack.map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>

          <h1>Connect</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:liyanageachinthya@gamil.com">
                <i className="bx bxl-gmail"></i>
                <p>liyanageachinthya@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              <a
                href="https://github.com/Liyanage-Achinthya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github"></i>
                <p>@Liyanage-Achinthya</p>
              </a>
            </div>
            <div className="contact-detail">
              <a
                href="https://www.linkedin.com/in/liyanage-achinthya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
                <p>@liyanage-achinthya</p>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Write Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
