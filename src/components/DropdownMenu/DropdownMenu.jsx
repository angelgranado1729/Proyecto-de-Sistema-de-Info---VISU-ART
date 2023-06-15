import React from "react";
import "./DropdownMenu.css";

const DropdownMenu =()=>{
    return(       
        <div class="dropdown">
            <button class="dropbtn"><p>Filtrar por:</p> 
            <i class="fa-solid fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
            <a href="#">Nombre</a>
            <a href="#">Obras</a>
            <a href="#">Autores</a>
            </div>
        </div>
    )
}

export default DropdownMenu;
