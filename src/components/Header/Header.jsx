import React from "react";
import "./Header.scss";
import WorkButton from "../WorkButton/WorkButton";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        Hello! <br />
        I'm
        <span className="header__title--name"> Adam</span>
      </h1>
      <p className="header__desc">
        Hi, I’m Adam and I’m currently undergoing a 12-week intensive course
        with _nology in order to become a web developer in the near future.
        Please see my recent projects below.
      </p>
      <div className="header__button">
        <WorkButton/> 
      </div>
    </header>
  );
};

export default Header;
