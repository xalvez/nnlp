import React from 'react';
import './styles/globals.css';
import './styles/animations.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'; // Add this import
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects /> {/* Add this line */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;