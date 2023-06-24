import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
    return (
        <div className="dropdownM-container">
            <button className="dropdownM-btn">
                <p className="dropdownM-default">Filtrar por:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdownM-content">
                <option>Nombre</option>
                <option>Obras</option>
                <option>Autores</option>
            </div>
        </div>
    )
}

export default DropdownMenu;
