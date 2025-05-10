import React, { useState } from "react";
import "./ReviewForm.css";
import doctorsData from "../../doctors.json";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

const ReviewForm = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
    });
    const [reviews, setReviews] = useState({});

    const handleFeedbackClick = (doctor) => {
        setSelectedDoctor(doctor);
      };
    
      const handleCloseModal = () => {
        setSelectedDoctor(null);
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleRatingChange = (newRating) => {
        setFormData({ ...formData, rating: newRating });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setReviews(prevReviews => ({
            ...prevReviews,
            [selectedDoctor.id]: {
                name: formData.name,
                review: formData.review,
                rating: formData.rating
            }
        }));
        setFormData({
          name: '',
          review: '',
          rating: 0
        });
        setSelectedDoctor(null);
      };

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
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <button
                                    className="feedback-button"
                                    onClick={() => handleFeedbackClick(doctor)}
                                    disabled={reviews[doctor.id] ? true : false}
                                >
                                    {reviews[doctor.id] ? "Feedback Submitted" : "Click Here"}
                                </button>
                            </td>
                            <td>
                                {reviews[doctor.id] ? (
                                    <div>
                                        <p>Name: {reviews[doctor.id].name}</p>
                                        <p>Review: {reviews[doctor.id].review}</p>
                                        <div className="rating-container">
                                            Rating: <StarRating rating={reviews[doctor.id].rating} />
                                        </div>
                                    </div>
                                ) : (
                                    "No reviews yet"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedDoctor && (
                <FeedbackModal
                    doctor={selectedDoctor}
                    formData={formData}
                    handleChange={handleChange}
                    handleRatingChange={handleRatingChange}
                    handleSubmit={handleSubmit}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ReviewForm;