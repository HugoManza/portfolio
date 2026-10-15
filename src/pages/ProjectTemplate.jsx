import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MoreProjects from '../components/MoreProjects'
import Results from '../components/Results'
import { projectsData } from '../data/projectsData'
import ProjectGallery from '../components/ProjectGallery.jsx'



const ProjectTemplate = () => {

    const { id } = useParams();

    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/" />
    }
    return (


        <div className="container">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right,chevron_left" />
            <link rel="stylesheet" />
            <Header />

            <div className="Project" style={{ backgroundColor: project.bgColor, color: project.textColor }}>
                <div className="topFramedContent">
                    <video autoPlay loop muted>
                        <source src={project.videoPromo} type="video/mp4" />
                    </video>
                </div>


                <div className="frameWidth">
                    <div className="project">
                        <section className="introProject">
                            <div className="mainTitles">

                                <h1 className="projectTitle">{project.title}</h1>
                                <h4 className="projectSubtitle">{project.subtitle}</h4>
                            </div>

                            <div className="projectDescription">
                                <div className="projectSkills">
                                    {project.skills.map((skill, index) => (
                                        <h5 key={index} className="skills">{skill}</h5>
                                    ))}
                                </div>
                                <p className="projectSummary">{project.summary}</p>
                            </div>
                        </section>
                        <section className="videoSection">

                            <video autoPlay loop muted>
                                <source src={project.videoPromo} type="video/mp4" />
                            </video>

                        </section>
                        <section className="objective">
                            <div className="textsObj">
                                <p className="objectiveText">Objective</p>

                                <h1 className="proyectObjective">{project.objective}</h1>
                            </div>
                        </section>
                        <section className="challenges">
                            <div className="quickTag qtChallenge">
                                <h3 className="challangeSub">Challenge</h3>
                                <p className="challangeExplained">{project.challenge}</p>
                            </div>
                            <div className="challangeImages">
                                <img src={project.images.challenge1} alt="Challenge 1" />
                                <img src={project.images.challenge2} alt="Challenge 2" />
                            </div>
                        </section>
                        <section className="solutions">
                            <div className="quickTag qtSolution">
                                <h3 className="solutionSub">Solution</h3>
                                <p className="solutionExplained">{project.solution}</p>
                            </div>
                            <div className="solutionImages">
                                <img className="img3" src={project.images.solution1} alt={`${project.title} Solution 1`} />
                                <img className="img4" src={project.images.solution2} alt={`${project.title} Solution 2`} />
                                <img className="img5" src={project.images.solution3} alt={`${project.title} Solution 3`} />
                            </div>
                        </section>
                        <section className="results">
                            <div className="quickTag qtResults">
                                <h3 className="resultsSub">Results</h3>
                                <p className="resultsExplained">{project.results}</p>
                            </div>
                            <ProjectGallery />
                        </section>

                    </div>
                </div>
            </div>
            <MoreProjects />
            <Footer />
        </div>
    )
}

export default ProjectTemplate