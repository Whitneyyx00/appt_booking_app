import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const authToken = sessionStorage.getItem("auth-token");
    const userEmail = sessionStorage.getItem("email");

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email");
        navigate("/login");
        window.location.reload();
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
                    <Link to="#">Appointments</Link>
                </li>
                {authToken ? (
                    <>
                        <li className="link">
                            <span>{userEmail ? userEmail.split("@")[0] : ''}</span>
                        </li>
                        <li className="link">
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li className="link">
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;