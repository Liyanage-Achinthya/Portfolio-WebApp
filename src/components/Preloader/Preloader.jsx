import React from "react";
import "./Preloader.css";
import logo from "../../assets/logo.svg";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="Logo" className="preloader-logo" />
    </div>
  );
};

export default Preloader;
