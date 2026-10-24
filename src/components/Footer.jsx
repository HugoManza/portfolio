import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footerFrame">
        <Link className="logo logoDesktop" to="/">HManzano</Link>
        <Link className='logo logoPhone' to="/">HM</Link>
        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/hugo-manzano-lara/">Linkedin</a>
          <a href="">Instagram</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer