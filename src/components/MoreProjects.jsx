import React, { useRef, useState, useEffect } from 'react' // Añadimos useEffect
import { Link, useParams } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const MoreProjects = () => {
    const { id } = useParams();
    const otherProjects = projectsData.filter(project => project.id !== id);

    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const hasDragged = useRef(false);

    // NUEVO: Resetea el scroll horizontal al principio cuando cambia la página
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = 0;
        }
    }, [id]); // Se ejecuta cada vez que el "id" de la URL cambia

    const handleMouseDown = (e) => {
        setIsDragging(true);
        hasDragged.current = false;
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;

        if (Math.abs(walk) > 5) {
            hasDragged.current = true;
        }

        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleClick = (e) => {
        if (hasDragged.current) {
            e.preventDefault();
        }
    };

    return (


        <div className="containerProjects">
            <div className="textContainer">
                <h3>All our best work</h3>
                <h4>Here for you</h4>
            </div>
            
            <div
                className={`moreProjects ${isDragging ? 'active' : ''}`}
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >





                {otherProjects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/proyecto/${project.id}`}
                        className="projectMore"
                        onClick={handleClick}
                        style={{
                            backgroundImage: `url("${project.gridImage}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="projectMoreTexts">
                            <h2 className="moreProjectsTitle">{project.title}</h2>
                            <h4 className="moreProjectsSubtitle">{project.subtitle}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MoreProjects