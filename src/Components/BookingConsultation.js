import React from "react";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import "./BookingConsultation.css";

const BookingConsultation = () => {
    return (
        <div className="booking-consultation">
            <h1>Book an Appointment</h1>
            <div className="space">
            <FindDoctorSearch />
            </div>
        </div>
    );
};

export default BookingConsultation;