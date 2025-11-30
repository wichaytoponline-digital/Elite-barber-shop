import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <Location />
        <ContactButtons />
      </main>
      <Footer />
    </div>
  );
};

export default App;