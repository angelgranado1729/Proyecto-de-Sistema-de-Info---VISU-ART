import React from "react";
import "./Information.css"
import { Link } from "react-router-dom";



const Information =()=>{
    return(
        <div className="columns">
            <div className="column">
                <p>Implementar un sistema de reserva en línea con procesamiento de pagos a través de Paypal para los tours de arte ofrecidos por la Dirección de Cultura de la Universida Metropolitana...</p>
                <Link to="/objetivos">Leer más sobre objetivos <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="vertical-row"></div>
            <div className="column">
                <p>Implementar un sistema de reserva en línea con procesamiento de pagos a través de Paypal para los tours de arte ofrecidos por la Dirección de Cultura de la Universida Metropolitana...</p>
                <Link to="/objetivos">Leer más sobre visión<i class="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="column">
                <p>Implementar un sistema de reserva en línea con procesamiento de pagos a través de Paypal para los tours de arte ofrecidos por la Dirección de Cultura de la Universida Metropolitana...</p>
                <Link to="/objetivos">Leer más sobre misión  <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default Information;

