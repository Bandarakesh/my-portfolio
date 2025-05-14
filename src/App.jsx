import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
