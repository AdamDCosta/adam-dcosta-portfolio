import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import WorkButton from "../WorkButton/WorkButton";
import LinkedIn from "../../assets/images/icons/LinkedIn.svg";
import Github from "../../assets/images/icons/Github.svg";
import CV from "../../assets/images/icons/CV.svg";
import MyCV from "../../assets/images/Adam D'Costa CV.pdf";

const Header = () => {

  return (
    <header className="header">
      <h1 className="header__title">
        Hello! <br />
        I'm
        <span className="header__title--name"> Adam</span>
      </h1>
      <p className="header__desc">
        Hi, I’m Adam and I’m a junior full stack developer. Please see my recent
        projects below.
      </p>
      <Link
        to="/adam-dcosta-portfolio/projects"
        style={{ textDecoration: "none" }}
      >
        <div className="header__button">
          <WorkButton viewButtonText="View My Work" />
        </div>
      </Link>
      <div className="header__icons">
        <a href="https://www.linkedin.com/in/adamdcosta/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="https://github.com/AdamDCosta">
          <img src={Github} alt="Github" />
        </a>
        <a href={MyCV} target="_blank" rel="noreferrer">
          <img src={CV} alt="CV" />
        </a>
      </div>
    </header>
  );
};

export default Header;
