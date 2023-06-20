import React, { useContext } from "react";
import "./DropdownTour.css";
import { TourContext, useTour } from "../../contexts/TourContext";

const DropdownTour = ({tours}) => {
    const { tour, tourId, changeId } = useContext(TourContext);

    function getTourID(tourIdentificator, tourName) {
        const selfID = document.getElementById("toursDrop")
        selfID.innerHTML = tourName;
        const tempId = {
            id: tourIdentificator,
        }
        changeId(tempId)
    }

    return (
        <div className="dropdown">
            <button className="dropbtn"><p id='toursDrop'>Seleccionar tour:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
                {tours.map((tour) => (
                    <a value={tour.id} key={tour.id} onClick={() => {getTourID(tour.id, tour.data.nombre)}}>{tour.data.nombre}</a>
                    ))}
            </div>
        </div>
    )
}

export default DropdownTour;
