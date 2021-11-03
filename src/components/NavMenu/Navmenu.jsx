import React from 'react'
import { Link } from "react-router-dom";
import "./NavMenu.scss";

const Navmenu = (props) => {

  const { toggleNav } = props;
  
  return (
    <div className="nav-mobile">
      <ul className="nav-mobile__links" >
        <Link to="/" style={{textDecoration: "none"}}>
          <li>
            Home
          </li>
        </Link>
        <Link to="/adam-dcosta-portfolio/projects" style={{textDecoration: "none"}}>
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

      <div className="nav-mobile__cross" onClick={toggleNav}>
        <div className="nav-mobile__cross--line nav-mobile__cross--top"></div>
        <div className="nav-mobile__cross--line nav-mobile__cross--bottom"></div>
      </div>

    </div>

    
  )
}

export default Navmenu
