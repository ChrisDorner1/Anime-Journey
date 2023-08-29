import React from "react";
<<<<<<< HEAD
import Header from './header.js'
import Footer from "./footer"
=======
>>>>>>> 5f84ac90c4e0c42e1cd46d95d090a8016b59dcc6

export default function Login() {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: '1px solid white',
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

<<<<<<< HEAD
                <button>Sign Up</button>
                <Footer />
        </ul>
        </div>
    )
=======
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
        <input style={inputStyle} className="username" placeholder="PaulthePlaceholder" />
        Password:
        <input style={inputStyle} className="password" placeholder="Password1234" />
        <button>Sign Up</button>
      </ul>
    </div>
  );
>>>>>>> 5f84ac90c4e0c42e1cd46d95d090a8016b59dcc6
}