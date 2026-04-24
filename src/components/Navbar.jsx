import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../assets/logo.png"

export default function Navbar({ onLoginClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Left: Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollTo('home')}>Home</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
          {/* <li>
            <button className="login-btn" onClick={onLoginClick}>Login</button>
          </li> */}
        </ul>

        {/* Right: Logo + Shop Name */}
        <div className="brand" onClick={() => scrollTo('home')}>
          <div className="logo-container">
  <img src={logo} alt="Star Offset Logo" />

  <div className="logo-text">
    <h1>Star Offset</h1>
    <span>PRINTING</span>
  </div>
</div>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  );
}
