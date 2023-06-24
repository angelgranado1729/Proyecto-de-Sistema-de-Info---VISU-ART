import React from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
    return (
        <div className="dropdownnew">
            <button className="dropbtnnew"><p>Filtrar por:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-contentnew">
                <a href="#">Nombre</a>
                <a href="#">Obras</a>
                <a href="#">Autores</a>
            </div>
        </div>
    )
}

export default DropdownMenu;
