import React from "react";
import { Link } from "react-router-dom";
import "./DesktopNav.scss";

const DesktopNav = () => {

  

  return (
    <div className="nav-desktop">
      <ul className="nav-desktop__links" >
        <Link to="/" style={{textDecoration: "none"}} >
          <li>
            Home
          </li>
        </Link>
        <Link to="/adam-dcosta-portfolio/projects" style={{textDecoration: "none"}} >
          <li>
            Work
          </li>
        </Link>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
