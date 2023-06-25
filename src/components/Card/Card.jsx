import React from "react";
import "./Card.css";

const Card = (props) => {
  const tourTitle = props.tourTitle;
  const tourDescription = props.tourDescription;
  const tourImage = props.tourImage;
  const tourLocation = props.tourLocation;

  return (
    <div className="container-cards">
<<<<<<< HEAD
      <div className="card1">
        <div className="cover1">
          <img src="/images/cards/p1.png" alt="" />
          <div className="img-back"></div>
        </div>
        <div className="description1">
          <h2>TOUR BLA BLA BLA</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            dolorum ab iste dicta cupiditate, ut doloribus
=======
      <div className="card-wrapper">
        <div className="card-cover">
          <img src={tourImage} alt="" />
          <div className="img-back"></div>
        </div>
        <div className="card-description">
          <h2 className="tour-title">{tourTitle}</h2>
          <p className="tour-location"><i className="fa-solid fa-location-dot"></i><strong>Ubicación:</strong> {tourLocation}</p>
          <p className="tour-description">
            {tourDescription}
>>>>>>> 2855123a52b3b8a19985b861a6a456e8c6566866
          </p>
          <button className="see-more-btn">Ver más</button>
        </div>
      </div>
    </div>

  )
}

export default Card;