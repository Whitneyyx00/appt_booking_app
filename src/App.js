import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/LandingPage";
import SignUp from "./Components/Sign_Up/SignUp";
import Login from "./Components/Login/Login";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Notification>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/book-appointment" element={<BookingConsultation />} />
        </Routes>
        </Notification>
    </BrowserRouter>
  );
}

export default App;
