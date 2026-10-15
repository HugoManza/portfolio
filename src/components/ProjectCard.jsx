// src/components/ProjectCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, gridClass, url }) => {
  return (
    <Link to={url} className={`proyectClick ${gridClass}`}>
      {title}
      <p>Hola</p>
    </Link>
  )
}

export default ProjectCard