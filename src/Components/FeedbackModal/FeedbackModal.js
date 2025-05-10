import React from "react";
import "./FeedbackModal.css";

const FeedbackModal = ({ doctor, formData, handleChange, handleRatingChange, handleSubmit, onClose }) => {
    const StarRating = ({ rating, onRatingChange }) => {
      const stars = [1, 2, 3, 4, 5];
  
      return (
        <div className="star-rating">
          {stars.map((star) => (
            <span
              key={star}
              className={star <= rating ? 'star filled' : 'star'}
              onClick={() => onRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
      );
    };
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2 className="feedback-header">Provide Feedback for {doctor.name}</h2>
          <form onSubmit={handleSubmit} className="feedback-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              rows="7"
              value={formData.review}
              onChange={handleChange}
              required
            />
            <label>Rating:</label>
            <StarRating
              rating={formData.rating}
              onRatingChange={handleRatingChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FeedbackModal;