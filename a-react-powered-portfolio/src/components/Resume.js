import React from 'react';

const Resume = () => {
  const resume = [
    {
      id: 1,
      type: 'work',
      title: 'Job 1',
      employer: 'Employer 1',
      date: 'MM YYYY - Present',
      bullets: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with a team of designers and developers to create engaging user experiences',
        'Implemented automated testing using Jest and Enzyme',
      ],
    },
    {
      id: 2,
      type: 'education',
      title: 'School',
      institution: 'University of ABC',
      date: 'Graduated MM YYYY',
      bullets: [],
    },
    {
      id: 3,
      type: 'skills',
      title: 'Skills',
      bullets: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  return (
    <section>
      <h2>Work Experience</h2>
      {resume.filter((item) => item.type === 'work').map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.employer}</p>
          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Education</h2>
      {resume.filter((item) => item.type === 'education').map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.institution}</p>
          <p>{item.date}</p>
        </div>
      ))}

      <h2>Skills</h2>
      {resume.filter((item) => item.type === 'skills').map((item) => (
        <div key={item.id}>
          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Resume;
