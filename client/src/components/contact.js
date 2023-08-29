import React from "react";
import Footer from "./footer"


export default function Contact() {
    return (
    <div>
        <h2>Contact Us!😁</h2>
        <h3>What is your name?</h3>
        <input className="userName" placeholder="Beepus Leepus"/>
        <h3>Please enter your email</h3>
        <input className="email"/>
        <h3>Message</h3>
        <input className="message" placeholder="Please enter your message"/>
        <Footer />
    </div>
)}