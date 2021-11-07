import React from "react";
import "./Skills.scss";
import HTML from "../../assets/images/icons/HTML.svg";
import CSS from "../../assets/images/icons/CSS.svg";
import Sass from "../../assets/images/icons/Sass.svg";
import JS from "../../assets/images/icons/JS.svg";
import ReactIcon from "../../assets/images/icons/React.svg";
import Java from "../../assets/images/icons/Java.svg";
import Github from "../../assets/images/icons/Github.svg";
import Figma from "../../assets/images/icons/Figma.svg";
import Postman from "../../assets/images/icons/Postman.svg";
import Trello from "../../assets/images/icons/Trello.svg";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__intro">
        <h2 className="skills__intro--title">Skills</h2>
        <p className="skills__intro--info">
          The _nology course I recently completed primarily focused on
          Javascript, React and Java. Below is the full tech stack and
          fundamental skills I've been learning and working in.
        </p>
      </div>
      <div className="skills__stack">
        <div className="skills__stack--cell">
          <img src={HTML} alt="HTML" />
        </div>
        <div className="skills__stack--cell">
          <img src={CSS} alt="CSS" />
        </div>
        <div className="skills__stack--cell">
          <img src={Sass} alt="Sass" />
        </div>
        <div className="skills__stack--cell">
          <img src={JS} alt="Javascript" />
        </div>
        <div className="skills__stack--cell">
          <img src={ReactIcon} alt="React" />
        </div>
        <div className="skills__stack--cell">
          <img src={Java} alt="Java" />
        </div>
        <div className="skills__stack--cell">
          <img src={Github} alt="Github" />
        </div>
        <div className="skills__stack--cell">
          <img src={Figma} alt="Figma" />
        </div>
        <div className="skills__stack--cell">
          <img src={Postman} alt="Postman" />
        </div>
        <div className="skills__stack--cell">
          <img src={Trello} alt="Trello" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
