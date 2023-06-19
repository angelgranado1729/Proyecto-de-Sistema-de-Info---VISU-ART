import React from "react";
import "./Card.css";

const Card =({tour})=>{
    return(
        <div className="container-cards">
        <div className="card">
          <div className="cover">
            <img src="/images/cards/p1.png" alt="" />
            <div className="img-back"></div>
          </div>
          <div className="description">
            <h2>{tour.data.nombre}</h2>
            <p>
              {tour.data.descripcion}
            </p>
            <button className="see-more">Ver más</button>
          </div>
        </div>
      </div>

    )
}

export default Card;