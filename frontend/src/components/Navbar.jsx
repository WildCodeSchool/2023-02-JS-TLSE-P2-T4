import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("navmenu");
  const [icon, setIcon] = useState("navtoggler");
  const navToggle = () => {
    if (active === "navmenu") {
      setActive("navmenu navactive");
    } else setActive("navmenu");

    // Icon Toggler
    if (icon === "navtoggler") {
      setIcon("navtoggler toggle");
    } else setIcon("navtoggler");
  };
  return (
    <nav className="nav">
      <div className="appLogo">
        <img src="/assets/logo.png" alt="logo Quizilla" />
      </div>
      <ul className={active} onClick={navToggle} aria-hidden>
        <li className="navitem">
          <Link to="/">Home</Link>
        </li>
        <li className="navitem">
          <Link to="/rules">Rules</Link>
        </li>
        <li className="navitem">
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
