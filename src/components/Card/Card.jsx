import React from "react";
import "./Card.css";

const Card = (props) => {
  const tourTitle = props.tourTitle;
  const tourDescription = props.tourDescription;
  const tourImage = props.tourImage;
  const tourLocation = props.tourLocation;

  return (
    <div className="container-cards">
      <div className="card-wrapper">
        <div className="card-cover">
          <img src={tourImage} alt="" />
          <div className="img-back"></div>
        </div>
        <div className="card-description">
          <h2 className="tour-title">{tourTitle}</h2>
          <p className="tour-location"><i class="fa-solid fa-location-dot"></i><strong>Ubicación:</strong> {tourLocation}</p>
          <p className="tour-description">
            {tourDescription}
          </p>
          <button className="see-more-btn">Ver más</button>
        </div>
      </div>
    </div>

  )
}

export default Card;