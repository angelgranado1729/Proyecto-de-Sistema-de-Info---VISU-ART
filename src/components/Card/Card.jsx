import React from "react";
import "./Card.css";

const Card =()=>{
    return(
        <div className="container-cards">
        <div className="card">
          <div className="cover">
            <img src="/images/cards/p1.png" alt="" />
            <div className="img-back"></div>
          </div>
          <div className="description">
            <h2>TOUR BLA BLA BLA</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
              dolorum ab iste dicta cupiditate, ut doloribus
            </p>
            <button className="see-more">Ver más</button>
          </div>
        </div>
      </div>

    )
}

export default Card;