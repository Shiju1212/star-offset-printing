import React, { useEffect } from 'react';
import './LoginModal.css';

export default function LoginModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Decorative rings */}
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>

        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-content">
          <div className="modal-icon">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="26" fill="rgba(201,168,76,0.1)"/>
              <path d="M26 14C22.686 14 20 16.686 20 20v3h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V25a2 2 0 0 0-2-2h-2v-3c0-3.314-2.686-6-6-6zm0 2c2.21 0 4 1.79 4 4v3h-8v-3c0-2.21 1.79-4 4-4zm0 10a2 2 0 0 1 1 3.732V32a1 1 0 1 1-2 0v-2.268A2 2 0 0 1 26 26z" fill="var(--gold)"/>
            </svg>
          </div>

          <div className="coming-soon-tag">Coming Soon</div>

          <h2 className="modal-title">Customer Portal</h2>
          <p className="modal-desc">
            We're building a dedicated login experience for you —
            track orders, manage files, and reorder with ease.
          </p>

          <div className="progress-wrap">
            <div className="progress-bar"></div>
          </div>
          <span className="progress-label">Development in progress · ~85% complete</span>

          <div className="modal-divider"></div>

          <p className="modal-alt">
            Need help right now? Reach us on WhatsApp or email.
          </p>
          <div className="modal-actions">
            <a href="https://wa.me/919876543210" className="modal-btn wa-btn" target="_blank" rel="noreferrer">
              💬 WhatsApp Us
            </a>
            <button className="modal-btn back-btn" onClick={onClose}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
