import React from 'react'
import "./ProjectCard.scss"
import CodeButton from '../CodeButton/CodeButton';

const ProjectCard = (props) => {

  const { project } = props;

  const background = project.color;

  const techStack = project.techStack.map(tech => {
    return <p className="project-card__tech-stack--code">{tech}</p>
;  })

  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <div className="project-card__buttons">
        <CodeButton buttonText="Preview" buttonLink={project.preview}/>
        <CodeButton buttonText="Code" buttonLink={project.code}/>
      </div>
      <div className="project-card__banner" style={{backgroundColor: background}}>
        <img className="project-card__banner--img" src={project.image} alt={project.name} />
        <p className="project-card__banner--desc">{project.description}</p>
      </div>
      <div className="project-card__tech-stack">
        {techStack}
      </div>
    </article>
  )
}

export default ProjectCard
