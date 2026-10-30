import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footerFrame">
        <Link className="logo logoDesktop" to="/">HManzano</Link>
        <Link className='logo logoPhone' to="/">HM</Link>
        <div className="socialLinks">
          <a className='linkIcon' href="https://www.linkedin.com/in/hugo-manzano-lara/"><img src="\portfolio\public\extraResources\LinkedIn-Icon-Black-Logo.svg" alt="" />Linkedin</a>
     
        </div>

      </div>
    </footer>
  )
}

export default Footer