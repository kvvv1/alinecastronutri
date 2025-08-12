import React from 'react';
import Hero from './components/Hero';
import InstagramCarousel from './components/InstagramCarousel';
import About from './components/About';
import Services from './components/Services';
import Content from './components/Content';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <InstagramCarousel />
      <About />
      <Services />
      <Content />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;