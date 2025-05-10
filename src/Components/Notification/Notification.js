import React, { useState, useEffect } from "react";
import "./Notification.css";

const Notification = () => {
    const [appointmentDetails, setAppointmentDetails] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const storedDetails = localStorage.getItem("appointmentDetails");
        if (storedDetails) {
            setAppointmentDetails(JSON.parse(storedDetails));
            setIsVisible(true);
        }
    }, []);

    const handleCancelAppointment = () => {
        localStorage.removeItem("appointmentDetails");
        setAppointmentDetails(null);
        setIsVisible(false);
    };

    useEffect(() => {
        const handleAppointmentBooked = (details) => {
            localStorage.setItem("appointmentDetails", JSON.stringify(details));
            setAppointmentDetails(details);
            setIsVisible(true);
        };

        window.addEventListener("appointmentBooked", (event) => {
            handleAppointmentBooked(event.detail);
        });

        return () => {
            window.removeEventListener("appointmentBooked", handleAppointmentBooked);
        };
    }, []);

    if (!isVisible || !appointmentDetails) {
        return null;
    }

    return (
        <div className="notification">
            <div className="notification-content">
                <h3>Upcoming Appointment!</h3>
                <p>Patient Name: {appointmentDetails.patientName}</p>
                <p>Doctor: {appointmentDetails.doctorName}</p>
                <p>Date: {appointmentDetails.appointmentDate}</p>
                <p>Time: {appointmentDetails.appointmentTime}</p>
                <button onClick={handleCancelAppointment} className="cancel-button">
                    Cancel Appointment
                </button>
            </div>
        </div>
    );
};

export default Notification;