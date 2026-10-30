import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const ProjectGallery = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Nuevos estados para registrar el toque en la pantalla
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    if (!project) {
        return <Navigate to="/" />
    }

    const galleryFotos = project.images.gallery || [project.images.productTop];
    const length = galleryFotos.length;

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

    const handleTransitionEnd = () => {
        if (currentIndex === length + 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(length);
        }
    };

    // --- LÓGICA TÁCTIL (SWIPE) ---
    const minSwipeDistance = 50; // Distancia mínima en píxeles para considerar que es un deslizamiento

    const onTouchStart = (e) => {
        setTouchEnd(null); // Reseteamos el final del toque anterior
        setTouchStart(e.targetTouches[0].clientX); // Registramos la posición inicial X
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX); // Actualizamos la posición X mientras mueve el dedo
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextPhoto(); // Deslizó hacia la izquierda, siguiente foto
        } else if (isRightSwipe) {
            prevPhoto(); // Deslizó hacia la derecha, foto anterior
        }
    };
    // ----------------------------

    return (
        <div className="projectGallery">
            <div className="frameGallery">
                <button onClick={prevPhoto} className="controlButton back controlButtonDesktop">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {/* Añadimos los eventos onTouch al contenedor principal del carrusel */}
                <div
                    className="photoCarusell"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="carouselTrack"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            // Corregido: Faltaba el asterisco de multiplicar (*) antes del paréntesis
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
                <div className="mobilePhoneIcons">
                    <button onClick={prevPhoto} className="controlButton back controlButtonMobile">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button onClick={nextPhoto} className="controlButton next">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectGallery;