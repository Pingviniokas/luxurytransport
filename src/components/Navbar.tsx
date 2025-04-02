'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`transparent-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="px-8 md:px-16 py-4 w-full flex items-center">
        <Link href="/" className="text-2xl font-normal text-white font-montserrat tracking-wide">
          <span>LUXURY</span>
          <span className="text-gold">TRANSPORT</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/fleet" className="nav-link">Fleet</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>
        
        <div className="hidden md:block">
          <button className="btn-primary uppercase">
            Book Now
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 px-8 py-4 rounded-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="nav-link px-3 py-2">Home</Link>
            <Link href="/fleet" className="nav-link px-3 py-2">Fleet</Link>
            <Link href="/services" className="nav-link px-3 py-2">Services</Link>
            <Link href="/about" className="nav-link px-3 py-2">About</Link>
            <Link href="/contact" className="nav-link px-3 py-2">Contact</Link>
            <button className="btn-primary mx-3 mt-2 uppercase">
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
} 