import React, { useState } from "react";
import "./Nav.scss";
import Navmenu from "../NavMenu/Navmenu";

const Nav = () => {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      <h2 className="nav__heading">Adam D'Costa</h2>
      {showNav && <Navmenu toggleNav={toggleNav}/>}
      <div className="nav__hamburger" onClick={toggleNav}>
        <div className="nav__hamburger--line nav__hamburger--top"></div>
        <div className="nav__hamburger--line nav__hamburger--middle"></div>
        <div className="nav__hamburger--line nav__hamburger--bottom"></div>
      </div>
    </nav>

  )
};

export default Nav;
