import React from "react";
import "./DropdownMenu.css";

const DropdownMenu =()=>{
    return(       
        <div class="dropdown">
            <button class="dropbtn">Pick a item     
            <i class="fa-solid fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
            </div>
        </div>
    )
}

export default DropdownMenu;
