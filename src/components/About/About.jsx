import React from 'react';
import "./About.scss";
import Headshot from "../../assets/images/Headshot.jpg";
import WorkButton from '../WorkButton/WorkButton';

const About = () => {


  return (
    <section className="about">
      <div className="about__intro">
        <h2 className="about__intro--title">About</h2>
        <p className="about__intro--hello">
          Hello! I'm Adam, and I'm a web developer.
        </p>
      </div>
      <div className="about__profile">
        <p className="about__profile--text about__profile--cell">
          After 8 years of working in bookselling, a desire to build on new skills learnt during lockdown lead me to the decision to retrain and start a new career by enrolling on the twelve-week software development course with _nology. The course gave me the confidence that I've made the right decision to change career; that I relish the prospect of building something that is used by other people and has an impact on their lives. I’m a quick learner with a customer-focused, flexible skillset developed in previous roles, as well as experience working in teams. I'm looking forward to starting my first role in tech.
        </p>
        <img src={Headshot} alt="profile" className="about__profile--photo about__profile--cell"/>
        <div className="about__profile--button about__profile--cell">
          <WorkButton viewButtonText="Contact Me" />
        </div>
      </div>

    </section>
  )
}

export default About
