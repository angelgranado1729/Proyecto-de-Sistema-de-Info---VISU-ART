import React, { useState } from "react";
import {useEffect} from 'react';
import "./Rating.css";
import {FaStar} from "react-icons/fa"

const Rating = () => {
    const [rating, setRating] = useState(null);
  return (
    <div>
        {[...Array(5)].map((star,i) =>{
            const ratingValue= i+1;

            return (
            <label>
                <input type="radio" name="star-rating"  value={ratingValue} onClick={()=> setRating(ratingValue)}/>
                <FaStar className="star" color={ratingValue <= rating ? "#ffc107" : "e4e5e9"}/>
            </label>
        )})}
    </div>
  )
}

export default Rating;