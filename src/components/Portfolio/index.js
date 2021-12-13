import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'sweeper',
      description: 'SQL/Sequelize/Handlebars/Materialize',
      link: "https://sweeper-chore-chart.herokuapp.com/",
      repo: "https://github.com/DerTodd/Sweepers_Project_Two"
    },
    {
      name: 'in-the-loop',
      description: 'Apollo/GraphQL/MongoDB/MUI/React',
      link: "https://intheloop-app.herokuapp.com/",
      repo: "https://github.com/Xevshak/In-The-Loop"
    },
    {
      name: 'pokequiz',
      description: 'HTML/CSS/JavaScript',
      link: "https://xevshak.github.io/PokeQuiz/",
      repo: "https://github.com/Xevshak/PokeQuiz"
    },
    {
      name: 'led-wall',
      description: 'Placeholder',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'Placeholder',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
