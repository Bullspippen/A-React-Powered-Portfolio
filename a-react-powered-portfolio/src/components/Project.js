import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  if (!project) {
    return <div>Project object not found.</div>;
  }

  const { name, description, link, repo, image } = project;

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

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
