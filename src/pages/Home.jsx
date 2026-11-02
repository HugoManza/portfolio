import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import ProjectSelect from '../components/ProjectSelect'
import TemporaryTop from '../components/TemporaryTop'
const App = () => {
  return (
    <div className="container">
      <Header />
      <TemporaryTop />

      <ProjectSelect />

      <Footer />
    </div>
  )
}

export default App