import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectTemplate from './pages/ProjectTemplate'
import ScrollToTop from './components/ScrollToTop'



const App = () => {
  return (

    
    <BrowserRouter basename='/portfolio/'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/proyecto/:id" element={<ProjectTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App