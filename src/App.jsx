import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <About />
        <Education />
        <Internships />
        <Projects />
        <Achievements />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
