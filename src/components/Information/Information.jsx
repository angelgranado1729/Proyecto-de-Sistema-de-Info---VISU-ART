import React from "react";
import "./Information.css"
import { Link } from "react-router-dom";
import { OBJECTIVES_URL } from "../../constants/urls";



const Information = () => {
    return (
        <div className="columns">
            <div className="column">
            <div className="information-decoration1"></div>
                <p>Implementar un sistema de reserva en línea con procesamiento de pagos a través de Paypal para los tours de arte ofrecidos por la Dirección de Cultura de la Universida Metropolitana...</p>
                <Link to={OBJECTIVES_URL}>Leer más sobre objetivos <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="column middle">
            <div className="information-decoration2"></div>
                <p>Implementar un sistema de reserva en línea con procesamiento de pagos a través de Paypal para los tours de arte ofrecidos por la Dirección de Cultura de la Universida Metropolitana...</p>
                <Link to={OBJECTIVES_URL}>Leer más sobre visión<i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="column">
            <div className="information-decoration3"></div>
                <p>Implementar un sistema de reserva en línea con procesamiento de pagos a través de Paypal para los tours de arte ofrecidos por la Dirección de Cultura de la Universida Metropolitana...</p>
                <Link to={OBJECTIVES_URL}>Leer más sobre misión  <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default Information;

