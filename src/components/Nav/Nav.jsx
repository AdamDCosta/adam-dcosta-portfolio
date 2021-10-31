import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="nav__heading">Adam D'Costa</h1>
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
    </nav>

  )
};

export default Nav;
