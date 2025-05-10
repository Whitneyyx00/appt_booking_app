import React from "react";
import "./ReviewForm.css";
import doctorsData from "../../doctors.json";

const ReviewForm = () => {
    return (
        <div className="reviews-container">
            <h2>Reviews</h2>
            <table className="reviews-table">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>Provide Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <button className="feedback-button">Click Here</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewForm;