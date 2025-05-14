import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ backgroundColor: '#f7fafc', color: 'black', minHeight: '100vh' }}>
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
// {//className="scroll-smooth bg-gray-100  text-white">}