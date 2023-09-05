import React, { useState } from "react";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import "./style.css";

export default function Login() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login-container">
      <h2>{showLogin ? "Log In" : "Sign Up"}</h2>
      {showLogin ? (
        <LoginForm setShowLogin={setShowLogin} />
      ) : (
        <SignUpForm setShowLogin={setShowLogin} />
      )}
      {/* <LoginForm />
      <ul className="login-list">
        Username:
        <input className="login-input username" placeholder="PaulthePlaceholder" />
        Password:
        <input className="login-input password" placeholder="Password1234" />
        <button>Log In</button>
        <SignUpForm />
      </ul> */}
    </div>
  );
}