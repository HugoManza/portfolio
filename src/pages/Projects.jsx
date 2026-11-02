import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectSelect from '../components/ProjectSelect'

import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'


const Projects = () => {
    return (
        <div className="container contProjects">
            <Header />


            <ProjectSelect />

            <Footer />
        </div>
    )
}

export default Projects