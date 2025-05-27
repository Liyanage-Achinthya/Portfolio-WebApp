import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-top-right">
          <a href="mailto:liyanageachinthya@gmail.com">
            liyanageachinthya@gmail.com
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Designed & Developed by</p>
          <h2>Achinthya Liyanage</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
