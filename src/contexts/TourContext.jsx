import react, { useContext, createContext, useEffect, useState } from "react";

export const TourContext = createContext(null);

export function TourContextProvider({ children }) {
    const [tour, setTour] = useState(null);
    const [tourId, setTourId] = useState(null);

    useEffect(() => { },
        [tourId])

    /* Funcion para modificar el tour (datos de reserva) en componentes o vistas*/
    const changeTour = (newTour, newId, newFecha, userId) => {
        setTour({
            id: newId,
            fecha: newTour.fecha,
            user: userId,
            chosenFecha: newFecha,
        })
    }

    const resetTour = () => {
        setTourId({
            id: null,
        });
        setTour(null);
    }

    return <TourContext.Provider
        value={{
            tour,
            tourId,
            changeId,
            changeTour,
            resetTour
        }}>{children}
    </TourContext.Provider>
}

export function userTour() {
    return useContext(TourContext)
}