import React from 'react'

const Project = ({project}) => {
    const{ name, description, link, repo } = project;
  return (
    <div className="project" key={name}>
     <img src={require(`../assets/images/${name}.jpg`).default} alt={name} className="project-bg" /> 
     {/* within src folder create assessts, within create images, within images save project images with the same name that are in the project objects */}
        <div className="project-content">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">View Project</a>
            <a href={repo} target="_blank" rel="noreferrer">View Repository</a>
        </div>
    </div>
  )
}

export default Project
