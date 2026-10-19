import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import ProjectSelect from '../components/ProjectSelect'

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="topSection">

      </div>

      <ProjectSelect />

      <Footer />
    </div>
  )
}

export default App