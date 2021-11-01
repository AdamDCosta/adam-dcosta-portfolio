import React from 'react'
import "./ProjectCard.scss"

const ProjectCard = (props) => {

  const { project } = props;

  const background = project.color;

  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <p>preview</p>
      <p>code</p>
      <div className="project-card__banner" style={{backgroundColor: background}}>
        <p className="project-card__banner--desc">{project.description}</p>
        <img className="project-card__banner--img" src={project.image} alt={project.name} />
      </div>
      <p>Tech Stack</p>
    </article>
  )
}

export default ProjectCard
