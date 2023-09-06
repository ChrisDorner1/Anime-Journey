import React from "react";
import "./style.css";
// import Contact from "../contact/contact.js"
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <h2>Thank you for using our service!!❤️❤️</h2>
            {/* <Route
            path="/contact"
            element={<Contact/>}/> */}
            <Link
            to="/contact"></Link>
        </div>
    )
}