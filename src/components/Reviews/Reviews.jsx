import React, { useEffect, useState } from "react";
import "./Reviews.css"
import reviewsData from "./reviewsData"
import {FaStar} from "react-icons/fa"


const Reviews =()=>{
    const [users] = useState(reviewsData);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = users.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index> lastIndex){
            setIndex(0);
        }
    }, [index, users])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index+1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return(
        <div className="reviews-section">
        <div className="reviews-decoration1"></div>
        <div className="reviews-decoration2"></div>
            <div className="reviews-container">
                {users.map((item, indexUser) => {
                    const {id, name, tour, quote} = item;
                    let position = "nextSlide";
                    if(indexUser === index){
                        position = "activeSlide";
                    }
                    if(indexUser === index -1 || (index === 0 && indexUser === users.length - 1)) {
                        position = "lastSlide";
                    }
                    return(
                        <article className={position} key={id}>
                            <div className="review">
                                    <p className="review-quote">{quote}</p>
                                    <div className="review-rating">
                                    <FaStar color={"#ffc107"}/>
                                    <FaStar color={"#ffc107"}/>
                                    <FaStar color={"#ffc107"}/>
                                    <FaStar color={"#ffc107"}/>
                                    <FaStar color={"e4e5e9"}/>
                                    </div>
                            </div>
                            <div className="bubble-decoration"></div>
                            <div className="review-userinfo">
                                <h4>{name}</h4>
                                <p className="tour-name">Sobre {tour}</p>
                            </div>
                        </article>
                    )
                })}
                <div className="navegation-reviews">
                    <button className="prev" onClick ={() => setIndex(index - 1)}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="next" onClick ={() => setIndex(index + 1)}>
                    <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                </div>
            </div>
    )
}

export default Reviews;