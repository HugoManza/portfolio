import React, { useState, useEffect } from 'react'
import { projectsData } from '../data/projectsData'
import { useParams, Navigate } from 'react-router-dom'

const ProjectGallery = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    // 1. Empezamos en 1 porque el índice 0 será el clon de la última foto
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);

    if (!project) {
        return <Navigate to="/" />
    }

    const galleryFotos = project.images.gallery || [project.images.galleryCover];
    const length = galleryFotos.length;

    // 2. Creamos el array con los clones para el efecto infinito
    const extendedGallery = length > 1
        ? [galleryFotos[length - 1], ...galleryFotos, galleryFotos[0]]
        : galleryFotos;

    const nextPhoto = () => {
        if (currentIndex >= length + 1) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevPhoto = () => {
        if (currentIndex <= 0) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        if (length <= 1) return;
        const timer = setInterval(() => {
            nextPhoto();
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex, length]);

    // 3. Función que resetea la posición en secreto al terminar la animación
    const handleTransitionEnd = () => {
        if (currentIndex === length + 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(length);
        }
    };

    return (
        <section className="results">
            <div className="quickTag qtResults">
                <h3 className="resultsSub">Results</h3>
                <p className="resultsExplained">{project.results}</p>
            </div>

            <div className="projectGallery">


                <div className="frameGallery">
                    <button onClick={prevPhoto} className="controlButton back">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div className="photoCarusell" style={{ color: project.textColor }}>
                        <div className="carouselTrack"
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                transform: `translateX(calc(-${currentIndex} * (100% + 1rem)))`,
                                transition: isTransitioning ? 'transform 0.4s ease-in-out' : 'none'
                            }}>
                            {extendedGallery.map((foto, index) => (
                                <a
                                    key={index}
                                    target="_blank"
                                    href={foto}
                                    className="galleryPhoto"
                                    rel="noreferrer">

                                    <img src={foto} alt={`${project.title} Gallery ${index}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <button onClick={nextPhoto} className="controlButton next">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <a className="galleryButton"></a>
            </div>
        </section>
    )
}

export default ProjectGallery;