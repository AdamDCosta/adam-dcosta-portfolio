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
          <a
            className="contact__links--button-link"
            href="https://github.com/AdamDCosta/adam-dcosta-portfolio/blob/main/src/assets/images/Adam%20D'Costa%20CV%20Nov%202021.pdf"
            style={{ textDecoration: "none" }}
          >
            <WorkButton viewButtonText="View My CV" />
          </a>
        </div>
        <p>adam.dcosta@googlemail.com</p>
      </div>
    </section>
  );
};

export default Contact;
