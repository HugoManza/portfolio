import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoDesk from './LogoDesk'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footerFrame">
       <LogoDesk />
        <Link className='logo logoPhone' to="/">HM</Link>
        <div className="socialLinks">
          <a className='linkIcon' href="https://www.linkedin.com/in/hugo-manzano-lara/"><img src="./extraResources/LinkedIn-Icon-Black-Logo.svg" alt="" />Linkedin</a>
     
        </div>

      </div>
    </footer>
  )
}

export default Footer