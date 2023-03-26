import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  if (!project) {
    return <div>Project object not found.</div>;
  }

  // Destructure the project object into its properties and assign them to variables
  const { name, description, link, repo, image } = project;

  // If any of the required properties are missing, return an error message
  if (!name || !description || !link || !repo || !image) {
    return <div>Project object is missing required properties.</div>;
  }

  return (
    <div className="project" key={name}>
      <img src={require(`../assets/images/${image}`).default} alt={name} className="project-bg" />
      <div className="project-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
};

// PropTypes validation for this component (Project) and its props
Project.propTypes = {
  project: PropTypes.shape({
    // name is a required string property of the project object
    name: PropTypes.string.isRequired,
    // description is a required string property of the project object
    description: PropTypes.string.isRequired,
    // link is a required string property of the project object
    link: PropTypes.string.isRequired,
    // repo is a required string property of the project object
    repo: PropTypes.string.isRequired,
    // image is a required string property of the project object
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
