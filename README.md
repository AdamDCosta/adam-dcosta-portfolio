# My Web Development Portfolio

This is my portfolio of projects built during my time on the full-time *_nology* web development course. In week three of the course we were tasked with creating a portfolio to house our projects - which you can see [here](https://adamdcosta.github.io/My-portfolio/). After learning React I then decided to go back and rebuild my portfolio as I wanted to build on the skills picked up during the React segment of the course.

![Portfolio work page](https://github.com/AdamDCosta/adam-dcosta-portfolio/blob/main/src/assets/images/porfolio-work.png)

## Tech stack

- React
- Javascript
- Sass
- HTML

## About

I wanted to build on the idea of reusable components, reducing the amount of hard-coded pages and adding more dynamically created content than my previous portfolio. One way I did this was to create a data JS file - an array of objects - of my projects. This way I could pass the data as props, and create a function that mapped through the data and rendered and project 'card' for each one.

```
const FeaturedProjects = () => {
  
  const projectsListJSX = projects.map((project, index) => {
    return <ProjectCard key={project.title + (index + 1)} project={project} />;
  });

  return (
    <section className="featured-projects">
      <div className="featured-projects__intro">
        <h2 className="featured-projects__intro--title">Work</h2>
        <p className="featured-projects__intro--desc">
          Please see my recent projects below. These were all built during my time on the _nology web development course.
        </p>

      </div>
      {projectsListJSX}
    </section>
  );
};

export default FeaturedProjects;
```

I wanted each card's background to be a accent colour from the project itself. I did this by adding a colour to each project in the data file and used inline stylings to add the background colour (line 66):

```
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
```



