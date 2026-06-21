import React from 'react'
import SplashCursor from './SplashCursor'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {

  return (
    <div className='bg-gray-950 min-h-screen text-white'>
      <SplashCursor/>
      <Navbar/>
      <Home/>
      <About/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
