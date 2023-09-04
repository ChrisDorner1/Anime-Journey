import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const [showNavLinks, setShowNavLinks] = useState(false);
  const headerText = "Welcome To Anime Journey";

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex === headerText.length) {
        clearInterval(typingInterval);
        setShowNavLinks(true);
      } else {
        setTypedText(headerText.slice(0, charIndex + 1));
        charIndex++;
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="header">
      <h1 className="glowing-text">{typedText}</h1>
      {showNavLinks && (
        <div className="nav">
          <ul className='nav-links'>
            <Link to="/" className='btn'>Home</Link>
          </ul>
          <ul className='nav-links'>
            <Link to="/search" className='btn'>Search</Link>
          </ul>
          <ul className='nav-links'>
            <Link to="/list"> List</Link>
          </ul>
          <ul className='nav-links'>
            <Link to="/contact">Contact</Link>
          </ul>
          <ul className='nav-links'>
            <Link to="/login" className='btn'>Login</Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;