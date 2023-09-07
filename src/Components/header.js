import React, { useState } from "react";
import "./CSS/header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  var ConditionalLink = isAuthenticated? '/PDC/PlacementMaterial' : '/PDC/login';
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const handleAboutClick = () => {
    const element = document.getElementsByClassName('About')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleWorkClick = () => {
    const element = document.getElementsByClassName('websites')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleContactClick = () => {
    const element = document.getElementsByClassName('Contact-me')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>SHRIYASH</span>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          >
          <ul>
            <li>
             <p className="hover" onClick={handleAboutClick}>About Me</p>
            </li>
            <li>
              <p className="hover" onClick={handleWorkClick}>Work</p>
            </li>
            <li>
            <a href="https://drive.google.com/file/d/1liQKWblbIX3WPGwSwZJ-e30Kn0W6PeM6/view?usp=sharing" target="_blank"><p className="hover">Resume</p></a>
            </li>
            <li>
              <p className="hover" onClick={handleContactClick}>Contact Me</p>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
        </div>
      </nav>
    </>
  );
};

export default Header;