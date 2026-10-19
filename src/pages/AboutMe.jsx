import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const AboutMe = () => {
  return (
    <div className='container'>
      <Header />
      <div className="AboutMe">
        <div className="testArea">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>HEading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          
          <sub>Subtitle</sub>
          
          <p>Paragrapgh text with some <b>bold</b> stuff and some <i>italic</i> stuff</p>
        <a href="">CLick me</a>
        
        </div>
      </div>




      <Footer />
    </div>
  )
}

export default AboutMe