import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="copyright">
          © {year} <span className="co-name">Star Offset Printing</span>. All rights reserved.
          {/* &nbsp;·&nbsp; Crafted with precision in Neyyattinkara, Kerala. */}
        </p>
      </div>
    </footer>
  );
}
