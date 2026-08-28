import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmartTriage from './components/SmartTriage';
import About from './components/About';
import Journey from './components/Journey';
import Services from './components/Services';
import ClinicGallery from './components/ClinicGallery';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Linktree from './components/Linktree';
import { MessageCircle } from 'lucide-react';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main>
        <Hero />
        <SmartTriage />
        <About />
        <Journey />
        <Services />
        <ClinicGallery />
        <Methodology />
        <Testimonials />
        <Location />
        <FAQ />
        <CTASection />
      </main>
      <Footer />

      {/* Floating WhatsApp Action for Quick Access */}
      <a
        href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+os+atendimentos+psicopedag%C3%B3gicos."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Vivian no WhatsApp"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 90,
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          width: '54px',
          height: '54px',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.38)',
          transition: 'var(--transition-smooth)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
        }}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/links" element={<Linktree />} />
      <Route path="/linktree" element={<Linktree />} />
      <Route path="/bio" element={<Linktree />} />
    </Routes>
  );
}
