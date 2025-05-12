import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/LandingPage";
import SignUp from "./Components/Sign_Up/SignUp";
import Login from "./Components/Login/Login";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import './App.css';

function App() {
    const [username, setUsername] = useState(sessionStorage.getItem("name") || "");
    const [email, setEmail] = useState(sessionStorage.getItem("email") || "");
    const [phone, setPhone] = useState(sessionStorage.getItem("phone") || "123-456-7890");
    const [address, setAddress] = useState(sessionStorage.getItem("address") || "123 Main St, Anytown, USA");
    const [profilePicture, setProfilePicture] = useState(sessionStorage.getItem("profilePicture") || "https://placehold.co/250x250");
    const [bio, setBio] = useState(sessionStorage.getItem("bio") || "This is a sample bio for the user.");
    const [socialMedia, setSocialMedia] = useState(sessionStorage.getItem("socialMedia"));

    useEffect(() => {
        const handleStorageChange = () => {
            setUsername(sessionStorage.getItem("name") || "");
            setEmail(sessionStorage.getItem("email") || "");
            setPhone(sessionStorage.getItem("phone") || "123-456-7890");
            setAddress(sessionStorage.getItem("address") || "123 Main St, Anytown, USA");
            setProfilePicture(sessionStorage.getItem("profilePicture") || "https://placehold.co/250x250");
            setBio(sessionStorage.getItem("bio") || "This is a sample bio for the user.");
            setSocialMedia(sessionStorage.getItem("socialMedia"));
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const user = {
        name: username || "User",
        email: email || "email@email.com",
        phone: phone || "123-456-7890",
        address: address || "123 Main St, Anytown, USA",
        profilePicture: profilePicture || "https://placehold.co/250x250",
        bio: bio || "This is a sample bio for the user.",
        socialMedia: {
            facebook: "https://www.facebook.com",
            twitter: "https://www.twitter.com",
            linkedin: "https://www.linkedin.com"
        }
    };

  return (
    <BrowserRouter>
        <Navbar />
        <Notification />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/book-appointment" element={<BookingConsultation />} />
            <Route path="/reviews" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
