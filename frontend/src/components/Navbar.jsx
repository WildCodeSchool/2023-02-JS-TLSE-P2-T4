import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar({ navIsVisible }) {
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
        <Link to="/" reloadDocument>
          <img src="/assets/logo.png" alt="logo Quizilla" />
        </Link>
      </div>
      {navIsVisible ? (
        <>
          <ul className={active} onClick={navToggle} aria-hidden>
            <li className="navItem">
              <Link to="/" reloadDocument>
                Home
              </Link>
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
        </>
      ) : (
        <Link to="/" className="exit" reloadDocument>
          <img src="./assets/Exit_Icon.svg" alt="icon" />
        </Link>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  navIsVisible: PropTypes.bool,
};
Navbar.defaultProps = {
  navIsVisible: false,
};

export default Navbar;
