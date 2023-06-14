import React from "react";
import "./Hero.css";
import Slider from "../Slider/Slider";

const Hero =()=>{
    return(
        <div className = "section-hero">
      <div className="wrapper">
        <div className="slider-container">
            <Slider className = "slider"/>
        </div>
        <div className="text-box">
            <h2>Explora el arte con nuestros tours culturales</h2>
            <p>Aquí podrás explorar y disfrutar de las obras de arte que residen en nuestra institución. Nuestra misión es promover el arte y la cultura en nuestra comunidad, y para ello ofrecemos una variedad de tours que te permitirán conocer y apreciar nuestra colecciones de manera única e inspiradora. Únete a nosotros en esta experiencia cultural y descubre el valor y la belleza del arte en nuestro campus universitario.</p>

        </div>
      </div> 
    </div>
    )
}

export default Hero;