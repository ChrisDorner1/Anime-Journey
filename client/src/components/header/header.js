
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [typedText, setTypedText] = useState('');
  const headerText = "Welcome To Anime Journey";

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex === headerText.length) {
        clearInterval(typingInterval);
      } else {
        setTypedText(headerText.slice(0, charIndex + 1));
        charIndex++;
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <h1 className="glowing-text">{typedText}</h1>
      <li className='nav-links'> 
      <Link to="/watchlist">Watch List</Link> 
      </li>
      {/* <li className='nav-links'> 
      <Link to="/watched">Watched</Link> 
      </li> */}
      <li className='nav-links'> 
      <Link to="/search" className='btn'> + Add</Link> 
      </li>
    </div>
  );
};

export default Header;