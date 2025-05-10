import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctorName, onClose, onAppointmentBooked }) => {
    const [patientName, setPatientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Appointment Details:', {
            doctorName: doctorName,
            patientName: patientName,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime,
            phoneNumber: phoneNumber,
        });
        onAppointmentBooked();
        // Close the form after submission
        onClose();
    };

    return (
        <div className="appointment-form">
            <h2>Book Appointment with {doctorName}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="patientName">Patient Name:</label>
                    <input
                        type="text"
                        id="patientName"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="appointmentDate">Appointment Date:</label>
                    <input
                        type='date'
                        id="appointmentDate"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="appointmentTime">Appointment Time:</label>
                    <input
                        type="time"
                        id="appointmentTime"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Book Appointment</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;