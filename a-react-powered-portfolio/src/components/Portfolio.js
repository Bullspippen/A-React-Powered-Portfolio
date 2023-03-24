import React, {useState} from 'react'
import Project from './Project'

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Note Taker',
            description: 'An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.',
            link: "github.com",
            repo: "github.com",
        },
        {
            name: 'Note Taker',
            description: 'An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.',
            link: "github.com",
            repo: "github.com",
        },
        {
            name: 'Note Taker',
            description: 'An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.',
            link: "github.com",
            repo: "github.com",
        },
        {
            name: 'Note Taker',
            description: 'An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.',
            link: "github.com",
            repo: "github.com",
        },
    ]);
return (
    <div className="flex-row">
      {projects.map((project, i) => (
            <Project
                project={project}
                key={"project" + i}
            />
        ))}
    </div>
  )
}

export default Portfolio

// const Portfolio = () => {
//     const [projects] = useState([
//         {
//             name: 'Note Taker',
//             description: 'An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.',
//             link: "https://note-taker-app-tt.herokuapp.com/",
//             repo: "https://github.com/example/note-taker",
//         },
//         {
//             name: 'Weather Dashboard',
//             description: 'An application that allows the user to search for a city and receive current weather and a 5-day forecast. Uses the OpenWeather API to retrieve data.',
//             link: "https://example.github.io/weather-dashboard/",
//             repo: "https://github.com/example/weather-dashboard",
//         },
//         {
//             name: 'Employee Directory',
//             description: 'An employee directory application that allows the user to search for and sort employees. Uses the Random User API to retrieve employee data.',
//             link: "https://example.github.io/employee-directory/",
//             repo: "https://github.com/example/employee-directory",
//         },
//         {
//             name: 'Tech Blog',
//             description: 'A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. Uses Handlebars.js, Sequelize, and the MVC paradigm.',
//             link: "https://example-tech-blog.herokuapp.com/",
//             repo: "https://github.com/example/tech-blog",
//         },
//     ]);
//     return (
//         <div className="flex-row">
//             {projects.map((project, i) => (
//                 <Project
//                     project={project}
//                     key={"project" + i}
//                 />
//             ))}
//         </div>
//     )
// }

// export default Portfolio