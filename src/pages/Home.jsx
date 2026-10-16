import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="topSection"></div>
      
      <main className='Projects'>
        <div className="ProjectsFrame">
          
          {/* Recorremos todos los proyectos y creamos un Link por cada uno */}
          {projectsData.map((project, index) => (
            <Link
              key={project.id} // React necesita un key único al usar map()
              to={`/proyecto/${project.id}`}
              className={`ProjectClick div${index + 1}`} // Genera div1, div2, div3...
              style={{
                backgroundImage: `url("${project.gridImage}")`, // Usa la imagen del data
            
              }}
              
            >
              <h2>{project.title}</h2>
              <h4>{project.subtitle}</h4>
            </Link>
          ))}

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App