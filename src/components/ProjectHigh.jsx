import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const ProjectHigh = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Detecta cuando la sección entra en pantalla
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta para que solo se anime la primera vez
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highProjects = projectsData.filter((project) => project.high);

  return (
    <main className="ProjectsHigh" ref={sectionRef}>
      <div className="topText">
        <h2>My Best Projects</h2>
        <h4>Explore my most recent projects</h4>
      </div>
      <div className={`ProjectsFrame ${isVisible ? 'visible' : ''}`}>
        {highProjects.map((project, index) => (
          <Link
            key={project.id}
            to={`/proyecto/${project.id}`}
            className={`ProjectClick div${index + 1}`}
            style={{
              // Multiplicamos el índice por 0.15s para crear el efecto cascada
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div
              className="imageContainer"
              style={{
                backgroundImage: `url("${project.highImage}")`,
              }}
            ></div>

            <div className="textContainer">
              <h2>{project.title}</h2>
              <h5>{project.subtitle}</h5>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProjectHigh