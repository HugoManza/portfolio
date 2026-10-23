import React from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const ProjectSelect = () => {
  return (
    <main className='Projects'>
      <div className="ProjectsFrame">
        {projectsData.map((project, index) => (
          <Link
            key={project.id}
            to={`/proyecto/${project.id}`}
            className={`ProjectClick div${index + 1}`}
          >
            <div className="imageContainer" style={{
              backgroundImage: `url("${project.gridImage}")`,
            }}></div>

            <div className="textContainer">
              <h2>{project.title}</h2>
              <h5>{project.subtitle}</h5>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default ProjectSelect