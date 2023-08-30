import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="login-container">
      <h2>Log In</h2>
      <ul className="login-list">
        Username:
        <input className="login-input username" placeholder="PaulthePlaceholder" />
        Password:
        <input className="login-input password" placeholder="Password1234" />
        <button>Sign Up</button>
      </ul>
    </div>
  );
}