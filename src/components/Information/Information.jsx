import React from "react";
import "./Information.css"
import { Link } from "react-router-dom";
import { OBJECTIVES_URL } from "../../constants/urls";
import { MISION_URL } from "../../constants/urls";
import { VISION_URL } from "../../constants/urls";



const Information = () => {
    return (
        <div className="info-section">
        <div className="information-decoration3"></div>
        <div className="information-decoration1"></div>
        <div className="information-decoration2"></div>
        <div className="columns">
            <div className="column">
                <p>En VisuArt, nuestros objetivos están guiados por nuestra misión y visión. Buscamos crear una plataforma que sea accesible, educativa, comunitaria, innovadora y expansiva. Nuestro objetivo principal es…</p>
                <Link  className="information-links" to={OBJECTIVES_URL}>Leer más sobre objetivos <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="column middle">
                <p>Nuestra visión es ser la plataforma líder para la exploración y reserva de tours de arte en la Universidad Metropolitana. Aspiramos a fomentar una comunidad de amantes del arte que aprecien y participen activamente en la…</p>
                <Link  className="information-links" to={VISION_URL}>Leer más sobre visión<i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="column">
                <p>Nuestra misión en VisuArt es democratizar el acceso al arte y la cultura en la Universidad Metropolitana. Creemos que cada estudiante, profesor y visitante debe tener la oportunidad de explorar y apreciar…</p>
                <Link className="information-links" to={MISION_URL}>Leer más sobre misión  <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
        </div>
    )
}

export default Information;

