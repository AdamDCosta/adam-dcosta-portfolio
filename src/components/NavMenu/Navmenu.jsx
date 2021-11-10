import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";

const Navmenu = (props) => {
  const { toggleNav } = props;

  return (
    <div className="nav-mobile">
      <ul className="nav-mobile__links">
        <Link to="/adam-dcosta-portfolio" style={{ textDecoration: "none" }} onClick={toggleNav}>
          <li>Home</li>
        </Link>
        <Link
          to="/adam-dcosta-portfolio/projects"
          style={{ textDecoration: "none" }}
          onClick={toggleNav}
        >
          <li>Work</li>
        </Link>
        <Link
          to="/adam-dcosta-portfolio/skills"
          style={{ textDecoration: "none" }}
          onClick={toggleNav}
        >
          <li>Skills</li>
        </Link>
        <Link
          to="/adam-dcosta-portfolio/about"
          style={{ textDecoration: "none" }}
          onClick={toggleNav}
        >
          <li>About</li>
        </Link>
        <Link
          to="/adam-dcosta-portfolio/contact"
          style={{ textDecoration: "none" }}
          onClick={toggleNav}
        >
          <li>Contact</li>
        </Link>
      </ul>

      <div className="nav-mobile__cross" onClick={toggleNav}>
        <div className="nav-mobile__cross--line nav-mobile__cross--top"></div>
        <div className="nav-mobile__cross--line nav-mobile__cross--bottom"></div>
      </div>
    </div>
  );
};

export default Navmenu;
