import React, { useState } from "react";
import "./FindDoctorSearch.css";

const FindDoctorSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [showSpecialties, setShowSpecialties] = useState(false);
    const specialties = [ "Allergist","Anesthesiologist","Ayurveda","Cardiologist","Child and Adolescent Psychiatrist","Cosmetic Dermatologist","Dermatologist","Diabetologist","Ear-Nose-Throat (ENT) Specialist","Electrophysiologist","Endocrinologist","Family Medicine","Gastroenterologist","General Physician","General Practitioner (GP)",
    "Glaucoma Specialist","Gynecologist","Hand Surgeon","Head and Neck Surgeon","Hepatologist","Homeopath","Immunologist","Internal Medicine","Interventional Cardiologist","Interventional Radiologist","Neonatologist","Nephrologist","Neurologist","Neurosurgeon","Obstetrician","Oncologist","Ophthalmologist","Orthopedic Surgeon",
    "Pediatric Cardiologist","Pediatric Dermatologist","Pediatric Neurologist","Pediatric Urologist","Pediatrician","Psychiatrist","Pulmonologist","Radiation Oncologist","Radiologist","Reproductive Endocrinologist","Retina Specialist","Rheumatologist","Sports Medicine Physician","Surgical Oncologist","Urologist"]

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleInputFocus = () => {
        setShowSpecialties(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setShowSpecialties(false);
        }, 100);
    };

    return (
        <div className="find-doctor-search">
            <input
                type="text"
                placeholder="Search by specialty..."
                value={searchText}
                onChange={handleSearchChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            {showSpecialties && (
                <ul className="specialty-list">
                    {specialties.map((specialty) => (
                        <li key={specialty}>{specialty}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FindDoctorSearch;