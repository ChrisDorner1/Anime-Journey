import React from "react";
import Header from './header.js'
import Footer from "./footer"

export default function Login() {
    return (
        <div>
            <Header />
        <ul>
                Username: 
                <input className="username" placeholder="PaulthePlaceholder"/>

                Password:
                <input className="password" placeholder="Password1234"/>

                <button>Sign Up</button>
                <Footer />
        </ul>
        </div>
    )
}