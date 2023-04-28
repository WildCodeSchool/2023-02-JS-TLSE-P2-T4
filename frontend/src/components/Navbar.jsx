import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("navMenu");
  const [icon, setIcon] = useState("navToggler");
  const navToggle = () => {
    if (active === "navMenu") {
      setActive("navMenu navActive");
    } else setActive("navMenu");

    // Icon Toggler
    if (icon === "navToggler") {
      setIcon("navToggler toggle");
    } else setIcon("navToggler");
  };
  return (
    <nav className="nav">
      <div className="appLogo">
        <img src="/assets/logo.png" alt="logo Quizilla" />
      </div>
      <ul className={active} onClick={navToggle} aria-hidden>
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/rules">Rules</Link>
        </li>
        <li className="navItem">
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
