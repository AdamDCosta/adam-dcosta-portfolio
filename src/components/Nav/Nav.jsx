import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Navmenu from "../NavMenu/Navmenu";
import DesktopNav from "../DesktopNav/DesktopNav";

const Nav = () => {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      <Link to="/adam-dcosta-portfolio" style={{textDecoration: "none"}}>
        <h2 className="nav__heading">Adam D'Costa</h2>
      </Link>
      {showNav && <Navmenu toggleNav={toggleNav}/>}
      <DesktopNav />
      <div className="nav__hamburger" onClick={toggleNav}>
        <div className="nav__hamburger--line nav__hamburger--top"></div>
        <div className="nav__hamburger--line nav__hamburger--middle"></div>
        <div className="nav__hamburger--line nav__hamburger--bottom"></div>
      </div>
    </nav>

  )
};

export default Nav;
