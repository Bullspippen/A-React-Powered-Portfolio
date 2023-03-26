import React, { useState } from 'react';
import Project from './Project';

const Portfolio = () => {
  const [projects] = useState([
    {
      name: 'Project One',
      description: 'This is a description for Project One',
      link: 'https://example.com',
      repo: 'https://github.com/example/project-one',
      image: 'placeholder.jpg',
    },
    {
      name: 'Project Two',
      description: 'This is a description for Project Two',
      link: 'https://example.com',
      repo: 'https://github.com/example/project-two',
      image: 'placeholder.jpg',
    },
    {
      name: 'Project Three',
      description: 'This is a description for Project Three',
      link: 'https://example.com',
      repo: 'https://github.com/example/project-three',
      image: 'placeholder.jpg',
    },
    {
      name: 'Project Four',
      description: 'This is a description for Project Four',
      link: 'https://example.com',
      repo: 'https://github.com/example/project-four',
      image: 'placeholder.jpg',
    },
  ]);

  return (
    <div className="flex-row">
      {projects.map((project, i) => (
        <Project project={project} key={'project' + i} />
      ))}
    </div>
  );
};

export default Portfolio;
