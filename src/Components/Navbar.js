import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
       <Link to="/" className="logo">Tourify</Link>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="/tours">Tours</a>
        </li>
        <li>
          <a href="/add-tour">Add Tour</a>
        </li>
        <li>
          <a href="/my-tours">My Tours</a>
        </li>
      </ul>
      <button 
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? '✖' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;
