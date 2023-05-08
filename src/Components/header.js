import React, { useState } from "react";
import "./CSS/header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  var ConditionalLink = isAuthenticated? '/PDC/PlacementMaterial' : '/PDC/login';
  const [showMediaIcons, setShowMediaIcons] = useState(false);
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
              <Link to="/PDC/about"><p className="hover">About Me</p></Link>
            </li>
            <li>
              <Link to="/PDC/team"><p className="hover">Work</p></Link>
            </li>
            <li>
              <Link to="/PDC/clubs"><p className="hover">Resume</p></Link>
            </li>
            <li>
              <Link to="/PDC/PastSecretaries"><p className="hover">Contact Me</p></Link>
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