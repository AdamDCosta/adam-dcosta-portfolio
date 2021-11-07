import React from "react";
import { Link } from "react-router-dom";
import "./DesktopNav.scss";

const DesktopNav = () => {
  return (
    <div className="nav-desktop">
      <ul className="nav-desktop__links">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link
          to="/adam-dcosta-portfolio/projects"
          style={{ textDecoration: "none" }}
        >
          <li>Work</li>
        </Link>
        <Link
          to="/adam-dcosta-portfolio/about"
          style={{ textDecoration: "none" }}
        >
          <li>About</li>
        </Link>
        <Link
          to="/adam-dcosta-portfolio/contact"
          style={{ textDecoration: "none" }}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default DesktopNav;
