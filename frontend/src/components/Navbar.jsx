import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Divide as Hamburger } from "hamburger-react";

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
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              <nav className="menuPhone">
                <ul className="linksPhone">
                  <li className="linkPhone">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navbarLink">
                    <Link to="/rules">Rules</Link>
                  </li>
                  <li className="linkPhone">
                    <Link to="/about-us">About Us</Link>
                  </li>
                </ul>
              </nav>;
            } else {
              // close a menu
              // eslint-disable-next-line no-restricted-syntax
              console.log("menu ferme");
            }
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
