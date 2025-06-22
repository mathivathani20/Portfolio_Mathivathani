
import './App.css';


import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import React, { useEffect, useState } from 'react';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
const [whiteBg, setWhiteBg] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setWhiteBg(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  return (
  <>
  <Navbar whiteBg={whiteBg}/>
  <Home/>
  <About/>
  <Skills/>
   <Projects/>
  <Contact/>

  </>
  );
}

export default App;
