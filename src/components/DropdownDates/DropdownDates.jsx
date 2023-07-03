import React, { useContext, useEffect } from "react";
import styles from "./DropdownDates.module.css";
import { TourContext, useTour } from "../../contexts/TourContext";
import { UserContext } from "../../contexts/UserContext";

const DropdownDates = () => {
    const { tour, tourId, changeId, changeTour } = useContext(TourContext);
    const { user } = useContext(UserContext);
    let activeDates = [];

    if (tour) {
        const currentDate = new Date().getTime();
        tour.fecha.forEach(item => {
            const [day, month, year] = item.split("/");
            const tourDate = new Date(`${month}/${day}/${year}`).getTime();
            if (tourDate >= currentDate) {
                activeDates.push(item)
            }

        })
    }

    function resetDate() {
        const selfID = document.getElementById("datesDrop")
        selfID.innerHTML = 'Seleccionar fecha:'
    }

    useEffect(() => { resetDate() }, [tourId])

    function getDate(tourDate) {
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
                {tour && activeDates.length > 0 && activeDates.map((tourDate) => (
                    <a value={tourDate} key={tourDate} onClick={() => { getDate(tourDate) }}>{tourDate}</a>
                ))}

                {tour && activeDates.length == 0 && (<a value={null} key={'nothing'}>No hay fechas disponibles</a>)}

            </div>
        </div>
    )
}

export default DropdownDates;