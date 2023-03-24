import React, { useState } from 'react';

const Resume = () => {
  const [resume] = useState([]);

  return (
    <div>
      {resume.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Resume;

// return (
//   <section>
//     <h2>Work Experience</h2>
//     <div>
//       <h3>Job 1</h3>
//       <p>Timelinet</p>
//       <ul>
//         <li>Developed and maintained web applications using React and Node.js</li>
//         <li>Collaborated with a team of designers and developers to create engaging user experiences</li>
//         <li>Implemented automated testing using Jest and Enzyme</li>
//       </ul>
//     </div>

//     <h2>Education</h2>
//     <div>
//       <h3>Schoool</h3>
//       <p>University of ABC</p>
//       <p>Graduated May 2019</p>
//     </div>

//     <h2>Skills</h2>
//     <div>
//       <ul>
//         <li>React</li>
//         <li>Node.js</li>
//         <li>JavaScript</li>
//         <li>HTML</li>
//         <li>CSS</li>
//       </ul>
//     </div>
//   </section>
// );
