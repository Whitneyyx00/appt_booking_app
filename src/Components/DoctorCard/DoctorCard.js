import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    const handleBookAppointment = () => {
        setShowAppointmentForm(true);
    };

    const handleCloseAppointmentForm = () => {
        setShowAppointmentForm(false);
    };

    return (
      <div className="doctor-card">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-card-details-container">
          <div className="doctor-name">{doctor.name}</div>
          <div className="doctor-specialty">{doctor.specialty}</div>
          <div className="doctor-experience">Experience: {doctor.experience} years</div>
          <div className="doctor-rating">Rating: {doctor.rating} out of 5 stars</div>
          <div>
            <button className='book-appointment-btn' onClick={handleBookAppointment}>
              <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
          </div>
        </div>

        {showAppointmentForm && (
            <AppointmentForm
                doctorName={doctor.name}
                onClose={handleCloseAppointmentForm}
            />
        )}
      </div>
    );
  };
  
  export default DoctorCard;