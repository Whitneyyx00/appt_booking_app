import React, { useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import doctorsData from "../../doctors.json";
import "./FindDoctorSearch.css";

const FindDoctorSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [showSpecialties, setShowSpecialties] = useState(false);

    const filteredSpecialties = doctorsData.map(doctor => doctor.specialty)
    .filter((specialty, index, self) =>
      self.indexOf(specialty) === index &&
      specialty.toLowerCase().includes(searchText.toLowerCase())
    );

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
                    {filteredSpecialties.map((specialty) => (
                        <li key={specialty}>{specialty}</li>
                    ))}
                </ul>
            )}

            {/* Display Doctor Cards */}
            <div className="doctor-list">
                {doctorsData.filter(doctor =>
                    filteredSpecialties.includes(doctor.specialty) || searchText === ''
                    ).map(doctor => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
            </div>
        </div>
    );
};

export default FindDoctorSearch;