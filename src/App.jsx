import React from 'react'
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
const App = () => {
  return (
    <>
     <Navbar/>
     <Home />
     <About/>
     <Skills />
     <Project />
     <Contact />
    </>
  )
}
export default App;