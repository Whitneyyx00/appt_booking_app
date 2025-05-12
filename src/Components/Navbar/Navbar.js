import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const authToken = sessionStorage.getItem("auth-token");
    const isLoggedIn = sessionStorage.getItem("email");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const username = sessionStorage.getItem("name");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("address");
        navigate("/login");
    };

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    StayHealthy
                </Link>
            </div>
            <ul className="nav__links">
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/instant-consultation">Instant Consultation</Link>
                </li>
                <li className="link">
                    <Link to="/book-appointment">Book Appointment</Link>
                </li>
                <li className="link">
                    <Link to="/reviews">Reviews</Link>
                </li>
                {isLoggedIn ? (
                    <div className="dropdown">
                        <button className="dropdown-toggle" onClick={toggleDropdown}>
                            Welcome, {username || "User"}
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                            <Link to="/profile" className="dropdown-item">Your Profile</Link>
                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="link">Login</Link>
                        <Link to="/signup" className="link">Sign Up</Link>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;