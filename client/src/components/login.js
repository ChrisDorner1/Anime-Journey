import React from "react";

export default function Login() {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid white",
    margin: "1rem",
  };

  const ulStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "1rem",
  };

  const inputStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "1rem",
  };

  return (
    <div style={divStyle}>
      <h2>Log In</h2>
      <ul style={ulStyle}>
        Username:
        <input
          style={inputStyle}
          className="username"
          placeholder="PaulthePlaceholder"
        />
        Password:
        <input
          style={inputStyle}
          className="password"
          placeholder="Password1234"
        />
        <button>Sign Up</button>
      </ul>
    </div>
  );
}
