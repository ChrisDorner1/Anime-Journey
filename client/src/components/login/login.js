import React from "react";
// import LoginForm from "../LoginForm";
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
        <button>Log In</button>
      </ul>
    </div>
  );
}