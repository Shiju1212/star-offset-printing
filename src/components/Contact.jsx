import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/xzdyolan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(form),
  });

  if (response.ok) {
    setSubmitted(true);

    // Clear form
    setForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

    setTimeout(() => {
      setSubmitted(false)
    }, 3000);
  } else {
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">Call, WhatsApp, or visit us — we’re ready to print for you.</p>
        </div>

        <div className="contact-grid">
          {/* Left: Form */}
          <div className="contact-form-wrap">
            <h3 className="form-heading">Send Your Print Request</h3>
            {submitted && (
              <div className="success-message">
                ✅ Your form was submitted successfully!
              </div>
            )}
            <form onSubmit={handleSubmit}>
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handle}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={form.email}
                    onChange={(e) => 
                      setForm({
                        ...form, email: e.target.value.trim()
                      })
                    }
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Please enter a valid email address"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile number (for quick contact)"
                  value={form.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setForm({...form, phone: value});
                  }}
                  minLength={10}
                  maxLength={10}
                  title="Please enter a valid 10-digit mobile number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="What do you want to print? (e.g., 10 pages, color, spiral binding)"
                  rows={5}
                  value={form.message}
                  onChange={handle}
                  required
                />
              </div>
              <button className="submit-btn">
                Send Request
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            </form>

            {/* Working Hours */}
            <div className="working-hours">
              <h4 className="wh-heading">
                <span className="wh-icon">🕐</span>
                Working Hours
              </h4>
              <div className="wh-grid">
                <div className="wh-row">
                  <span className="wh-day">Monday – Saturday</span>
                  <span className="wh-time">9:00 AM – 7:00 PM</span>
                </div>
                {/* <div className="wh-row">
                  <span className="wh-day">Saturday</span>
                  <span className="wh-time">9:00 AM – 7:00 PM</span>
                </div> */}
                <div className="wh-row">
                  <span className="wh-day">Sunday</span>
                  <span className="wh-time closed">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="var(--gold)" opacity="0.25"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="var(--gold)"/>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">Our Address</span>
                <span className="info-value">
                  1/116, Puthanchanthai Jn, Maruthancode Post<br />
                  Kanyakumari, Tamil Nadu - 626 163<br />
                  India
                </span>
                <span className="info-badge">Visit our shop for instant printing</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="var(--gold)" opacity="0.2"/>
                  <path d="M22 6l-10 7L2 6" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">Email Us</span>
                <a href="mailto:staroffsets@gmail.com" className="info-value info-link">
                  staroffsets@gmail.com
                </a>
                <span className="info-badge">Send files anytime</span>
                {/* <a href="mailto:orders@printcraftpro.com" className="info-value info-link small">
                  orders@printcraftpro.com
                </a> */}
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="var(--gold)" opacity="0.3"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.37C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="var(--gold)" strokeWidth="1.6" fill="none"/>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-label">WhatsApp</span>
                <a href="https://wa.me/919488634058" target="_blank" rel="noreferrer" className="info-value info-link">
                  +91 94886 34058
                </a>
                <span className="info-badge">Send your file on WhatsApp & get it printed ⚡</span>
              </div>
            </div>
            

            {/* Map placeholder */}
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <span>1/116, Puthanchantha Jn, Maruthancode</span>
              <a href="https://maps.app.goo.gl/b6Kdwi2ZopczShv56" target="_blank" rel="noreferrer" className="map-link">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
