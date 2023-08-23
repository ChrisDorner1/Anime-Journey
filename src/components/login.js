import React from "react";
import Header from './header.js'


export default function login() {
    return (
        <div>
            <Header />
        <ul>
            <input className="username" placeholder="BobtheBuilder">Username</input>
            <input className="password" placeholder="Password1234">Password</input>
        </ul>
        </div>
    )
}