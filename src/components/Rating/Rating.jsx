import React, { useState, useEffect } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";

const Rating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    onRatingChange(rating);
  }, [rating, onRatingChange]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="star-rating"
              value={ratingValue}
              onClick={() => handleRatingChange(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? "#ffc107" : "e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
