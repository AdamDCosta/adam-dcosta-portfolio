import React from "react";
import "./Contact.scss";
import LinkedIn from "../../assets/images/icons/LinkedIn.svg";
import Github from "../../assets/images/icons/Github.svg";
import Email from "../../assets/images/icons/Email.svg";
import WorkButton from "../WorkButton/WorkButton";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__header">
        <h2 className="contact__header--title">Contact</h2>
      </div>
      <div className="contact__links">
        <a href="https://www.linkedin.com/in/adamdcosta/">
          <img src={LinkedIn} alt="LinkedIn" className="contact__links--icon" />
        </a>
        <a href="https://github.com/AdamDCosta">
          <img src={Github} alt="Github" className="contact__links--icon" />
        </a>
        <a href="mailto:adam.dcosta@googlemail.com">
          <img src={Email} alt="Email" className="contact__links--icon" />
        </a>
        <div className="contact__links--button">
          <WorkButton viewButtonText="View My CV"/>
        </div>
        <p>adam.dcosta@googlemail.com</p>
      </div>
    </section>
  );
};

export default Contact;
