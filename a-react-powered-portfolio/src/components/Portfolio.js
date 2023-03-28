import React, { useState } from 'react';
import Project from './Project';

// This component renders the Portfolio page and its content
const Portfolio = () => {
   // Create a state variable for the projects array and assign it an initial value of an array of objects
  const [projects] = useState([
    {
      name: 'My Career(r) Life Cycle Management System',
      description: 'A Personal Development Plan Platform that helps individuals manage their career goals and stay up-to-date with the latest industry trends and technologies.',
      link: 'https://my-career.herokuapp.com/login',
      repo: 'https://github.com/Bullspippen/my-career',
      image: '<img src="https://practicebusiness.co.uk/wp-content/uploads/2022/11/iStock-1399506394-678x381.jpg">',
    },
    {
      name: 'We the North',
      description: 'An NBA Stats, Recent & Future Games and Ticket Purchasing Appication',
      link: 'https://bullspippen.github.io/We-The-North/',
      repo: 'https://github.com/Bullspippen/We-The-North',
      image: '<img src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-01/fvv_s4vuakyp6aruzw63pq5t59ie.png?itok=DZxVKvBs" alt="eLearningIndustry" style="width:250px;height:250px;">',
  },
    {
      name: 'Progressive Web Applications [PWA] - Text-Editor',
      description: 'A Versatile Progressive Web Application for creating notes and code snippets that can be used offline and has data persistence techniques.',
      link: 'https://evening-wave-94628.herokuapp.com/',
      repo: 'https://github.com/Bullspippen/Progressive-Web-Applications-PWA-Text-Editor',
      image: '<img src="https://www.volumetree.com/wp-content/uploads/2020/01/Progressive-Web-Apps.png">',
    },
    {
      name: 'SQL Employee Tracker',
      description: 'A Command-line Application that helps business owners manage their company by viewing and managing the departments, roles, and employees in their company.',
      link: 'https://drive.google.com/file/d/1xjvX8oLKo-1-ksgdbmJZyfviV3EZbBJ-/view',
      repo: 'https://github.com/Bullspippen/SQL-Employee-Tracker',
      image: '<img src="https://www.softactivity.com/wp-content/uploads/tracking-employee-computer-activity-1600.jpg">',
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
