import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import ProjectSelect from '../components/ProjectSelect'
import TopFinal from '../components/TopFinal'
import HomeMore from '../components/HomeMore'
const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="topFinal">
        <TopFinal />
      </div>



      <HomeMore />

      <ProjectSelect />



      <Footer />
    </div>
  )
}

export default App