import React, { useState } from "react";
import SignUpForm from "../SignUpForm";
import LoginForm from "../login/LoginForm";
import "./style.css";

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="login-container">
      <h2>{showSignUp ? "Sign Up" : "Log In"}</h2>
      {showSignUp ? (
        <SignUpForm setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />
        ) : (
        <LoginForm setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />
      )}
    </div>
  );
}
