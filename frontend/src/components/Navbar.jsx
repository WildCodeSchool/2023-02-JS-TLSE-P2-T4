import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navigator">
      <div className="appLogo">
        <img src="src/assets/logo.png" alt="logo Quizilla" />
      </div>
      <nav className="showNav">
        <ul className="navbarLinks">
          <li className="navbarLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navbarLink">
            <Link to="/rules">Rules</Link>
          </li>
          <li className="navbarLink">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      <div />
      <div className="menu">
        <nav className="menuPhone">
          <ul className="linksPhone">
            <li className="navbarLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navbarLink">
              <Link to="/rules">Rules</Link>
            </li>
            <li className="navbarLink">
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
