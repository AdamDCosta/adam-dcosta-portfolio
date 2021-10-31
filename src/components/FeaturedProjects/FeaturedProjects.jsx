import React from "react";
import "./FeaturedProjects.scss";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const FeaturedProjects = () => {

  console.log(projects);

  const projectsListJSX = projects.map((project, index) => {
    return <ProjectCard key={project.title + (index + 1)} project={project} />;
  });

  return (
    <section className="featured-projects">
      <h2 className="featured-projects__title">Work</h2>
      <p className="featured-projects__intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error
        fuga quas.
      </p>
      {projectsListJSX}
    </section>
  );
};

export default FeaturedProjects;
