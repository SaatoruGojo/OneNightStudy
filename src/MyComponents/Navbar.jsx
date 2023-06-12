import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../MyComponents/style/Navbar.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars

import logoImage from "../Images/Logo.png"





function Header(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink
            className="navbar-brand d-flex justify-content-start me-auto"
            to="/"
          >
            {/* <img
              src={logoImage}
              alt="op"
              className="navbar-logo d-inline-block align-text-top"
            /> */}
            One Night Study
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/question"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                Question
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/notes"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                Notes
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                ContactUs
              </NavLink>
            </li>

            
          
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
