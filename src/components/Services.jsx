import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    id: 'paper',
    icon: '🖨️',
    title: 'Bulk Printing',
    subtitle: 'Flyers, bill books, notices & more',
    color: '#c9a84c',
    items: [
      'Notice',
      'Bill Book',
      'Card Printing',
      'Multi Color',
      'Vazthumadal',
      'All type Binding'
    ],
  },
  {
    id: 'cards',
    icon: '📄',
    title: 'Quick Prints',
    subtitle: 'Get your prints ready in minutes',
    color: '#8b3a1e',
    items: [
      'Invitations',
      'Visiting Cards',
      'Letter Pads',
      'Resume / CV Print',
      'ID Cards',
      'Photo Print',
    ],
  },
  {
    id: 'books',
    icon: '🌐',
    title: 'Online & Form services',
    subtitle: 'Exam forms, PAN card, tickets & more',
    color: '#2b5f3e',
    items: [
      'Exam Applications',
      'PAN Card Services',
      'Land Documents (Patta, etc)',
      'Phone Bill Payment',
      'Ticket Booking (Bus/Train)',
      'Passport Services'
    ],
  },
  {
    id: 'marketing',
    icon: '📚',
    title: 'Daily Print Services',
    subtitle: 'Xerox, color print, spiral & lamination',
    color: '#1a4c7a',
    items: [
      'Black & White Print (Xerox)',
      'Color Print (Laser/Inkjet)',
      'Spiral Binding',
      'Lamination',
      'Tamil & English DTP',
      'Project Printing',
    ],
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const toggle = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          {/* <span className="section-label">What We Offer</span> */}
          <h2 className="section-title">What We Print</h2>
          <p className="section-sub">
            Click a service to see all options.
          </p>
        </div>

        <div className="service-cards">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`service-card ${activeCard === svc.id ? 'active' : ''}`}
              onClick={() => toggle(svc.id)}
              style={{ '--accent': svc.color }}
            >
              <div className="sc-front">
                <div className="sc-icon">{svc.icon}</div>
                <h3 className="sc-title">{svc.title}</h3>
                <p className="sc-sub">{svc.subtitle}</p>
                <div className="sc-arrow">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3v12M3 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={`sc-expand ${activeCard === svc.id ? 'open' : ''}`}>
                {activeCard === svc.id && (
                  <>
                    <h4 className="expand-title">Services Include:</h4>
                    <ul className="expand-list">
                      {svc.items.map((item, i) => (
                        <li key={i}>
                          <span className="check-dot"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="close-btn" onClick={(e) => { e.stopPropagation(); setActiveCard(null); }}>
                      Close ✕
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
