import React, { useContext } from "react";
import "./DropdownTour.css";
import { TourContext, useTour } from "../../contexts/TourContext";

const DropdownTour = ({tours}) => {
    /*Se toman los datos del context de tour (reserva)*/
    const { tour, tourId, changeId, changeTour } = useContext(TourContext);

    /***Esta funcion se encarga de actualizar el componente para indicar la seleccion del tour
     * y para cambiar el context indicando el proceso actual de la reserva, estos corresponderan
     * al id, sus fechas y el usuario actual
    ***/
    function getTour(tourIdentificator, tourItem) {
        const selfID = document.getElementById("toursDrop")
        selfID.innerHTML = tourItem.nombre;
        const tempId = {
            id: tourIdentificator,
        }
        changeId(tempId)
        changeTour(tourItem, tourIdentificator)
    }

    /***El componente creara tantas etiquetas a como tours existan en la base de datos
     * no se supone que haya 0 tours, pero en tal caso si algo como eso sucede, F por ahora
     */
    return (
        <div className="dropdown">
            <button className="dropbtn"><p id='toursDrop'>Seleccionar tour:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
                {tours.map((tour) => (
                    <a value={tour.id} key={tour.id} onClick={() => {getTour(tour.id, tour.data)}}>{tour.data.nombre}</a>
                    ))}
            </div>
        </div>
    )
}

export default DropdownTour;































/*Si lees esto, lo leiste*/