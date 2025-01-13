import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importálás a Routerhez
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroAnimation from './components/IntroAnimation';
import Prices from './components/Prices';
import Services from './components/Services';
import Offer from './components/Offer';
import UsSection from './components/UsSection';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';

// pages
import Contact from './Pages/Contact/Contact';
import Website from './Pages/Website/Website';
import Portfolio from './Pages/Portfolio/Portfolio';
import SEO from './Pages/SEO/SEO';
import './i18n';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Navbar />
        <Routes>
          {/* Főoldal */}
          <Route
            path="/"
            element={
              <>
                <ScrollAnimation />
                <IntroAnimation />
                <Hero />
                <Services />
                <Prices />
                <Offer />
                { /* <UsSection /> */ }
                <CTA />
              </>
            }
          />
          {/* Contact page */}
          <Route path="/website" element={<Website />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/seo" element={<SEO />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
