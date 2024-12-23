import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroAnimation from './components/IntroAnimation';

function App() {
  return (
    <div className='wrapper'>
      <IntroAnimation />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
