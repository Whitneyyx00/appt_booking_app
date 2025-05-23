import React from "react";
import "./LandingPage.css";
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";

const LandingPage = () => {
    return (
        <section className="hero-section">
            <div className="lp-container">
                <div className="flex-hero">
                    <h1>
                        Your Health
                        <br />
                        <span className="text-gradient">Our Responsibility</span>
                    </h1>
                    <p className="hero-description">
                        We provide comprehensive healthcare solutions, connecting you with trusted
                        doctors and resources to help you live a healthier life.
                    </p>
                    <a href="#services" className="button-link">
                        <button className="button primary-button">Get Started</button>
                    </a>
                </div>
                <h2>Find a Doctor</h2>
                <FindDoctorSearch />
            </div>
        </section>
    );
};

export default LandingPage;