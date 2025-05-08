import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <div className="nav__logo">
                <a href="/">
                    StayHealthy
                </a>
            </div>
            <ul className="nav__links">
                <li className="link">
                    <a href="/">Home</a>
                </li>
                <li className="link">
                    <a href="#">Appointments</a>
                </li>
                <li className="link">
                    <a href="/signup">Sign Up</a>
                </li>
                <li className="link">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;