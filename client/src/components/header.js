import React, { useState, useEffect } from 'react';

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
      <h1>{typedText}</h1>
    </div>
  );
};

export default Header;