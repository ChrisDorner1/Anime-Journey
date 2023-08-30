import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header.js';
import Login from './components/login/login.js';
import Footer from './components/footer';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const loginTimer = setTimeout(() => {
      setShowLogin(true);
    }, 3500);

    const footerTimer = setTimeout(() => {
      setShowFooter(true);
    }, 4500);

    return () => {
      clearTimeout(loginTimer);
      clearTimeout(footerTimer);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {showLogin && <Login className="grow-animation" />}
      {showFooter && <Footer className="grow-animation" />}
    </div>
  );
}

export default App;