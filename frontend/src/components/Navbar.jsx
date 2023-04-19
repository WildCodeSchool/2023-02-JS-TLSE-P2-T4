import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navigator">
      <div className="app-logo">
        <img src="src/assets/logo.png" alt="logo Quizilla" />
      </div>
      <nav className="show-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
