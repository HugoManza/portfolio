import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectTemplate from './pages/ProjectTemplate'
import ScrollToTop from './components/ScrollToTop'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'



const App = () => {
  return (


    <BrowserRouter basename='/portfolio/'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path="/proyecto/:id" element={<ProjectTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App