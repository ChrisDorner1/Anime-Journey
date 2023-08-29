import React, { useState, useEffect } from 'react';

<<<<<<< HEAD


export default function Header() {
    return (
=======
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
>>>>>>> 5f84ac90c4e0c42e1cd46d95d090a8016b59dcc6
    <div>
      <h1>{typedText}</h1>
    </div>
  );
};

export default Header;