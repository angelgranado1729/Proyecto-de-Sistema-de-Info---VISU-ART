import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
    return (
        <select className="dropdownM-container">
                <option>Filtrar por:</option>
                <option>Nombre</option>
                <option>Obras</option>
                <option>Autores</option>
        </select>
    )
}

export default DropdownMenu;
