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

