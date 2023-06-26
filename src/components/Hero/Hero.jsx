import React from "react";
import "./Hero.css";
import Slider from "../Slider/Slider";
import Subtitle from "../Subtitle/Subtitle";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="slider-container">
          <Slider className="slider" />
          <div className="hero-decoration2"></div>
        </div>
        <div className="hero-text-container">
          <div className="hero-decoration3"></div>
          <Subtitle subtitle="Explora el arte con nuestros tours culturales"/>
          <p className="hero-text">Aquí podrás explorar y disfrutar de las obras de arte que residen en nuestra institución. Nuestra misión es promover el arte y la cultura en nuestra comunidad, y para ello ofrecemos una variedad de tours que te permitirán conocer y apreciar nuestra colecciones de manera única e inspiradora. Únete a nosotros en esta experiencia cultural y descubre el valor y la belleza del arte en nuestro campus universitario.</p>
          <button className="calendar-btn">Ver calendario de tours</button>
        </div>
      </div>
      <div className="hero-decoration1"></div>
      <div className="hero-decoration4"></div>
    </div>
    
  )
}

export default Hero;