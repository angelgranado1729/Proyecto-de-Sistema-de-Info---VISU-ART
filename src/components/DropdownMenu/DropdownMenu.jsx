import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {

    const applyFilter = (e) => {
        return(e.value.target)
    }

    return (
        <select onChange={applyFilter} className="dropdownM-container">
                <option>Filtrar por:</option>
                <option value="Nombre">Nombre</option>
                <option value="Obras">Obras</option>
                <option value="Autores">Autores</option>
                <option value="Ubicación">Ubicación</option>
        </select>
    )
}

export default DropdownMenu;
