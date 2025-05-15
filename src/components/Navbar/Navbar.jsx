import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo" data-aos="fade-right">
        <img src={logo} alt="logo" />
      </div>

      {!menuOpen && (
        <img
          src={menu_open}
          onClick={toggleMenu}
          alt="menu open"
          className="nav-mob-open"
        />
      )}

      <ul
        ref={menuRef}
        className={`nav-menu ${menuOpen ? "show" : ""}`}
        data-aos="zoom-in"
      >
        <img
          src={menu_close}
          onClick={toggleMenu}
          alt="menu close"
          className="nav-mob-close"
        />
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={toggleMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#edu"
            className={activeSection === "edu" ? "active" : ""}
            onClick={toggleMenu}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={toggleMenu}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={toggleMenu}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-connect" data-aos="fade-left">
        <a href="/cv.pdf" download>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
