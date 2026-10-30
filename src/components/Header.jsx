import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Controls the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check screen width to determine the scroll threshold
      const scrollThreshold = window.innerWidth <= 1080 ? -1 : 550;

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Toggles the mobile menu on and off
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right,chevron_left,menu,close" />


      <Link className="logo logoDesktop" to="/">HManzano</Link>
      <Link className='logo logoPhone' to="/">HM</Link>

      <nav className="nav">
        <div className="navItems">
          <Link to="/Projects" className='navButton'><h5>Projects</h5></Link>
          <Link to="/AboutMe" className='navButton' ><h5>About Me</h5></Link>
          <a className='navButton' href="#contact"><h5>Contact</h5></a>
        </div>
        {/* Toggle Button */}
        <button className='mobileMenu' onClick={toggleMenu}>
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Renders the mobile menu only when isMenuOpen is true */}
      {isMenuOpen && (
        <section className="menuPhone">
           <button className='mobileMenu' onClick={toggleMenu}>
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
          <Link to="/Projects" className='navButton' onClick={toggleMenu}><h5>Projects</h5></Link>
          <Link to="/AboutMe" className='navButton' onClick={toggleMenu}><h5>About Me</h5></Link>
          <a className='navButton' href="#contact" onClick={toggleMenu}><h5>Contact</h5></a>
        </section>
      )}
    </header>
  )
}

export default Head