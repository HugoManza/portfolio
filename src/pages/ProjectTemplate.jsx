import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MoreProjects from '../components/MoreProjects'

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

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right,chevron_left,menu" />
            <link rel="stylesheet" />
            <Header />

            <div className="Project" >
                <div className="topFramedContent">
                    {project.videoPromo ? (
                        // Si hay un videoPromo, renderiza el video
                        <video className='topVideo' key={project.id} autoPlay loop muted>
                            <source src={project.videoPromo} type="video/mp4" />
                        </video>
                    ) : (
                        // Si NO hay videoPromo (es vacío o null), renderiza la imagen
                        <img
                            src={project.images.galleryCover}
                            alt={`${project.title} Cover`}
                            key={project.id}
                            className="topImageContent"
                        />
                    )}
                </div>

                <div className="frameWidth">

                    <section className="introProject">
                        <div className="introTexts">
                            <div className="skillsFrame">
                                {project.skills.map((skill, index) => (
                                    <h5 key={index} className="skills" style={{ backgroundColor: project.projectColor }}>{skill}</h5>
                                ))}
                            </div>
                            <div className="titleFrame">

                                <h1 className="projectTitle">{project.title}</h1>
                                <h3 className="projectSubtitle">{project.subtitle}</h3>
                            </div>
                            <div className="summaryFrame">

                                <p className="projectSummary">{project.summary}</p>

                            </div>
                        </div>
                        <div className="imageContainer">
                            <img src={project.images.topImage} alt={project.title} />

                        </div>


                    </section>

                    <section className="projectDark" style={{ borderColor: project.projectColor }}>

                        <div className="objectives">
                            <div className="objContainer">
                                <h2 className="proyectObjective">{project.objective}</h2>
                            </div>
                            <div className="roundShape" style={{ backgroundColor: project.projectColor }}></div>
                            <h4 className="objectiveHalf">{project.objectiveHalf} </h4>
                        </div>

                        <ProjectGallery ></ProjectGallery>

                        <div className="galleryGrid">
                            <div className="imagesFramed">
                                <div className="imageCont"><img src={project.images.grid1} alt="" /></div>
                                <div className="imageCont"><img src={project.images.grid2} alt="" /></div>
                            </div>
                            <div className="imagesFramed">
                                <div className="imageCont"><img src={project.images.grid3} alt="" /></div>
                                <div className="imageCont"><img src={project.images.grid4} alt="" /></div>
                            </div>
                            <div className="imagesFramed">
                                <div className="imageCont"><img src={project.images.grid5} alt="" /></div>
                                <div className="imageCont"><img src={project.images.grid6} alt="" /></div>
                            </div>

                            <div className="galleryExplained">
                                <div className="explainedText">
                                    <h2>{project.remark}</h2>
                                    <p>{project.remarkText} </p>
                                </div>
                                <div className="imageCont"><img src={project.images.grid7} alt="" /></div>

                            </div>
                        </div>
                    </section>

                    <section className="takeaways" style={{
                        backgroundImage: `url("${project.images.topImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} >
                        <div className="takeawaysFrame">
                            <div className="takeawayBox">
                                <h3>{project.takeaway1}</h3>
                                <h4>{project.takeawayText1}</h4>
                            </div>
                            <div className="takeawayBox">
                                <h3>{project.takeaway2}</h3>
                                <h4>{project.takeawayText2}</h4>
                            </div>
                            <div className="takeawayBox">
                                <h3>{project.takeaway3}</h3>
                                <h4>{project.takeawayText3}</h4>
                            </div>
                        </div>
                    </section>







                </div>

            </div>
            <MoreProjects />
            <Footer />
        </div>
    )
}

export default ProjectTemplate