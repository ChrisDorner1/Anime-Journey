import React from "react";
import "./style.css";

export default function Contact() {
    return (
    <div className="contact">
        <h2>Contact Us! 😁</h2>
        <h3>What is your name?</h3>
        <input className="userName" placeholder="Beepus Leepus"/>
        <h3>Please enter your email</h3>
        <input className="email" placeholder="beepus@leepus.com"/>
        <h3>Message</h3>
        <input className="message" placeholder="Please enter your message"/>
        <button >Send This message</button>
    </div>
)}