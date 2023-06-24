import React from "react";
import "./Card.css";

const Card = (props) => {
  const tourTitle = props.tourTitle;
  const tourDescription = props.tourDescription;
  const tourImage = props.tourImage;

  return (
    <div className="container-cards">
      <div className="card-wrapper">
        <div className="card-cover">
          <img src="/images/cards/p1.png" alt="" />
          <div className="img-back"></div>
        </div>
        <div className="card-description">
          <h2>{tourTitle}</h2>
          <p className="tour-info">
            {tourDescription}
          </p>
          <button className="see-more-btn">Ver más</button>
        </div>
      </div>
    </div>

  )
}

export default Card;