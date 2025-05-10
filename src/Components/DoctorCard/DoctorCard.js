import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const StarRating = ({ rating }) => {
        const stars = [1, 2, 3, 4, 5];

        return (
            <div className="star-rating">
                {stars.map((star) => (
                    <span
                        key={star}
                        className={star <= rating ? "star filled" : "star"}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    const handleBookAppointment = () => {
        setShowAppointmentForm(true);
    };

    const handleCloseAppointmentForm = () => {
        setShowAppointmentForm(false);
    };

    const handleAppointmentBooked = () => {
        setIsBooked(true);
        setShowAppointmentForm(false);
    };

    const handleCancelAppointment = () => {
        setIsBooked(false);
    };

    return (
      <div className="doctor-card">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-card-details-container">
          <div className="doctor-name">{doctor.name}</div>
          <div className="doctor-specialty">{doctor.specialty}</div>
          <div className="doctor-experience">Experience: {doctor.experience} years</div>
          <div className="doctor-rating">Rating: <StarRating rating={doctor.rating} /> </div>
          <Link to="/reviews" className="review-link">
            View Reviews
          </Link>
          <div className="doctor-card-options-container">
            {!isBooked ? (
                <button className="book-appointment-btn" onClick={handleBookAppointment}>
                    <div>Book Appointment</div>
                    <div>No Booking Fee</div>
                </button>
            ) : (
                <button className="cancel-appointment-btn" onClick={handleCancelAppointment}>
                    Cancel Appointment
                </button>
            )}
          </div>
        </div>

        {showAppointmentForm && (
            <AppointmentForm
                doctorName={doctor.name}
                onClose={handleCloseAppointmentForm}
                onAppointmentBooked={handleAppointmentBooked}
            />
        )}
      </div>
    );
  };
  
  export default DoctorCard;