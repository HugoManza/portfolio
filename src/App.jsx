import React from 'react'
// 1. Cambia BrowserRouter por HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import ProjectTemplate from './pages/ProjectTemplate'
import ScrollToTop from './components/ScrollToTop'
import AboutMe from './pages/AboutMe'

const App = () => {
  return (
    // 2. Usa <HashRouter> (ya no necesitas el basename)
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/proyecto/:id" element={<ProjectTemplate />} />
      </Routes>
    </HashRouter>
  )
}

export default App