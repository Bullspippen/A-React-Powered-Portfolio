import React, { useState } from 'react';
import Project from './Project';

// This component renders the Portfolio page and its content
const Portfolio = () => {
   // Create a state variable for the projects array and assign it an initial value of an array of objects
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

  // Render the Portfolio page and its content using the projects array
  return (
    <div className="flex-row">
      {/* // Render the Project component for each project in the projects array and pass it the project object */}
      {projects.map((project, i) => (
        <Project project={project} key={'project' + i} />
      ))}
    </div>
  );
};

export default Portfolio;
