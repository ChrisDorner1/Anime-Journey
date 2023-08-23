import React from "react";

export default function login() {
    return (
        <div>
        <h1>Welcome to Anime Journey</h1>
        <h2>Please login to continue</h2>
        <ul>
            <li className="username" placeholder="BobtheBuilder">Username</li>
            <li className="password" placeholder="Password1234">Password</li>
        </ul>
        </div>
    )
}