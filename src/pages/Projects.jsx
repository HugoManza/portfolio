import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectSelect from '../components/ProjectSelect'

import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'


const Projects = () => {
    return (
        <div className="container">
            <Header />
            <div className="projectsPage">
                <section className="topArea">
                    <h1>All of our best work</h1>
                    <h3>Right here for you</h3>
                </section>
                <ProjectSelect />
            </div>
            <Footer />
        </div>
    )
}

export default Projects