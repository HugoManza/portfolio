import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // VAraible aqui
      if (currentScrollY > lastScrollY && currentScrollY > 550) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (

    <header
      className="header"
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        transition: 'transform 0.3s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        zIndex: 1000
      }}
    >
      <Link className="logo logoDesktop" to="/">Hugo Manzano</Link>
      <Link className='logo logoPhone' to="/">HM</Link>
      <nav className="nav">
        <Link to="/Projects" className='navButton'><h5>Projects</h5></Link>
        <Link to="/AboutMe" className='navButton' ><h5>About Me</h5></Link>
        <a className='navButton' href="#contact"><h5>Contact</h5></a>
      </nav>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right,chevron_left,menu" />
            <link rel="stylesheet" />
      <section className="menuPhone">
        <span class="material-symbols-outlined">
          menu
        </span>
      </section>
    </header>
  )
}

export default Head