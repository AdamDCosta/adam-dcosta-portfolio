import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <h2 className="nav__heading">Adam D'Costa</h2>
      <ul className="nav__links">
        <li>
          Home
        </li>
        <li>
          Work
        </li>
        <li>
          About
        </li>
        Contact
      </ul>
      <div className="nav__hamburger">
        <div className="nav__hamburger--line nav__hamburger--top"></div>
        <div className="nav__hamburger--line nav__hamburger--middle"></div>
        <div className="nav__hamburger--line nav__hamburger--bottom"></div>
      </div>
    </nav>

  )
};

export default Nav;
