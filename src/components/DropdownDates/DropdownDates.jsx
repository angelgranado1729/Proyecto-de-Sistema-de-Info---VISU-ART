import React, { useContext, useEffect } from "react";
import styles from "./DropdownDates.module.css";
import { TourContext, useTour } from "../../contexts/TourContext";
import { UserContext } from "../../contexts/UserContext";

const DropdownDates = () => {
    const { tour, tourId, changeId, changeTour } = useContext(TourContext);
    const { user } =  useContext(UserContext);

    function resetDate(){
        const selfID = document.getElementById("datesDrop")
        selfID.innerHTML = 'Seleccionar fecha:'
    }

    useEffect(() => {resetDate()}, [tourId])

    function getDate(tourDate){
        const selfID = document.getElementById("datesDrop")
        selfID.innerHTML = tourDate;
        changeTour(tour, tourId.id, tourDate, user.id)
    }

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}><p id='datesDrop'>Seleccionar fecha:</p>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className={styles.dropdowncontent}>
               {tour && tour.fecha.map((tourDate) => (
                    <a value={tourDate} key={tourDate} onClick={() => {getDate(tourDate)}}>{tourDate}</a>
                    ))}
            </div>
        </div>
    )
}

export default DropdownDates;