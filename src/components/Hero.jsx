import React from 'react';
import './Hero.css';
import print from '../assets/print.jpg'

export default function Hero({ onLoginClick }) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background texture */}
      <div className="hero-bg-pattern"></div>

      <div className="hero-container">
        {/* Right: Illustration (order-2 in CSS) */}
        <div className="hero-visual hero-visual--right">
          <div className="print-illustration">
            <div className="ill-press">
              <img src={print}
                  alt="printing"
                  className='press-image' />
            </div>

            {/* Floating cards */}
            <div className="float-card card-1">
              <span className="fc-icon">📄</span>
              <span>Business Cards</span>
            </div>
            <div className="float-card card-2">
              <span className="fc-icon">📚</span>
              <span>Book Printing</span>
            </div>
            <div className="float-card card-3">
              <span className="fc-icon">✅</span>
              <span>Same-day Ready</span>
            </div>
          </div>
        </div>

        {/* Left: Text content */}
        <div className="hero-content hero-content--left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Trusted by 1000+ Customers Since 2015
          </div>
          <h1 className="hero-title">
            Print Fast<br />
            <span className="title-accent">Print Perfect</span>
          </h1>
          <p className="hero-desc">
            High-quality printouts, books, binding, and laser printing — all in one place.
            From single-page printouts to full book binding — we deliver with precision.
          </p>

          {/* Why Choose Us strip */}
          <div className="why-us">
            <div className="why-item">
              <span className="why-num">10+</span>
              <span className="why-label">Years Experience</span>
            </div>
            <div className="why-divider"></div>
            <div className="why-item">
              <span className="why-num">1000+</span>
              <span className="why-label">Happy Customers</span>
            </div>
            <div className="why-divider"></div>
            <div className="why-item">
              <span className="why-num">24hr</span>
              <span className="why-label">Same Day Delivery</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="btn-secondary" onClick={scrollToContact}>
              Visit Shop
            </button>
            {/* <button className="btn-ghost" onClick={onLoginClick}>
              Login
            </button> */}
          </div>
        </div>
      </div>

      {/* Why Choose Us full section */}
      <div className="choose-us-strip">
        <div className="choose-inner">
          <h2 className="choose-title">Why People Trust Us for Printing</h2>
          <div className="choose-grid">
            <div className="choose-card">
              <div className="cc-icon">🎨</div>
              <h4>Sharp & Clean Prints</h4>
              <p>Get clear, high-quality prints every time — no blur, no compromise.</p>
            </div>
            <div className="choose-card">
              <div className="cc-icon">⚡</div>
              <h4>Fast Printing</h4>
              <p>Most orders ready the same day or within 24 hours.</p>
            </div>
            <div className="choose-card">
              <div className="cc-icon">🏆</div>
              <h4>Trusted Experience</h4>
              <p>Serving students, shops, and businesses for over 10 years.</p>
            </div>
            <div className="choose-card">
              <div className="cc-icon">🤝</div>
              <h4>Friendly Support</h4>
              <p>We help you choose the right print — simple and hassle-free.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
