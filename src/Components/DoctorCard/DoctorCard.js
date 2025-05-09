import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
    return (
      <div className="doctor-card">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-card-details-container">
          <div className="doctor-name">{doctor.name}</div>
          <div className="doctor-specialty">{doctor.specialty}</div>
          <div className="doctor-experience">Experience: {doctor.experience} years</div>
          <div className="doctor-rating">Rating: {doctor.rating} out of 5 stars</div>
          <div>
            <button className='book-appointment-btn'>
              <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DoctorCard;