import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className="appLogo">
        <img src="public/assets/logo.png" alt="logo Quizilla" />
      </div>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/rules">Rules</Link>
        </li>
        <li className="nav__item">
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
      <button type="button" onClick={navToggle} className={icon}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </button>
    </nav>
  );
}

export default Navbar;
