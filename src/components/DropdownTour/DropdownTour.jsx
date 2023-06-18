import React from "react";
import styles from "./DropdownTour.css";



function DropdownTour({tours}) {
    return (
        <div className="dropdown">
            <button className="dropbtn"><p>Filtrar por:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
                {tours.map((tour) => (
                    <a href="#" value={tour.id} key={tour.id}>{tour.data.nombre}</a>
                    ))}
            </div>
        </div>
    )
}

export default DropdownTour