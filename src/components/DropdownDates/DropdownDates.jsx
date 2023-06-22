import React, { useContext } from "react";
import "./DropdownDates.css";
import { TourContext, useTour } from "../../contexts/TourContext";

const DropdownDates = () => {
    const { tour, tourId, changeId, changeTour } = useContext(TourContext);

    function getTour(tourIdentificator, tourItem) {
        const selfID = document.getElementById("toursDrop")
        selfID.innerHTML = tourItem.nombre;
        const tempId = {
            id: tourIdentificator,
        }
        changeId(tempId)
        changeTour(tourItem, tourIdentificator)
    }

    return (
        <div className="dropdown">
            <button className="dropbtn"><p id='toursDrop'>Seleccionar fecha:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
                {tour &&(<a value={tour.fecha} key={tour.fecha}>{tour.fecha}</a>)}
            </div>
        </div>
    )
}

export default DropdownDates;