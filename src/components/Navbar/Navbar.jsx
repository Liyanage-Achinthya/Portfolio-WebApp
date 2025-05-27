import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const sections = [
  { id: "about", label: "About" },
  { id: "edu", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
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

      <ul ref={menuRef} className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <img
          src={menu_close}
          onClick={toggleMenu}
          alt="menu close"
          className="nav-mob-close"
        />

        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={toggleMenu}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <a href="/CV.pdf" download>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
