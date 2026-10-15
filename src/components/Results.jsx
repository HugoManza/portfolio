    import React from 'react'
    import { projectsData } from '../data/projectsData'


const Results = () => {
    return (
        <section className="results">
            <div className="quickTag qtResults">
                <h3 className="resultsSub">Results</h3>
                <p className="resultsExplained">{project.results}</p>
            </div>
            <div className="projectGallery">
                <div className="photoCarusell" style={{ color: project.textColor }}>
                    <button className="controlButton back"> <span class="material-symbols-outlined">
                        chevron_left
                    </span> </button>
                    <a target="_blank" href={project.images.galleryCover} className="galleryPhoto active">
                        <img src={project.images.galleryCover} alt={`${project.title} Gallery Cover`} />
                    </a>
                    <button className="controlButton next"> <span class="material-symbols-outlined">
                        chevron_right
                    </span> </button>

                </div>
                <a className="galleryButton">See the Gallery</a>
            </div>
        </section>
    )
}

export default Results