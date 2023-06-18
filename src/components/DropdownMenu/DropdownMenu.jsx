import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn"><p>Filtrar por:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
                <a href="#">Nombre</a>
                <a href="#">Obras</a>
                <a href="#">Autores</a>
            </div>
        </div>
    )
}

export default DropdownMenu;
